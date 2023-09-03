import GetProjects from "@/components/ProjectDefinitions";
import DefaultPage from "@/components/DefaultPage";
import ProjectEntry from "@/components/ProjectEntry";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  
  const projects = GetProjects();

  return (
    <DefaultPage title="Projects" textMargin={false}>
      <div className="">
          {projects.map((project, index) => (
            <ProjectEntry
              key={index}
              index={index}
              title={project.title}
              shortTitle={project.shortTitle}
              description={project.description}
              image={project.image}
              link={project.link}
              technologies={project.technologies}
            />
          ))}
      </div>
    </DefaultPage>
  );
}
