import PageButton from "@/common/componenets/buttons/page/button";
import styles from "./page.module.scss";
import { faCirclePlay, faHeadphones } from "@fortawesome/free-solid-svg-icons"
import EmailInput from "@/common/componenets/input/emailInput/emailInput";
import PasswordInput from "@/common/componenets/input/passwordInput/passwordInput";

export default function LoginPage(){

    return(
        <div className={styles.page}>
            <div className={styles.page_background}></div>
            <div className={styles.page_border}>
                <div className={styles.page_border_grid}>
                    <span className={styles.page_border_grid_title}>Serie Library</span>
                    <span className={styles.page_border_grid_img}></span>
                    <span>Email:</span>
                    <span className={styles.page_border_grid_email}>
                        <EmailInput placeholder={"Enter your email..."}></EmailInput>
                    </span>
                    <span>Password:</span>
                    <span className={styles.page_border_grid_password}>
                        <PasswordInput placeholder={"password"} ></PasswordInput>
                    </span>
                    <span className={styles.page_border_grid_btn}>
                        <PageButton label={"Login"} icon={faCirclePlay} ></PageButton>
                    </span>
                    <span className={styles.page_border_grid_line}>-------or-----</span>
                    <span className={styles.page_border_grid_btn}>
                        <PageButton label={"Registration"} icon={faHeadphones} ></PageButton>
                    </span>
                </div>
            </div>
        </div>
    )
}