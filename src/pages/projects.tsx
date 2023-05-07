import DefaultPage from "@/components/DefaultPage";
import ProjectEntry from "@/components/ProjectEntry";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Personal Website",
      description: "The website you're on right now!",
      image: "https://via.placeholder.com/150",
      link: "https://example.com/project1",
      technologies: ["TypeScript", "ReactJS", "NextJS", "TailwindCSS", "Linux"],
    },
    {
      title: "Project 2",
      description: "This is a description of Project 2.",
      image: "https://via.placeholder.com/150",
      link: "https://example.com/project2",
      technologies: ["TensorFlow", "TypeScript", "Next.js"],
    },
    // Add more projects as needed
  ];

  return (
    <DefaultPage title="Projects" textMargin={false}>
      <div className="container mx-auto py-10">
        <div>
          {projects.map((project, index) => (
            <ProjectEntry
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </DefaultPage>
  );
}
