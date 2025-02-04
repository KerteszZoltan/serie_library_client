"use client"

import PageButton from "@/common/componenets/buttons/page/button";
import styles from "./page.module.scss";
import { faCirclePlay, faHeadphones } from "@fortawesome/free-solid-svg-icons"
import EmailInput from "@/common/componenets/input/emailInput/emailInput";
import PasswordInput from "@/common/componenets/input/passwordInput/passwordInput";
import useEmailStore from "../stores/emailStore";
import usePasswordStore from "../stores/passwordStore";
import useCookieStore from "../stores/storeCookie";
import { redirect } from 'next/navigation'




export default function LoginPage(){

    const {email} = useEmailStore();
    const {password} = usePasswordStore();
    const {setCookie} = useCookieStore();
    
    const handleLogin = async ()=>{
        const res = await fetch("http://localhost:8000/login", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({email, password}),
        })
        setCookie(await res.json());
        if (res.ok) {
            redirect("/");
        }
    };
    

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
                        <PageButton label={"Login"} icon={faCirclePlay} onClick={handleLogin} ></PageButton>
                    </span>
                    <span className={styles.page_border_grid_line}>-------or-----</span>
                    <span className={styles.page_border_grid_btn}>
                        <PageButton label={"Registration"} icon={faHeadphones} onClick={()=>{}} ></PageButton>
                    </span>
                </div>
            </div>
        </div>
    )
}
