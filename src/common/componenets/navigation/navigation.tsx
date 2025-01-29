import NavigationButton from "../buttons/navigation/button";
import styles from "./navigation.module.scss";

export default function Navigation(){
    return (
        <div className={`${styles.nav}`}>
            <div className={`${styles.nav_container}`}>
                <NavigationButton text="Add Series" route=""/>
                <NavigationButton text="Series" route="/" />
                <NavigationButton text="Login" route="/login" />
                <NavigationButton text="Registration" route=""/>
            </div>
        </div>

    );
}