import Layout from "../components/layout";
import Heading from "../components/heading";
import PostsContainer from "../components/postscontainer";

export default function Archive() {
  return (
    <Layout>
      <Heading heading="Archive" />
      <PostsContainer />
      <div className="pagination-container">
        <a href="/" className="pagination-text">
          Previous
        </a>
        <a href="/" className="pagination-text">
          Next
        </a>
      </div>
    </Layout>
  );
}
