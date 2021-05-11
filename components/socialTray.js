import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialTray = ({list}) => {
    return (
        <div className='social-tray'>
            {list.map( ({name, icon, anchor}) => 
                (
                    <a href={anchor} target='blank'>
                    <FontAwesomeIcon className='social-icon' key={name} icon={icon} />
                    </a>
                ))}
        </div>
    )
}

export default SocialTray