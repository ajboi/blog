import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Heading from "../components/heading";
import PostsContainer from "../components/postscontainer";
import Button from "../components/button";
import { getBlogsForCards } from "../prismic-config";

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Ajai Kannan | Ajai's Blog</title>
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
      <Heading heading="Recent Posts" />
      <PostsContainer params={posts} />
      <Button link="/archive" text="Archive" />
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
