export const LinkedInColor = "#069"

function GithubIcon() {
  return (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .03c-6.628 0-12 5.372-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.723-4.042-1.609-4.042-1.609-.546-1.385-1.333-1.754-1.333-1.754-1.088-.745.082-.729.082-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.837 2.808 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.312.465-2.383 1.236-3.222-.124-.302-.536-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.526 11.526 0 0 1 3-.402 11.53 11.53 0 0 1 3 .402c2.292-1.553 3.3-1.23 3.3-1.23.653 1.652.24 2.874.117 3.176.77.839 1.231 1.91 1.231 3.222 0 4.61-2.804 5.625-5.476 5.917.43.372.815 1.096.815 2.214 0 1.6-.015 2.888-.015 3.277 0 .319.187.695.8.576 4.769-1.587 8.203-6.084 8.203-11.387 0-6.628-5.372-12-12-12z" />
      </svg>
  );
}

function LinkedinIcon() {
  return (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
      </svg>
  );
}

function MailIcon() {
  return (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
        <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
      </svg>
  );
}

export function TypeScriptIcon() {
  return (
    <img src="typescript_logo.svg"></img>);
}

type IconDictionaryType = {
  [key: string]: JSX.Element;
};

const IconDictionary: IconDictionaryType =  {
  github: <img src="icons/github_logo.svg"/>,
  linkedin: <img src="icons/linkedin_logo.svg"/>,
  mail: <img src="icons/mail_logo.svg"/>,
  C: <img src="icons/c_logo.svg"/>,
  "C#": <img src="icons/csharp_logo.svg"/>,
  "C++": <img src="icons/cpp_logo.svg"/>,
  "Python": <img src="icons/python_logo.svg"/>,
  // Lua: <FontAwesomeIcon icon={faLua} />,
  // ".NET": <FontAwesomeIcon icon={faNET} />,
  TensorFlow: <img src="icons/tensorflow_logo.svg"/>,
  JavaScript: <img src="icons/javascript_logo.svg"/>,
  TypeScript: <img src="icons/typescript_logo.svg"/>,
  ReactJS: <img src="icons/react_logo.svg"/>,
  NextJS: <img src="icons/nextjs_logo.svg"/>,
  "Next.js": <img src="icons/nextjs_logo.svg"/>,
  "TailwindCSS": <img src="icons/tailwindcss_logo.svg"/>,
  "Git": <img src="icons/git_logo.svg"/>,
  HTML: <img src="icons/html_logo.svg"/>,
  CSS: <img src="icons/css_logo.svg"/>,
  Linux: <img src="icons/linux_logo.svg"/>,
  "Bash": <img src="icons/shellscript_logo.svg"/>,
  "Shell Scripting": <img src="icons/shellscript_logo.svg"/>,
  "Shell": <img src="icons/shellscript_logo.svg"/>,
  "Bash Scripting": <img src="icons/shellscript_logo.svg"/>,
  "R": <img src="icons/r_logo.svg"/>,

};

export default IconDictionary;
