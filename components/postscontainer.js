import Postcard from "./postcard";

const PostsContainer = () => {
  return (
    <div className="posts-container">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Postcard key={i} />
      ))}
    </div>
  );
};

export default PostsContainer;
