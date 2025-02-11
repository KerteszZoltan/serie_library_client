"use client"
import { useEffect } from "react";
import NavigationButton from "../buttons/navigation/button";
import styles from "./navigation.module.scss";
import useTokenState from "@/app/stores/tokenStore";
import { getToken } from "@/app/stores/tokenCookie";


export default function Navigation(){

    const {token} = useTokenState();
    const {setToken} = useTokenState();

    useEffect(()=>{
        const storedToken = getToken();
        setToken(storedToken || undefined)
    },[setToken]);
    
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