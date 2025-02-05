"use client";

import styles from "./passwordInput.module.scss";
import usePasswordStore from "@/app/stores/passwordStore";

interface PasswordInputProps {
    placeholder?: string;
    onChange?:(value:string)=>void;
}


export default function PasswordInput({placeholder}: PasswordInputProps) {
    const { rules , validatePasswordOnChange } = usePasswordStore();
    return(
    <div className={styles.container}>
        <input type="password" 
        className={ (!rules.some((rule)=> !rule.isValid)) ? (styles.container_input) : (styles.container_input_error) } 
        placeholder={placeholder}
        onChange={(e) => { validatePasswordOnChange(e.target.value)}}>
        </input>
    </div>
    );
}