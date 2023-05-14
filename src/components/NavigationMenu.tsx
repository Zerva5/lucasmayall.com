import Link from "next/link";
import SocialButton from "./SocialButton";

import profilePhoto from "../../public/profile-photo.jpg";
import Image from "next/image";
import { Github_icon, LinkedIn_icon, Mail_icon } from "./SvgIcons";
import React, { useRef, useEffect } from "react";
import HamburgerButtons from "./HamburgerButton";
import { isWide, useWindowSize } from "../../util/WindowSize";

export function NavigationMenu() {
  const { width, height } = useWindowSize();

  const constantMenu = isWide(width);

  const [menuVisible, setMenuVisible] = React.useState(constantMenu);
  const menuRef = useRef<HTMLDivElement>(null);

  const pages: { name: string; link: string }[] = [
    { name: "Home", link: "/" },
    { name: "Resume", link: "/resume" },
    { name: "Projects", link: "/projects" },
    // { name: "Education", link: "/education" },
  ];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    const boundHandleClickOutside = handleClickOutside.bind(null);
    document.addEventListener("mousedown", boundHandleClickOutside);
    return () => {
      document.removeEventListener("mousedown", boundHandleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <div className="">
        {/* If we are constant we don't want a hamburger menu */}
        {!constantMenu && (
          <HamburgerButtons
            isVisible={() => menuVisible}
            toggleMenu={toggleMenu}
          />
        )}

        <nav
          className={`border-r-4 border-accent fixed left-0 top-0 h-screen w-64 bg-secondary text-primary flex flex-col p-4 justify-between z-10 transform transition-transform duration-300 ease-in-out 

          ${
            constantMenu
              ? "translate-x-0 static pt-4"
              : "fixed left-0 top-0 pt-16"
          }
          
          ${menuVisible ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="">
            <div className={`mx-auto font-bold text-center
            ${constantMenu ? "" : "hidden"}
            `}>
              <Image
                src={profilePhoto}
                alt="Picture of the Lucas"
                className="rounded-md aspect-square object-cover"
              />
              <h3 className="my-3 text-xl">Lucas Mayall</h3>
            </div>
            <ul className="text-lg py-0">
              {pages.map((item) => (
                <li onClick={() => setMenuVisible(false)} key={item.name}>
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

          <div className="flex justify-around">
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
