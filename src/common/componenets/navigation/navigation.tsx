"use client"
import { getToken } from "@/app/stores/tokenStore";
import NavigationButton from "../buttons/navigation/button";
import styles from "./navigation.module.scss";

function isActiveToken(){
    if (getToken() != undefined) {
        console.log(getToken());
        return true;
    }else{
        console.log(getToken());
        return false;
    }
}

export default function Navigation(){
    return (
        <div className={`${styles.nav}`}>
            <div className={`${styles.nav_container}`}>
                <NavigationButton text="Add Series" route="/addSerie" onClick={()=>{}}/>
                <NavigationButton text="Series" route="/"/>
                { !isActiveToken() ? <NavigationButton text="Login" route="/login"/> : ""}
                { !isActiveToken() ? <NavigationButton text="Registration" route="/registration"/> : ""}
                { isActiveToken() ? <NavigationButton text="Logout" route=""/>: ""}

            </div>
        </div>
    );
}