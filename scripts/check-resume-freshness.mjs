/**
 * Warns if the committed static/resume.pdf was not generated from the current
 * src/lib/resume/resume.json.
 *
 * CI (Cloudflare Pages) has no LaTeX toolchain and builds from the committed PDF,
 * so a stale one would silently ship. This runs as part of `npm run check` to
 * catch that before it reaches production.
 *
 * The check compares a content hash rather than file mtimes: mtimes change on
 * every fresh clone or `git checkout`, which made an mtime comparison produce
 * false alarms. generate-resume-pdf.mjs writes the hash next to the PDF it
 * produces, so the two are only equal when the PDF really matches the JSON.
 */

import { createHash } from "node:crypto";
import { readFile, writeFile, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
export const jsonPath = join(repoRoot, "src", "lib", "resume", "resume.json");
export const pdfPath = join(repoRoot, "static", "resume.pdf");
// Deliberately NOT in static/ -- that directory is copied verbatim into the
// deployed site, and this stamp is build metadata nobody should be able to fetch.
export const stampPath = join(repoRoot, "src", "lib", "resume", "resume.pdf.sha256");

/** Hash of the resume JSON that the committed PDF was generated from. */
export async function resumeHash() {
	return createHash("sha256")
		.update(await readFile(jsonPath))
		.digest("hex");
}

/** Called by the generator once it has written a fresh PDF. */
export async function writeResumeStamp() {
	await writeFile(stampPath, `${await resumeHash()}\n`, "utf8");
}

async function main() {
	const jsonExists = await stat(jsonPath).then(
		() => true,
		() => false,
	);
	if (!jsonExists) {
		console.error("resume: src/lib/resume/resume.json is missing");
		process.exitCode = 1;
		return;
	}

	const pdfExists = await stat(pdfPath).then(
		() => true,
		() => false,
	);
	if (!pdfExists) {
		console.warn(
			"resume: static/resume.pdf is missing — run `npm run resume:pdf` (needs pdflatex).",
		);
		return;
	}

	const expected = await resumeHash();
	const stamp = await readFile(stampPath, "utf8").catch(() => null);

	if (stamp === null) {
		console.warn(
			"resume: src/lib/resume/resume.pdf.sha256 is missing — the PDF's freshness can't be\n" +
				"        verified. Run `npm run resume:pdf` and commit the stamp alongside the PDF.",
		);
		return;
	}

	if (stamp.trim() !== expected) {
		console.warn(
			"resume: static/resume.pdf does not match the current resume.json, so the PDF\n" +
				"        is stale. The deployed PDF comes from the committed file — run\n" +
				"        `npm run resume:pdf` and commit the updated PDF and its .sha256.",
		);
	}
}

// Only run the check when invoked directly -- generate-resume-pdf.mjs imports
// `writeResumeStamp` from here, and must not trigger the check as a side effect.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
	await main();
}
