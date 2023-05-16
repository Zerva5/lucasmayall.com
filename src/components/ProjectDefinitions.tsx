import ProjectEntry from "./ProjectEntry";

const includedProjects = [
  "site",
  "bug_inducing_commits",
  "p2p_chat",
  "housing_starts",
];

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
          help me gain experience with ReactJS components, TypeScript, and CI/CD techniques with Github
          Actions. I wanted to get more familiar with TypeScript and ReactJS before diving into fully
          dynamic web applications. At the time of writing this the website is
          focused primarily on my software development experience, but I plan to
          expand it to include my other interests as well.
        </p>
      </>
    ),

    image: "/150_placeholder.png",
    link: "https://github.com/Zerva5/Zerva5.github.io",
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
    description: (
      <>
        <p>
          A detailed time series analysis of housing starts in British Columbia.
          This report was the final project for a time series analysis course at
          UVic and was done in collaboration with{" "}
          <a href="https://christian-kouts.github.io/" target="_blank">
            Christian Koutsandreas
          </a>
          , a fellow student.
        </p>
        <br />
        <p>
          One of the more shocking findings was that despite the increasing
          number of multi-family housing starts (e.g. apartments), the average
          yearly rent increase is continuing to rise at a rate higher than
          inflation!
        </p>
      </>
    ),
    image: "/150_placeholder.png",
    link: "https://github.com/Zerva5/BC-Housing-Starts-Analysis",
    technologies: ["R"],
  },
  {
    title: "P2P Encrypted Chat App",
    shortTitle: "p2p_chat",
    description: (
      <p>
        A P2P, encrypted chat application created as the final project for a
        security engineering course at UVic. I was the team lead for the group
        of 4 and worked on the networking, interface, and overall design. The
        application implements RSA encryption, perfect forward secrecy and a web
        of trust model for key distribution in order to avoid the need for a
        certificate authority.
      </p>
    ),
    image: "/150_placeholder.png",
    link: "https://github.com/Zerva5/P2P-Encrypted-Chat",
    technologies: ["Python", "Git"],
  },
  {
    title: "Bug Inducing Commit Classification with Tensorflow",
    shortTitle: "bug_inducing_commits",
    description: (
      <>
        <p>
          This complex and technically challenging project was the term project
          for my Data Mining course at UVic. My group was led by fellow student{" "}
          <a target="_blank" href="https://bw.codexwilkes.com">
            Brennan Wilkes
          </a>{" "}
          who is responsible for both the idea and model design. Our goal was
          given a known bug-fixing commit and some other unknown commit
          determine is the unknown commit caused the bug. We employed techniques
          from recent literature such as code difference vectorization, Siamese
          representation learning, and attention layers.
        </p>
        <br />
        <p>
          Our performance target was to surpass 50% accuracy, effectively doing
          better than a coin flip. I'm happy to say we surpassed this goal. The paper is pending release as we
          are hoping improve the model further.
        </p>
      </>
    ),
    image: "/150_placeholder.png",
    link: "https://github.com/Zerva5/Classifying-Bug-Inducing-Commits",
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
