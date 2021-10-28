import {
  faTwitterSquare,
  faGithubSquare,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import SocialTray from "./socialTray";

const Footer = () => {
  let mapper = [
    {
      name: "twitter",
      icon: faTwitterSquare,
      anchor: "https://www.twitter.com/@ajaikannan",
    },
    {
      name: "GitHub",
      icon: faGithubSquare,
      anchor: "https://www.github.com/ajboi",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      anchor: "https://www.instagram.com/ajai._.kannan/",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      anchor: "https://www.linkedin.com/in/ajai-kannan",
    },
  ];
  let list = [faTwitterSquare, faGithubSquare, faInstagram, faLinkedin];
  return (
    <footer className="footer">
      <div className="social-container">
        <p className="social-text">Follow me on:</p>
        <SocialTray list={mapper} />
        <small>
          &#169;
          {`${(() => {
            let a = new Date();
            return a.getFullYear();
          })()}. `}
          <a
            className="footer-small-link"
            href="https://github.com/ajboi/blog"
            target="blank"
          >
            Ajai Kannan
          </a>
          . Site Powered by{" "}
          <a
            className="footer-small-link"
            target="blank"
            href="https://www.nextjs.org"
          >
            NextJs
          </a>{" "}
          and{" "}
          <a
            className="footer-small-link"
            target="blank"
            href="https://www.prismic.io"
          >
            Prismic
          </a>
          .
        </small>
      </div>
    </footer>
  );
};

export default Footer;
