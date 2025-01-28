import styles from "./error.module.scss";

export default function ErrorPage({message}: {message: string}){
    return (
        <div className={styles.background}>
            <div className={styles.background_message}>{message}</div>
            <div className={styles.background_error}>ERROR</div>
            <div className={styles.background_404}>404</div>
        </div>
    );
}