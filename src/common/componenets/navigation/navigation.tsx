import styles from "./navigation.module.scss";

export default function Navigation(){
    return (
        <div className={`${styles.nav_container}`}>
            <div className={`${styles.nav_container_item}`}>Add series</div>
            <div className={`${styles.nav_container_item}`}>Series</div>
            <div className={`${styles.nav_container_item}`}>Login</div>
            <div className={`${styles.nav_container_item}`}>Registration</div>
        </div>
    );
}