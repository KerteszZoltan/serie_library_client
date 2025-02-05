"use client";

import styles from "./emailInput.module.scss";
import useEmailStore from "@/app/stores/emailStore";

interface EmailInputProps {
    placeholder?: string;
    value?:string;
    onChange?:(value:string)=>void;
}


export default function EmailInput({placeholder, value}: EmailInputProps) {
    const {error, validateEmailOnChange } = useEmailStore();
    return(
    <div className={styles.container}>
        <input type="text" 
        className={ (!error) ? (styles.container_input) : (styles.container_input_error) } 
        placeholder={placeholder}
        value={value}
        onChange={(e) => { validateEmailOnChange(e.target.value)}}>
        </input>
        {error && <span className={styles.container_error}>{error}</span>}
    </div>
    );
}