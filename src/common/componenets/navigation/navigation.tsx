"use client"
import NavigationButton from "../buttons/navigation/button";
import styles from "./navigation.module.scss";
import useTokenState from "@/app/stores/tokenStore";


export default function Navigation(){

    const {token} = useTokenState();
    
    return (
        <div className={`${styles.nav}`}>
            <div className={`${styles.nav_container}`}>
                { token == undefined ? null : <NavigationButton text="Add Series" route="/addSerie" />}
                <NavigationButton text="Series" route="/"/>
                { token == undefined ? <NavigationButton text="Login" route="/login"/> : null}
                { token == undefined ? <NavigationButton text="Registration" route="/registration"/> : null}
                { token == undefined ? null: <NavigationButton text="Logout" route=""/>}

            </div>
        </div>
    );
}