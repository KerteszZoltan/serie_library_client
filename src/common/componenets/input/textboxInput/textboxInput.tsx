import styles from './textboxInput.module.scss';

interface ITextboxInput{
    onChange?:(e: React.ChangeEvent<HTMLTextAreaElement>)=>void}

export default function TextboxInput({onChange}:ITextboxInput){
    return(
        <>
            <textarea cols={40} className={styles.textbox} onChange={onChange}></textarea>
        </>
    );
}