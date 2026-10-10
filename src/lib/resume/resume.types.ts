/**
 * Shape of src/lib/resume/resume.json.
 *
 * resume.json is the single source of truth for both outputs (the LaTeX/PDF
 * generator and the HTML page). These types describe it for TypeScript; the
 * same shape is asserted at runtime by `validate()` in
 * scripts/generate-resume-pdf.mjs, so a malformed JSON fails the build rather
 * than rendering half a resume.
 *
 * The JSON's sections are heterogeneous (entries vs. groups, and entries with
 * and without bullets), so TypeScript infers a union that doesn't expose
 * optional fields. These interfaces widen it to the shape the template renders.
 */

export type ContactItem = { label: string; href?: string };

export type SkillGroup = { label: string; items: string[] };

export type ResumeEntry = {
	role: string;
	start: string;
	/** null means the role is current. */
	end: string | null;
	organisation: string;
	location: string;
	bullets?: string[];
};

/** A section renders either a list of entries or a list of skill groups. */
export type ResumeSection = {
	id: string;
	heading: string;
	entries?: ResumeEntry[];
	groups?: SkillGroup[];
};

export type Resume = {
	name: string;
	contact: ContactItem[];
	sections: ResumeSection[];
};

/**
 * Render an entry's date range. The JSON stores `start`/`end` separately so
 * each output can format the range its own way -- the PDF uses a LaTeX en dash
 * (see `renderPeriod()` in scripts/generate-resume-pdf.mjs).
 */
export function formatPeriod(entry: Pick<ResumeEntry, "start" | "end">): string {
	return entry.end ? `${entry.start} – ${entry.end}` : `${entry.start} – Present`;
}
