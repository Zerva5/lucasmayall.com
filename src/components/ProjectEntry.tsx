import React from "react";
import IconDictionary from "./Icons";

export default function ProjectEntry({
  title,
  description,
  image,
  link,
  technologies,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}) {
  return (
    <div className="flex bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="mr-4">
        <img
          className="rounded-lg h-32 w-32 object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-2">{description}</p>
          <div className="tech-icons flex flex-wrap text-4xl font-bold fill-current">
            {technologies.map((tech, index) => (
              <div
                className="tech-icon-container mr-2 mb-2 h-8 w-8 flex justify-center items-center"
                key={index}
                title={tech}
              >
                {IconDictionary[tech]}
              </div>
            ))}
          </div>
          {/* <div className="flex flex-wrap text-4xl font-bold">
                {technologies.map((tech, index) => (
                  <div className="mr-2 mb-2 h-8 w-8 justify-center fill-current" key={index}>
                    {IconDictionary[tech]}
                  </div>
                ))}
              </div> */}
        </div>
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
  //     <div className="flex bg-white shadow-md rounded-lg p-4 mb-6 text-secondary">
  //       <div className="mr-4">
  //         <img className="rounded-lg h-32 w-32 object-cover" src={image} alt={title} />
  //       </div>
  //       <div className="flex flex-col justify-between flex-1">
  //         <div>
  //           <h2 className="text-xl font-bold mb-2">{title}</h2>
  //           <p className="text-gray-700">{description}</p>
  //         </div>
  //         <div className="mt-4">
  //           <a
  //             href={link}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="text-blue-500 hover:text-blue-700"
  //           >
  //             View Project
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   );
}
