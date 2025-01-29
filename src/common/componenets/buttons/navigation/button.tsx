import Link from "next/link";
import styles from "./button.module.scss";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";


interface INavigationButtonProps{
    text : string;
    route:string;
    icon?: IconDefinition;
    onClick?:()=>void;
}

export default function NavigationButton({ text, route }: INavigationButtonProps){
    return (
        <Link href={route} className={styles.container} >
            <button className={styles.container_button}>
            {text}
            </button>
        </Link>
        
    );
}