import styles from "./navigation.module.scss";

export default function Navigation(){
    return (
        <div className={`${styles.nav}`}>
            <div className={`${styles.nav_container}`}>
                <div>Add series</div>
                <div>Series</div>
                <div>Login</div>
                <div>Registration</div>
            </div>
        </div>

    );
}