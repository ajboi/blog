import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Button from "../components/button";
import {
  faTwitterSquare,
  faLinkedin,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import SocialTray from "../components/socialTray";

export default function Blog(props) {
  let mapper = [
    {
      name: "WhatsApp",
      icon: faWhatsappSquare,
      anchor: "https://www.linkedin.com/in/ajai-kannan",
    },
    {
      name: "twitter",
      icon: faTwitterSquare,
      anchor: "https://www.twitter.com/@ajaikannan",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      anchor: "https://www.linkedin.com/in/ajai-kannan",
    },
  ];
  return (
    <Layout>
      <div className="blog-container">
        <div className="blog-title-container">
          <h2 className="blog-title">Blog Heading</h2>
        </div>

        <div className="blog-featured-image-container">
          <img
            className="blog-featured-image"
            src="https://source.unsplash.com/random/1200x800"
          />
        </div>

        <div className="blog-content-container">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            enim itaque reprehenderit assumenda id dicta, modi aperiam. Odio
            quaerat ducimus optio perspiciatis temporibus. Iste iure amet
            excepturi sequi dolorum. Recusandae iusto, numquam modi in
            consequatur quas? Veritatis, laborum dolores.
          </p>

          <p>
            Lorem ipsum dolor <b>sit</b> amet consectetur, adipisicing elit.
            Aspernatur enim itaque <i>reprehenderi</i>t assumenda id dicta, modi
            aperiam. Odio quaerat ducimus optio perspiciatis temporibus. Iste
            iure amet excepturi sequi dolorum. Recusandae iusto, numquam modi in
            consequatur quas? Veritatis, laborum dolores.
          </p>

          <ul>
            <li>AJ</li>
            <li>BJ</li>
            <li>CJ</li>
          </ul>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            enim itaque reprehenderit assumenda id dicta, modi aperiam. Odio
            quaerat ducimus optio perspiciatis temporibus. Iste iure amet
            excepturi sequi dolorum. Recusandae iusto, numquam modi in
            consequatur quas? Veritatis, laborum dolores.
          </p>

          <ol>
            <li>AJ</li>
            <li>BJ</li>
            <li>CJ</li>
          </ol>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            enim itaque reprehenderit assumenda id dicta, modi aperiam. Odio
            quaerat ducimus optio perspiciatis temporibus. Iste iure amet
            excepturi sequi dolorum. Recusandae iusto, numquam modi in
            consequatur quas? Veritatis, laborum dolores.
          </p>

          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              unde ratione aaa modi temporibus provident vel.
            </p>
            <p>- Hi hi hi hi ihihihihihihihihihi.</p>
          </blockquote>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            enim itaque reprehenderit assumenda id dicta, modi aperiam. Odio
            quaerat ducimus optio perspiciatis temporibus. Iste iure amet
            excepturi sequi dolorum. Recusandae iusto, numquam modi in
            consequatur quas? Veritatis, laborum dolores.
          </p>

          <img src="https://source.unsplash.com/random/800x600" />

          <h3>Heading 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            enim itaque reprehenderit assumenda id dicta, modi aperiam. Odio
            quaerat ducimus optio perspiciatis temporibus. Iste iure amet
            excepturi sequi dolorum. Recusandae iusto, numquam modi in
            consequatur quas? Veritatis, laborum dolores.
          </p>

        </div>

      </div>

      <Button link="/" text={`Go Back`} />

      <div className="share-container">
        <p className="share-text">Share:</p>
        <SocialTray list={mapper} />
      </div>

    </Layout>
  );
}

