const Postcard = () => {
  return (
    <div className="postcard">
      <a href="/">
        <img
          className="card-img"
          src="https://source.unsplash.com/random/600x400"
          width="300px"
          height="200px"
        />
      </a>
      <div className="card-contents">
        <a href="#" className="card-title-link">
          <h3 className="card-title">The Gods are here to stay!</h3>
        </a>
        <p className="post-excerpt">
          Lorem ipsum elit. Assumenda placeat, rem aut quibusdam laboriosam
          rerum temporibus similique fuga perferendis voluptates deserunt quod?
          Itaque repellat suscipit quas eius rem quisquam fugiat excepturi
          pariatur, harum molestiae.
        </p>
        <a href="/" className="card-read-more">
          Read Complete Story
        </a>
        <p className="card-date">March 31, 2020</p>
      </div>
    </div>
  );
};

export default Postcard;
