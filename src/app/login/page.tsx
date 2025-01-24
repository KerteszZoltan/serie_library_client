import styles from "./page.module.scss";

export default function LoginPage(){

    return(
        <div className={styles.page}>
            <div className={styles.page_background}></div>
            <div className={styles.page_border}>
                <div className={styles.page_border_grid}>
                    <span className={styles.page_border_grid_title}>Serie Library</span>
                    <span className={styles.page_border_grid_img}></span>
                    <span className={styles.items}>Email</span>
                    <span>...email...</span>
                    <span>Passwork</span>
                    <span>...password...</span>
                    <span className={styles.page_border_grid_btn}>BTN_LOGIN</span>
                    <span className={styles.page_border_grid_line}>------------</span>
                    <span className={styles.page_border_grid_btn}>BTN_REGISTRATION</span>
                </div>
            </div>
        </div>
    )
}