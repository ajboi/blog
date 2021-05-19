import Link from "next/link";

const Button = ({ link, text }) => {
  return (
    <button className="button">
      <Link href={link} passHref>
        <a className="button-text text-center align-center">{text}</a>
      </Link>
    </button>
  );
};

export default Button;
