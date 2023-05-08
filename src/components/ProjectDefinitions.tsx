import ProjectEntry from "./ProjectEntry";

const includedProjects = ["site", "bug_inducing_commits", "p2p_chat", "housing_starts"];

const projects = [
  {
    title: "Personal Website",
    shortTitle: "site",
    description: (
      <>
        <p>
          The website you're on right now! It's a static site built with
          TypeScript, Next.js, and TailwindCSS.{" "}
        </p>
        <br />
        <p>
          The goal was to build an easy to maintain portfolio website that could
          help me with learning ReactJS and TypeScript. I wanted to get better
          with React before diving into fully dynamic web applications. At the
          time of writing this the website is focused primarily on my software
          development experience, but I plan to expand it to include my other
          interests as well.
        </p>
      </>
    ),

    image: "https://via.placeholder.com/150",
    link: "https://example.com/project1",
    technologies: [
      "TypeScript",
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "Linux",
      "Git",
    ],
  },
  {
    title: "BC Housing Starts Time Series Analysis",
    shortTitle: "housing_starts",
    description: <p>This is a description of Project 2.</p>,
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project2",
    technologies: ["R"],
  },
  {
    title: "P2P Encrypted Chat App",
    shortTitle: "p2p_chat",
    description: <p>This is a description of Project 2.</p>,
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project2",
    technologies: ["TensorFlow", "TypeScript", "Next.js"],
  },
  {
    title: "Bug Inducing Commit Classification with Tensorflow",
    shortTitle: "bug_inducing_commits",
    description: <p>This is a description of Project 2.</p>,
    image: "https://via.placeholder.com/150",
    link: "https://example.com/project2",
    technologies: ["TensorFlow", "Git", "Python", "Shell Scripting"],
  },
  // Add more projects as needed
];

export default function GetProjects(): {
  title: string;
  shortTitle: string;
  description: JSX.Element;
  image: string;
  link: string;
  technologies: string[];
}[] {
  // Get projects

  const sortedProjects = includedProjects.reduce(
    (accumulator: typeof projects, shortTitle) => {
      const project = projects.find(
        (project) => project.shortTitle === shortTitle
      );
      if (project) {
        return [...accumulator, project];
      } else {
        return accumulator;
      }
    },
    []
  );

  return sortedProjects;
}
