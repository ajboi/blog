import Layout from "../components/layout";
import Heading from "../components/heading";
import PostsContainer from "../components/postscontainer";
import { getBlogsForCards } from "../prismic-config";

export default function Archive({posts}) {
  return (
    <Layout>
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