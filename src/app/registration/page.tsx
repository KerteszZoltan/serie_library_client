"use client";

import EmailInput from "@/common/componenets/input/emailInput/emailInput";
import styles from "./page.module.scss";
import PasswordInput from "@/common/componenets/input/passwordInput/passwordInput";
import PageButton from "@/common/componenets/buttons/page/button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import StandardInput from "@/common/componenets/input/standardInput/standardInput";
import { useUsernameStore } from "../stores/usernameStore";
import useEmailStore from "../stores/emailStore";
import usePasswordStore from "../stores/passwordStore";
import { redirect } from "next/navigation";
import useNavigationStore from "../stores/navStore";
import { getToken } from "../stores/tokenCookie";
import { useEffect } from "react";

export default function RegistrationPage(){

    const {username, setUsername} = useUsernameStore();
    const {email, error} = useEmailStore();
    const {password, rules} = usePasswordStore();
    const {setActive} = useNavigationStore();

    const isAuthenticated=getToken();
    
        useEffect(()=>{
            if (isAuthenticated !== undefined) {
                redirect("/")
            }
        })


    const handleRegistration = async()=>{
        
        if(!rules.some((rule)=>!rule.isValid)){
            const res = await fetch('http://localhost:8000/register',{
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, email, password})
            });

            if (res.status === 200) {
                setActive("/login");
                redirect("/login");
            }

            console.log(username);
            console.log(email);
            console.log(password);
        }
        

    }
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
                            <StandardInput placeholder="Username" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setUsername(e.target.value)}} value={username}></StandardInput>
                        </div>
                        <div className={styles.page_background_color_container_form}>
                            <div className={styles.page_background_color_container_form_text}>Email adress:</div>
                            <EmailInput placeholder="Email address" value={email}></EmailInput>
                        </div>
                        <div className={styles.page_background_color_container_form}>
                            <div className={styles.page_background_color_container_form_text}>Password:</div>
                            <PasswordInput placeholder="Password"></PasswordInput>
                        </div>
                        <div className={styles.page_background_color_container_button}>
                            {error === null ?  <PageButton label={"Registration"} icon={faPlus} onClick={handleRegistration}></PageButton> : '' }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
