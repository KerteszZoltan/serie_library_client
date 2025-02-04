import styles from './textboxInput.module.scss';

export default function TextboxInput(){
    return(
        <>
            <textarea cols={40} className={styles.textbox}></textarea>
        </>
    );
}