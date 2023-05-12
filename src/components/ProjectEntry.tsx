import React from "react";
import ColoredIconDictionary from "./Icons";
import TechList from "./TechList";

export default function ProjectEntry({
  title,
  index,
  shortTitle="",
  description,
  image,
  link,
  technologies,
}: {
  title: string;
  index: number
  shortTitle?: string;
  description: JSX.Element;
  image: string;
  link: string;
  technologies: string[];
}) {
  return (
    <div className={`flex bg-white shadow-md rounded-md p-4 ${index > 0 ? 'mt-4' : ''}`}>
      {/* <div className="mr-4">
        <img
          className="rounded-lg h-32 w-32 object-cover"
          src={image}
          alt={title}
        />
      </div> */}

      <div className="flex flex-col justify-between flex-1 text-text-primary">
        <div className="project-entry-top-container">
          <div className="flex">
            <h2 className="project-entry-title text-xl font-bold ">{title}</h2>
            <div className="project-entry-tech-container flex ml-auto">
              {/* <h2 className="mr-2 my-auto">Using: </h2> */}
              <TechList technologies={technologies} />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row mt-2">
          {/* CONTENT */}
          <div className="text-text-primary flex-1 pr-5 text-md">{description}</div>

          <div className="justify-center p-2 rounded-md bg-accent ml-auto mt-auto ">
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
    </div>
  );
}
