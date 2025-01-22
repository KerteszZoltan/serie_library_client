import styles from "./footer.module.scss";

export default function Footer(){
    return (
        <div className={`${styles.footer_container}`}>
            <div className={`${styles.footer_container_icon_container}`}>
                <div className={`${styles.footer_container_icon_container_icon}`}>
                icon1
                </div>
                <div className={`${styles.footer_container_icon_container_icon}`}>
                icon2
                </div>
                <div className={`${styles.footer_container_icon_container_icon}`}>
                icon3
                </div>

            </div>
            <div className={`${styles.footer_container_item}`}>made by Zoltan Kertesz</div>
            <div className={`${styles.footer_container_item}`}>@2025</div>

        </div>
    );
}