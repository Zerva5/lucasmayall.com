import Link from "next/link";
import SocialButton from "./SocialButton";
import IconDictionary from "./Icons";



export function NavigationMenu() {
  const pages: { name: string; link: string }[] = [
    { name: "Home", link: "/" },
    { name: "Resume", link: "/resume" },
    { name: "Projects", link: "/projects" },
    { name: "Education", link: "/education" },
  ];

  return (
    <>
      <nav className="fixed left-0 top-0 h-screen w-64 bg-secondary text-primary flex flex-col p-4 justify-between">
        <div className="">
        <div className="mx-auto font-bold text-center">
          <img
            src="/profile-photo.jpg"
            className="rounded-md w-48 h-48 object-cover mx-auto"
          />
          <h2 className="my-3 text-2xl">Lucas Mayall</h2>
        </div>
        
        <ul className="text-xl py-0">
          {pages.map((item) => (
            <li>
              <Link href={item.link} className={"hover:text-gray-400"}>
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