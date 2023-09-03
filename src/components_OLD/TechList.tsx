import ColoredIconDictionary from "./Icons";

export default function TechList({ technologies }: { technologies: string[] }) {
  // sort technologies alphabetically
  technologies.sort((a, b) => a.localeCompare(b));

  return (
    <div className="tech-icons flex flex-column flex-wrap p-2  justify-center ">

      {technologies.map((tech, index) => (
        <div
          className="tech-icon-container my-auto mx-1 h-8 w-8 flex "
          key={index}
          title={tech}
        >
          {ColoredIconDictionary[tech]}
        </div>
      ))}
    </div>
  );
}
