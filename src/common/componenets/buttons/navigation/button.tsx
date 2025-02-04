"use client";
import Link from "next/link";
import styles from "./button.module.scss";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import useNavigationStore from "@/app/stores/navStore";


interface INavigationButtonProps{
    text : string;
    route:string;
    icon?: IconDefinition;
    onClick?:(value:string)=>void;
}

export default function NavigationButton({ text, route }: INavigationButtonProps){
    const {active, setActive} = useNavigationStore();
    return (
        <Link
        onClick={() => setActive(route)}
        href={route} className={`${styles.container} ${active == route ? styles.container_active : ''} `}>
            <button 
            className={`${styles.container_button}`}>
            {text}
            </button>
        </Link>
        
    );
}