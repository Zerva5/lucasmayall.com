import React from "react";
import ColoredIconDictionary from "./Icons";
import TechList from "./TechList";

export default function ProjectEntry({
  title,
  index,
  shortTitle = "",
  description,
  image,
  link,
  technologies,
}: {
  title: string;
  index: number;
  shortTitle?: string;
  description: JSX.Element;
  image: string;
  link: string;
  technologies: string[];
}) {
  return (
    <div
      className={`flex bg-white shadow-md rounded-md p-4 ${
        index > 0 ? "mt-4" : ""
      }`}
    >
      {/* <div className="mr-4">
        <img
          className="rounded-lg h-32 w-32 object-cover"
          src={image}
          alt={title}
        />
      </div> */}

      <div className=" flex-1 text-text-primary">
        <div className="project-entry-top-container">
          <div className="flex flex-col md:flex-row">
            <h4 className="project-entry-title text-xl font-bold">{title}</h4>
            <div className="project-entry-tech-container flex justify-self-end ml-0 md:ml-auto">
              <h5 className="my-auto mr-1">Technologies: </h5>
              <TechList technologies={technologies} />
            </div>
          </div>
        </div>
        {/* CONTENT */}
        <div className="text-text-primary flex-1 pr-5 text-md">
          {description}
        </div>

        <div className="justify-center p-2 rounded-md bg-accent mt-2 w-auto inline-block">
          <a
            href={link}
            // target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:no-underline"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
