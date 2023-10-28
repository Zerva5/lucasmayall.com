import BlinkingCursor from "./BlinkingCursor/BlinkingCursor"
import SocialButton from "./SocialButton"
import { Github_icon, LinkedIn_icon, Mail_icon } from "./SvgIcons"


export default function Header() {
    return (
        <div className='header'>
            <div className='header-left'>
                <h2 className='name'>Lucas M.K. Mayall</h2>
                <h3 className='whoami'>Full stack software developer in Saskatoon, SK.<BlinkingCursor /></h3>

            </div>
            <div className='links'>
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

        </div>
    )
}