"use client";

import styles from "./standardInput.module.scss";

interface IStandardInputProps {
    placeholder?: string;
    value?: string;
    onChange?:(e: React.ChangeEvent<HTMLInputElement>)=>void;
}


export default function StandardInput({placeholder,value, onChange}: IStandardInputProps) {
    return(
    <div className={styles.container}>
        <input type="text" 
        className={styles.container_input} 
        placeholder={placeholder}
        onChange={onChange}
        value={value}>
        </input>
    </div>
    );
}