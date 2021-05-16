import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import { getAbout } from "../prismic-config";
import Button from "../components/button";
import {
  faTwitterSquare,
  faLinkedin,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import SocialTray from "../components/socialTray";
import { RichText } from "prismic-reactjs";

export default function About({ photoAlt, photoUrl, content }) {
  return (
    <Layout>
      <div className="blog-container">
        <div className="blog-featured-image-container">
          <img className="profile-picture" src={photoUrl} />
        </div>
        <div className="blog-content-container">{RichText.render(content)}</div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let node = await getAbout();
  let photoUrl = node.profile_picture.url;
  let photoAlt = node.profile_picture.alt;
  let content = node.about;
  return {
    props: { photoUrl, photoAlt, content },
    revalidate: 1,
  };
}
