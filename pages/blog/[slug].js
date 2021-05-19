import Head from "next/head";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { getBlogWithSlug } from "../../prismic-config";
import Layout from "../../components/layout";
import Button from "../../components/button";

export default function Blog({ post }) {
  let htmlcontent;
  if (post.body == null) {
    htmlcontent = RichText.render(post.content);
  } else {
    htmlcontent = post.body.map((slice) => {
      if (slice.type === "quote") {
        return (
          <blockquote> {RichText.render(slice.primary.quote)} </blockquote>
        );
      }
      if (slice.type === "paragraph") {
        return RichText.render(slice.primary.paragraph);
      }
      if (slice.type === "image") {
        return (
          <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
        );
      }
    });
  }
  return (
    <Layout>
      <div className="blog-container">
        <div className="blog-title-container">
          <h2 className="blog-title">{RichText.asText(post.title)}</h2>
        </div>

        <div className="blog-featured-image-container">
          <img
            className="blog-featured-image"
            src={post.featured_image.url}
            alt={post.featured_image.alt}
            width="1200px"
            height="800px"
          />
        </div>

        <div className="blog-content-container">{htmlcontent}</div>
      </div>

      <Button link="/" text={`Go Back`} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  let slug = params.slug;
  let value = await getBlogWithSlug(slug);
  let post = value.edges[0].node;
  return {
    props: { post },
  };
}
