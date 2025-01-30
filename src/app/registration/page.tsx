"use client";

import EmailInput from "@/common/componenets/input/emailInput/emailInput";
import styles from "./page.module.scss";
import PasswordInput from "@/common/componenets/input/passwordInput/passwordInput";
import PageButton from "@/common/componenets/buttons/page/button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import StandardInput from "@/common/componenets/input/standardInput/standardInput";

export default function RegistrationPage(){
    return(
        <div className={styles.page}>
            <div className={styles.page_background_image}>
                <div className={styles.page_background_color}>
                    <div className={styles.page_background_color_container}>
                        <div className={styles.page_background_color_container_image}></div>
                        <div className={styles.page_background_color_container_title}>
                            Registration
                        </div>
                        <div className={styles.page_background_color_container_form}>
                            <div className={styles.page_background_color_container_form_text}>Username:</div>
                            <StandardInput placeholder="Username"></StandardInput>
                        </div>
                        <div className={styles.page_background_color_container_form}>
                            <div className={styles.page_background_color_container_form_text}>Email adress:</div>
                            <EmailInput placeholder="Email address"></EmailInput>
                        </div>
                        <div className={styles.page_background_color_container_form}>
                            <div className={styles.page_background_color_container_form_text}>Password:</div>
                            <PasswordInput placeholder="Password"></PasswordInput>
                        </div>
                        <div className={styles.page_background_color_container_button}>
                            <PageButton label={"Registration"} icon={faPlus}></PageButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}