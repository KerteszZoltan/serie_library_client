import styles from "./navigation.module.scss";
import Link from 'next/link';

export default function Navigation(){
    return (
        <div className={`${styles.nav}`}>
            <div className={`${styles.nav_container}`}>
                <div>Add series</div>
                <Link href="/">
                    Series
                </Link>
                <Link href="/login">
                    Login
                </Link>
                <div>Registration</div>
            </div>
        </div>

    );
}