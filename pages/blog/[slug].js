import Head from "next/head";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { getBlogWithSlug } from "../../prismic-config";
import Layout from "../../components/layout";
import Button from "../../components/button";

export default function Blog({ post }) {
  let htmlcontent = post.body;

  let mdRender = htmlcontent.map((slice) => {
    if (slice == null) {
      return;
      RichText.render(slice);
    }
    if (slice.type === "quote") {
      return <blockquote>{RichText.render(slice.primary.quote)}</blockquote>;
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

  let dateFormat = function (date) {
    date = date.split("-");
    date = new Date(date[0], date[1] - 1, date[2]);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${date.getDate()} ${
      months[date.getMonth()]
    }, ${date.getFullYear()}`;
  };

  return (
    <Layout>
      <Head>
        <title>{`${RichText.asText(post.title)} | Ajai's Blog`}</title>
        <link rel="icon" href="favico.ico" />
        <meta name="Description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords} />
      </Head>
      <div className="blog-container">
        <div className="blog-title-container">
          <h2 className="blog-title">{RichText.asText(post.title)}</h2>
          <span className="blog-date">{dateFormat(post.date)}</span>
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

        <div className="blog-content-container">
          {mdRender.map((x, index) => {
            return <div key={index}>{x}</div>;
          })}
        </div>
      </div>

      <Button link="/" text={`Go Back`} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  let slug = params.slug;
  let value = await getBlogWithSlug(slug);
  let post_val = value.edges[0];
  let post = post_val.node;
  return {
    props: { post },
  };
}
