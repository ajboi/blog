import Layout from "../components/layout";
import Head from "next/head";
import Heading from "../components/heading";
import PostsContainer from "../components/postscontainer";
import { getBlogsForCards } from "../prismic-config";

export default function Archive({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Archive | Ajai's Blog</title>
        <link rel="icon" href="favico.ico" />
        <meta
          name="Description"
          content="Hi, I am Ajai Kannan, and this is my personal blog."
        />
        <meta
          name="Keywords"
          content="ajai kannan, ajai, ajai k, ajai kannan k, ajai blog"
        />
      </Head>
      <Heading heading="Archive" />
      <PostsContainer params={posts} />
      {/* <div className="pagination-container">
        <a href="/" className="pagination-text">
          Previous
        </a>
        <a href="/" className="pagination-text">
          Next
        </a>
      </div> */}
    </Layout>
  );
}

export async function getStaticProps() {
  let posts = await getBlogsForCards(" ", 8);
  return {
    props: { posts },
    revalidate: 1,
  };
}
