import Image from "next/image";
import Link from "next/link";
import SocialButton from "@/components/SocialButton";
import { NavigationMenu } from "@/components/NavigationMenu";
import Layout from "@/components/Layout";
import DefaultPage from "@/components/DefaultPage";
import { TypeScriptIcon } from "@/components/Icons";

function Home() {
  return (
    <DefaultPage title="About Me">
        <p className="">
          Hey! My name is Lucas and I'm a software developer living in
          Vancouver, British Columbia. I'm currently working at{" "}
          {"the Department of National Defence"} as a software developer. I'm a
          graduate of the University of Victoria with a combined BSc in Computer
          Science and Statistics. I'm passionate about software development,
          data science, and machine learning. I'm also a huge fan of the
          outdoors and love to go hiking, camping, and rock climbing.
        </p>

        <br/>

        <p>
          This website aims to be a public portfolio of my work as well as a place to share things I am proud of. I hope you enjoy your stay!
        </p>
    </DefaultPage>
  );
}

export default Home;
