import Link from "next/link";
import SocialButton from "./SocialButton";
import ColoredIconDictionary, { IconDictionary } from "./Icons";

import profilePhoto from "../../public/profile-photo.jpg";
import Image from "next/image";




export function NavigationMenu() {
  const pages: { name: string; link: string }[] = [
    { name: "Home", link: "/" },
    { name: "Resume", link: "/resume" },
    { name: "Projects", link: "/projects" },
    // { name: "Education", link: "/education" },
  ];

  return (
    <>
      <nav className="fixed left-0 top-0 h-screen w-64 bg-secondary text-primary flex flex-col p-6 justify-between">
        <div className="">
        <div className="mx-auto font-bold text-center">
          <Image
            src={profilePhoto}
            alt="Picture of the Lucas"
            className="rounded-md aspect-square object-cover "
          />
          <h3 className="my-3 text-xl">Lucas Mayall</h3>
        </div>
        
        <ul className="text-lg py-0">
          {pages.map((item) => (
            <li>
              <Link href={item.link} className={"hover:text-gray-400 text-primary hover:no-underline"}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        </div>

        <div className="flex justify-center space-x-4">
          <SocialButton innerContent={IconDictionary["github"]} link="https://github.com/Zerva5"/>
          <SocialButton innerContent={IconDictionary["linkedin"]} link="https://www.linkedin.com/in/lucas-mayall/"/>
          <SocialButton innerContent={IconDictionary["mail"]} link="mailto:lucasmmayall@gmail.com"/>
        </div>
      </nav>
    </>
  );
}