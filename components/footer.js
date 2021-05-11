import { faTwitterSquare, faGithubSquare, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SocialTray from './socialTray'

const Footer = () => {
    let mapper = [
        {
            name: 'twitter',
            icon: faTwitterSquare,
            anchor: 'https://www.twitter.com/@ajaikannan'
        },
        {
            name: 'GitHub',
            icon: faGithubSquare,
            anchor: 'https://www.github.com/ajboi'
        },
        {
            name: 'Instagram',
            icon: faInstagram,
            anchor: 'https://www.instagram.com'
        },
        {
            name: 'LinkedIn',
            icon: faLinkedin,
            anchor: 'https://www.linkedin.com/in/ajai-kannan'
        }
    ]
    let list = [faTwitterSquare, faGithubSquare, faInstagram, faLinkedin]
    return (
        <footer className='footer'>
            <div className='social-container'>
                <p className='social-text'>Follow me on:</p>
                <SocialTray list={mapper} />
                <small>
            Copyright 2021 Rants & Reasons. Site Powered by NextJs and Prismic.
            </small>
            </div>
        </footer>
    )
}

export default Footer