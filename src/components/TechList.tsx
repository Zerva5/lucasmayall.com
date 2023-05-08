import IconDictionary from "./Icons";

export default function TechList({ technologies }: { technologies: string[] }) {
  // sort technologies alphabetically
  technologies.sort((a, b) => a.localeCompare(b));

  return (
    <div className="tech-icons flex flex-wrap text-4xl">
      {technologies.map((tech, index) => (
        <div
          className="tech-icon-container mr-2 mb-0 h-8 w-8 flex justify-center items-center"
          key={index}
          title={tech}
        >
          {IconDictionary[tech]}
        </div>
      ))}
    </div>
  );
}
