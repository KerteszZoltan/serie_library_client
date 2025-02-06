"use client"
import { getToken } from "@/app/stores/tokenCookie";
import NavigationButton from "../buttons/navigation/button";
import styles from "./navigation.module.scss";
import { useEffect } from "react";
import useTokenState from "@/app/stores/tokenStore";


export default function Navigation(){

    const {token, setToken} = useTokenState();

    useEffect(()=>{
        const storedToken = getToken();
        setToken(storedToken || undefined)
    },[setToken]);
    
    return (
        <div className={`${styles.nav}`}>
            <div className={`${styles.nav_container}`}>
                <NavigationButton text="Add Series" route="/addSerie" onClick={()=>{}}/>
                <NavigationButton text="Series" route="/"/>
                { token == undefined ? <NavigationButton text="Login" route="/login"/> : null}
                { token == undefined ? <NavigationButton text="Registration" route="/registration"/> : null}
                { token == undefined ? null: <NavigationButton text="Logout" route=""/>}

            </div>
        </div>
    );
}