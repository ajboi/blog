import Postcard from "./postcard";
import { RichText } from "prismic-reactjs";

const PostsContainer = ({ params }) => {
  let postArray = params.edges;
  return (
    <div className="posts-container">
      {postArray.map((i) => (
        <Postcard
          key={postArray.indexOf(i)}
          imageURL={i.node.featured_image.card.url}
          imageAlt={i.node.featured_image.alt}
          title={RichText.asText(i.node.title)}
          excerpt={i.node.excerpt}
          slugurl={i.node._meta.uid}
          date={i.node.date}
        />
      ))}
    </div>
  );
};

export default PostsContainer;
