import styles from "./navigation.module.scss";
import Link from 'next/link';

export default function Navigation(){
    return (
        <div className={`${styles.nav}`}>
            <div className={`${styles.nav_container}`}>
                <div>Add series</div>
                <div>Series</div>
                <Link href="/login">
                    Login
                </Link>
                <div>Registration</div>
            </div>
        </div>

    );
}