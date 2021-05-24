import Link from "next/link";

const Postcard = ({ imageURL, imageAlt, title, excerpt, slugurl, date }) => {
  let dateFormat = function (date) {
    date = date.split("-");
    date = new Date(date[0], date[1]-1, date[2]);
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
    return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
  };
  return (
    <div className="postcard">
      <Link href={{ pathname: `/blog/[slug]`, query: { slug: slugurl } }}>
        <a>
          <img
            className="card-img"
            src={imageURL}
            width="300px"
            height="200px"
            alt={imageAlt}
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
        <p className="card-date">{dateFormat(date)}</p>
      </div>
    </div>
  );
};

export default Postcard;

