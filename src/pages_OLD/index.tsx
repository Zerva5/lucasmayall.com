import Image from "next/image";
import Link from "next/link";
import DefaultPage from "@/components/DefaultPage";
import ContentBubble from "@/components/ContentSection";

import adventurePicture from "../../public/photos/5040_02.jpg";
import profilePhoto from "../../public/profile-photo.jpg";
import { isWide, useWindowSize } from "../../util/WindowSize";
import ImageWithCaption from "@/components/ImageCaption";

function Home() {

  const { width, height } = useWindowSize();

  const constantMenu = isWide(width);

  var profileImage = (<Image
    src={profilePhoto}
    alt="Picture of Lucas"
    className="rounded-md aspect-square object-cover w-72 mx-auto"
  />);

  if (constantMenu) {
    profileImage = (<></>);
  }



  return (
    <>
      {profileImage}

      <DefaultPage title="Lucas Mayall">
        <ContentBubble title="About Me" isFirst={true}>
          <p className="">
            Hey! My name is Lucas and I'm a software developer living in Saskatoon, Saskatchewan. Currently, I work at{" "}
            {"Bright Health Solutions Society"} as a developer on the operations team.
            I graduated from the University of Victoria in 2023 with a combined BSc in Computer Science and Statistics.
            My tech-related passions include software development, data science, building computers, 3d printing, and fixing my old Honda CRV.
            I'm an avid outdoorsman and enjoy hiking, camping, and rock climbing. Traveling is also a passion of mine, especially by motorcycle (although the season here in Saskatchewan is atrocious!).
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
          <br />
          <p>
            Like many software developers I have a million unfinished projects from random ideas, testing, or just for fun. In highschool I found it very difficult to make progress on these projects and would often get stuck in a loop of starting a project, getting bored or frustrated, and then starting a new one. I've since learned to focus on finishing projects and have been able to produce some pretty cool things. I still have a lot of unfinished projects but now they act more as testing grounds for a new ideas, instead of a graveyard of ideas.
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
                places. Hiking 50-40 peak, finding long lost routes to beautiful
                lakes, and exploring hundreds of kilometers of logging roads are
                just a few of the things I got to do.
              </p>
            </div>

            <div className="">
              <ImageWithCaption altText="5040 Peak, BC" imgSrc={adventurePicture} caption="5040 Peak, Vancouver Island - Summer 2022" />
              {/* <ImageWithCaption altText="Rowbotham Lake, Parksville, BC" imgSrc={adventurePicture} caption="Rowbotham Lake, Parksville, BC"/> */}
              {/* <Image
              className="rounded-md transition-shadow duration-200 ease-in-out hover:shadow-lg hover:shadow-black/30 "
              src={adventurePicture}
              alt={"Picture of BC landscape"}
            /> */}
            </div>
          </div>
        </ContentBubble>
      </DefaultPage>
    </>
  );
}

export default Home;
