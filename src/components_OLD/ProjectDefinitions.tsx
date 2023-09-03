import ImageWithCaption from "./ImageCaption";
import ProjectEntry from "./ProjectEntry";

const includedProjects = [
  "citation_manager",
  "site",
  "bug_inducing_commits",
  "help_ui",
  "housing_starts",
  "p2p_chat",
];

const projects = [
  {
    title: "Personal Website",
    shortTitle: "site",
    description: (
      <>
        <p>
          The website you're on right now! It's a static site built with
          TypeScript, Next.js, and TailwindCSS. I built the main parts of it in a few days while on vacation in Phoenix when it was exeptionally hot outside and have been slowly making changes since.{" "}
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
          inflation and population growth!
        </p>

        <br/>

        <p>
          The full report is available on the Github page linked below.
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
  {
    title: "WIP: Citation Management Web App",
    shortTitle: "citation_manager",
    description: (
      <>
        <p>
          The inspiration for this project came from my partner who works as a technical writer. She is required to research sources for her work constantly, however she found the existing citation management tools to be lacking for her specific use case. Since the projects she is involved in are often in a similar area she regularly reuses sources for specific statistics and information. She wanted a tool that would allow her to easily search through her existing sources and find the information she needed while also acting as a project based citation manager. So far its going well and I'm learning a lot!
        </p>
        <br />

        <p>
          The goal of this project is to create a web application that will allow users to easily manage their citations and sources. The application will allow users to create projects and add sources to those projects. The sources can also be saved for later (think "favorites") and searched using tags, type, author, and other metadata. The citations for a project can be exported in a variety of formats (APA, MLA, etc.).
        </p>

        <br />
        <p>
          The project is currently in the early stages of development. The backend is being built with NodeJS and ExpressJS hooked up to MongoDB and the frontend is being built with ReactJS and TailwindCSS. At time of writing I've been working on the project for about a week and have finished user authentication (register, login, access & refresh tokens, etc) on both the frontend and backend. Now I'm working to get the basic project managament API endpoints finished and will then move on to creating the front end for the project management.
        </p>

        <div className="mt-2">
          <ImageWithCaption imgSrc={"/citation_manager.png"} altText="Citation Manager" caption="Very early mockup of the citation manager project view" />
        </div>

      </>
    ),
    image: "",
    link: "https://github.com/Zerva5/Citation-Manager",
    technologies: ["TypeScript", "ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS", "Git"],
  },
  {
    title: "H.E.L.P User Interface",
    shortTitle: "help_ui",
    description: (
      <>
        <p>
          The H.E.L.P (Health and safety for Employees in the Labor and Production fields) interface was a term project in a Human Computer Interaction course at UVic. The goal of the project was to create a user interface to assist trades workers by providing quick access to safety information and resources. The interface was designed to be simple and easy to use while also providing the user with the information they need to stay safe on the job. The project was less about graphical design and more about the user experience of the interface and the design process.
        </p>

        <br />

        <p>
          As part of the project we performed initial UI sketches, determined the applications design requirements, and then created a medium fidelity prototype using Figma. At every step we performed user testing and incorporated the feedback into the design. The final prototype was then presented to the class and the professor.
        </p>

        <div className="mt-2 flex flex-col md:flex-row mx-auto justify-evenly align-middle">
          <div className="w-64 md:w-96 mx-auto">
            <ImageWithCaption imgSrc={"/projects/HELP/figma1.png"} altText="HELP Prototype" caption="Page to report a hazard in your workplace" />
          </div>

          <div className="w-64 md:w-96 mx-auto md:mt-0 mt-4">
            <ImageWithCaption imgSrc={"/projects/HELP/figma2.png"} altText="HELP Prototype" caption="Organization overview page" />
          </div>
          <div className="w-64 md:w-96 mx-auto md:mt-0 mt-4">
            <ImageWithCaption imgSrc={"/projects/HELP/figma3.png"} altText="HELP Prototype" caption="Example page showing the specifications, PPE, and best practices for a particular tool" />
          </div>
        </div>

      </>
    ),
    image: "",
    link: "",
    technologies: ["Figma"],
  }
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
