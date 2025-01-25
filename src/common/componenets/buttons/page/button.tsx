import styles from "./button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IButtonProps{
    label : string;
    icon : IconDefinition;
    onClick?:()=>void;
}

export default function PageButton({label,icon}:IButtonProps){
    return (
        <div className={styles.container}>
            <button className={styles.container_border}>
                <div className={styles.container_border_hover}>
                    <FontAwesomeIcon icon={icon} className={styles.container_border_icon} />
                    <div className={styles.container_border_text}>{label}</div>
                    <FontAwesomeIcon icon={icon} className={styles.container_border_icon_hover} />
                </div>
            </button>
        </div>
    );
}