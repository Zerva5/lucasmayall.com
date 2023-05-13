import Image from "next/image";
import Link from "next/link";
import DefaultPage from "@/components/DefaultPage";
import ContentBubble from "@/components/ContentBubble";

import adventurePicture from "../../public/photos/j_camping01.jpg";

function Home() {
  return (
    <DefaultPage title="Home">
      <ContentBubble title="About Me">
        <p className="">
          Hey! My name is Lucas and I'm a software developer living in
          Vancouver, British Columbia. I'm currently working at{" "}
          {"the Department of National Defence"} as a software developer. I'm a
          graduate of the University of Victoria with a combined BSc in Computer
          Science and Statistics. I'm passionate about software development,
          data science, and machine learning. I'm a huge fan of the outdoors and
          love to go hiking, camping, and rock climbing. I love traveling
          (especially by motorcycle!) and have gone on a number of
          motorcycle-camping trips already.
        </p>

        <br />

        <p>
          This website aims to be a public portfolio of my work as well as a
          place to share things I find interesting.
        </p>
      </ContentBubble>

      <ContentBubble title="Projects">
        <p className="">
          During my time at UVic and in my free time I've worked on a number of
          projects. You can find a list of some of my favorites on the{" "}
          <Link href="/projects">projects page</Link> or take a deeper dive on
          my <Link href="https://www.github.com/Zerva5">Github</Link>.
        </p>
      </ContentBubble>

      <ContentBubble title="Adventures">
        {/* <div className="flex flex-col justify-evenly flex-wrap"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <p>
              I love to travel and see new places. Whether its halfway across
              the planet or a few hours away, I'm always down for an adventure.
              I've been lucky enough to have gone on a number of trips already
              and I'm always planning the next one.
            </p>
            <br />

            <p>
              During my time at UVic most of my trips had to stay on Vancouver
              Island, despite this I was still able to see some pretty amazing
              places. Hiking 5040 peak, finding long lost routes to beautiful
              lakes, and exploring hundreds of kilometers of logging roads are
              just a few of the things I got to do.
            </p>
          </div>

          <div className="">
            <Image
              className="rounded-md transition-shadow duration-200 ease-in-out hover:shadow-lg hover:shadow-black/30 "
              src={adventurePicture}
              alt={"Picture of BC landscape"}
            />
          </div>
        </div>
      </ContentBubble>
    </DefaultPage>
  );
}

export default Home;
