import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialTray = ({ list }) => {
  return (
    <div className="social-tray">
      {list.map(({ name, icon, anchor }) => (
        <a href={anchor} key={name} aria-label={name} target="blank">
          <FontAwesomeIcon className="social-icon" icon={icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialTray;
