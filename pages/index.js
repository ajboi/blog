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
      <Heading heading="Recent Updates" />
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
