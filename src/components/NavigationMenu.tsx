import Link from "next/link";
import SocialButton from "./SocialButton";

import profilePhoto from "../../public/profile-photo.jpg";
import Image from "next/image";
import { Github_icon, LinkedIn_icon, Mail_icon } from "./SvgIcons";
import React from "react";

export function NavigationMenu() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const pages: { name: string; link: string }[] = [
    { name: "Home", link: "/" },
    { name: "Resume", link: "/resume" },
    { name: "Projects", link: "/projects" },
    // { name: "Education", link: "/education" },
  ];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className="bg-red-500">
        <button
          className="bg-blue-500 fixed left-0 top-0 z-20 p-4 text-secondary focus:outline-none w-full"
          onClick={toggleMenu}
        >
          <div className="h-1 w-6 mb-1 bg-primary"></div>
          <div className="h-1 w-6 mb-1 bg-primary"></div>
          <div className="h-1 w-6 bg-primary"></div>
        </button>

        <nav
          className={`pt-20 fixed h-full left-0 top-0 h-screen w-64 bg-secondary text-primary flex flex-col p-6 justify-between z-10 transform transition-transform duration-300 ease-in-out ${
            menuVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="">
            <div className="mx-auto font-bold text-center">
              <Image
                src={profilePhoto}
                alt="Picture of the Lucas"
                className="rounded-md aspect-square object-cover"
              />
              <h3 className="my-3 text-xl">Lucas Mayall</h3>
            </div>

            <ul className="text-lg py-0">
              {pages.map((item) => (
                <li>
                  <Link
                    href={item.link}
                    className={
                      "hover:text-gray-400 text-primary hover:no-underline"
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-x-4">
            <SocialButton
              innerContent={<LinkedIn_icon />}
              link="https://github.com/Zerva5"
            />
            <SocialButton
              innerContent={<Github_icon />}
              link="https://www.linkedin.com/in/lucas-mayall/"
            />
            <SocialButton
              innerContent={<Mail_icon />}
              link="mailto:lucasmmayall@gmail.com"
            />
          </div>
        </nav>
      </div>
    </div>
  );
}
