"use client";

import styles from "./standardInput.module.scss";

interface IStandardInputProps {
    placeholder?: string;
    onChange?:(value:string)=>void;
}


export default function StandardInput({placeholder}: IStandardInputProps) {
    return(
    <div className={styles.container}>
        <input type="text" 
        className={styles.container_input} 
        placeholder={placeholder}>
        </input>
    </div>
    );
}