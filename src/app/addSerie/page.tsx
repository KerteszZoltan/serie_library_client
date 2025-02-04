
import PageButton from '@/common/componenets/buttons/page/button';
import styles from './page.module.scss';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import StandardInput from '@/common/componenets/input/standardInput/standardInput';
import TextboxInput from '@/common/componenets/input/textboxInput/textboxInput';

export default function AddSeriePage() {
    return (
        <form>
            <div className={styles.page}>
                <div className={styles.page_background}>
                    <div className={styles.page_background_container}>
                        <div className={styles.page_background_container_title_container}>
                            <div>
                                English title
                            </div>
                            <div className={styles.page_background_container_title_container_title}>
                            <StandardInput ></StandardInput>
                            </div>
                        </div>
                        <div className={styles.page_background_container_title_container}>
                            <div>
                                Hungarian title
                            </div>
                            <div className={styles.page_background_container_title_container_title}>
                            <StandardInput></StandardInput>

                            </div>
                        </div>
                        <div className={styles.page_background_container_description_container}>
                            <div>
                                English description
                            </div>
                            <div className={styles.page_background_container_description_container_description}>
                            <TextboxInput></TextboxInput>
                            </div>
                        </div>
                        <div className={styles.page_background_container_description_container}>
                            <div>
                                Hungartian description 
                            </div>
                            <div className={styles.page_background_container_description_container_description}>

                            <TextboxInput></TextboxInput>
                            </div>
                        </div>
                        <div className={styles.page_background_container_btn_container}>
                            <div className={styles.page_background_container_btn_container_btn}>
                            <PageButton label={'Add Serie'} icon={faCircleUp}></PageButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}