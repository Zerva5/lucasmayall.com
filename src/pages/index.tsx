import CircleImage from "@/components/CircleImage";
import Header from "@/components/Header";
import Page from "@/components/Page";
import PrettyBackground from "@/components/PrettyBackground/PrettyBackground";
import WanderingDots from "@/components/WanderingDots";


export default function Home() {
    return (
        <Page>
            {/* <PrettyBackground> */}
            <Header />
            <div className='content mat-styles'>
                <h2>Hi!</h2>
                <p className="">
                    My name is Lucas and I'm a software developer in Saskatoon, Saskatchewan. I work at
                    Bright Health Solutions Society on the Operations team as a developer.
                    <br></br>
                    I graduated from the University of Victoria in 2023 with a combined BSc in Computer Science and Statistics.
                    My tech-related passions include software development, data science, building computers, 3D printing, and fixing my old Honda CRV.
                    <br></br>
                    I'm an avid outdoorsman and enjoy hiking, camping, and rock climbing. Traveling is also a passion of mine, especially by motorcycle (although the riding season here in Saskatchewan is atrocious).
                </p>
                
                <h2>Resume</h2>
                <div className="resume">
                    <embed
                        className=""
                        width="600px"
                        height="800px"
                        src="/resume.pdf"
                        type="application/pdf"
                    />
                </div>
            </div>

            {/* </PrettyBackground> */}
        </Page>
    )


}