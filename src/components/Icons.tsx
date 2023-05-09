import Image from "next/image";
import GithubLogo from "../../public/logos/github_logo.svg";
import LinkedInLogo from "../../public/logos/linkedin_logo.svg";
import CLogo from "../../public/logos/c_logo.svg";
import CSharpLogo from "../../public/logos/csharp_logo.svg";
import CppLogo from "../../public/logos/cpp_logo.svg";
import PythonLogo from "../../public/logos/python_logo.svg";
import TensorFlowLogo from "../../public/logos/tensorflow_logo.svg";
import JavaScriptLogo from "../../public/logos/javascript_logo.svg";
import TypeScriptLogo from "../../public/logos/typescript_logo.svg";
import ReactJSLogo from "../../public/logos/react_logo.svg";
import NextJSLogo from "../../public/logos/nextjs_logo.svg";
import TailwindCSSLogo from "../../public/logos/tailwindcss_logo.svg";
import GitLogo from "../../public/logos/git_logo.svg";
import HTMLLogo from "../../public/logos/html_logo.svg";
import CSSLogo from "../../public/logos/css_logo.svg";
import LinuxLogo from "../../public/logos/linux_logo.svg";
import ShellScriptLogo from "../../public/logos/shellscript_logo.svg";
import RLogo from "../../public/logos/r_logo.svg";

import LinkedInIcon from "../../public/icons/linkedin_icon.svg";
import GithubIcon from "../../public/icons/github_icon.svg";

import MailIcon from "../../public/icons/mail_icon.svg";

export function TypeScriptIcon() {
  return <img src="typescript_logo.svg"></img>;
}

type IconDictionaryType = {
  [key: string]: JSX.Element;
};

export const IconDictionary: IconDictionaryType = {
  linkedin: <Image className="fill-pink-500 text-red-500" src={LinkedInIcon} alt="LinkedIn icon" />,
  mail: <Image className="icon" src={MailIcon} alt="Mail icon" />,
  github: <Image className="fill-pink-500 text-red-500 " src={GithubIcon} alt="Github icon" />,
};

const LogoDictionary: IconDictionaryType = {
  github: <Image src={GithubLogo} alt="Github icon" />,
  linkedin: <Image src={LinkedInLogo} alt="LinkedIn icon" />,
  C: <Image src={CLogo} alt="C icon" />,
  "C#": <Image src={CSharpLogo} alt="C# icon" />,
  "C++": <Image src={CppLogo} alt="C++ icon" />,
  Python: <Image src={PythonLogo} alt="Python icon" />,
  TensorFlow: <Image src={TensorFlowLogo} alt="TensorFlow icon" />,
  JavaScript: <Image src={JavaScriptLogo} alt="JavaScript icon" />,
  TypeScript: <Image src={TypeScriptLogo} alt="TypeScript icon" />,
  ReactJS: <Image src={ReactJSLogo} alt="ReactJS icon" />,
  NextJS: <Image src={NextJSLogo} alt="NextJS icon" />,
  "Next.js": <Image src={NextJSLogo} alt="Next.js icon" />,
  TailwindCSS: <Image src={TailwindCSSLogo} alt="TailwindCSS icon" />,
  Git: <Image src={GitLogo} alt="Git icon" />,
  HTML: <Image src={HTMLLogo} alt="HTML icon" />,
  CSS: <Image src={CSSLogo} alt="CSS icon" />,
  Linux: <Image src={LinuxLogo} alt="Linux icon" />,
  Bash: <Image src={ShellScriptLogo} alt="Bash icon" />,
  "Shell Scripting": <Image src={ShellScriptLogo} alt="Shell Scripting icon" />,
  Shell: <Image src={ShellScriptLogo} alt="Shell icon" />,
  "Bash Scripting": <Image src={ShellScriptLogo} alt="Bash Scripting icon" />,
  R: <Image src={RLogo} alt="R icon" />,
};

export default LogoDictionary;
