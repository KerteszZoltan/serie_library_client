import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
    return (
        <div className={`${styles.footer_container}`}>
            <div className={`${styles.footer_container_icon_container}`}>
                <FontAwesomeIcon icon={faGithub} className={`${styles.footer_container_icon_container_icon}`} />
                <FontAwesomeIcon icon={faLinkedin} className={`${styles.footer_container_icon_container_icon}`} />
                <FontAwesomeIcon icon={faFile} className={`${styles.footer_container_icon_container_icon}`} />
            </div>
            <div className={`${styles.footer_container_item}`}>made by Zoltan Kertesz</div>
            <div className={`${styles.footer_container_item}`}>@2025</div>

        </div>
    );
}