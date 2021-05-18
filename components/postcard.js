import Link from "next/link";

const Postcard = ({ imageURL, imageAlt, title, excerpt, slugurl, date }) => {
  return (
    <div className="postcard">
      <Link href={{ pathname: `/blog/[slug]`, query: { slug: slugurl } }}>
        <a>
          <img
            className="card-img"
            src={imageURL}
            width="300px"
            height="200px"
          />
        </a>
      </Link>
      <div className="card-contents">
        <Link href={{ pathname: `/blog/[slug]`, query: { slug: slugurl } }}>
          <a className="card-title-link">
            <h3 className="card-title">{title}</h3>
          </a>
        </Link>
        <p className="post-excerpt">{excerpt}</p>
        <Link href={{ pathname: `/blog/[slug]`, query: { slug: slugurl } }}>
          <a className="card-read-more">Read Complete Story</a>
        </Link>
        <p className="card-date">{date}</p>
      </div>
    </div>
  );
};

export default Postcard;

