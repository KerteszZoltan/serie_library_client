"use client"
import PageButton from '@/common/componenets/buttons/page/button';
import styles from './page.module.scss';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import StandardInput from '@/common/componenets/input/standardInput/standardInput';
import TextboxInput from '@/common/componenets/input/textboxInput/textboxInput';
import { useSerieState } from '../stores/serieStore';
import useNavigationStore from '../stores/navStore';
import { redirect } from 'next/navigation';


export default function AddSeriePage() {
    const {titleEN, titleHU, descriptionEN, descriptionHU, setTitleEn, setTitleHu, setDescriptionEn, setDescriptionHu,reset} = useSerieState();
    const {setActive} = useNavigationStore();


    const handlAddSerie = async ()=>{
        console.log({titleEN, titleHU, descriptionEN, descriptionHU})

        const res = await fetch("http://localhost:8000/auth/series/addserie", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            credentials:'include',
            body:JSON.stringify({titleEN, titleHU,descriptionEN,descriptionHU })
        })

        console.log(res);
        if (res.status === 200) {
            reset();
            setActive("/");
            redirect("/");
        }
        
    }

    return (
            <div className={styles.page}>
                <div className={styles.page_background}>
                    <div className={styles.page_background_container}>
                        <div className={styles.page_background_container_title_container}>
                            <div>
                                English title
                            </div>
                            <div className={styles.page_background_container_title_container_title}>
                            <StandardInput onChange={(e)=>(setTitleEn(e.target.value))} ></StandardInput>
                            </div>
                        </div>
                        <div className={styles.page_background_container_title_container}>
                            <div>
                                Hungarian title
                            </div>
                            <div className={styles.page_background_container_title_container_title}>
                            <StandardInput onChange={(e)=>(setTitleHu(e.target.value))}></StandardInput>

                            </div>
                        </div>
                        <div className={styles.page_background_container_description_container}>
                            <div>
                                English description
                            </div>
                            <div className={styles.page_background_container_description_container_description}>
                            <TextboxInput onChange={(e)=>(setDescriptionEn(e.target.value))}></TextboxInput>
                            </div>
                        </div>
                        <div className={styles.page_background_container_description_container}>
                            <div>
                                Hungartian description 
                            </div>
                            <div className={styles.page_background_container_description_container_description}>

                            <TextboxInput onChange={(e)=>(setDescriptionHu(e.target.value))}></TextboxInput>
                            </div>
                        </div>
                        <div className={styles.page_background_container_btn_container}>
                            <div className={styles.page_background_container_btn_container_btn}>
                            <PageButton label={'Add Serie'} icon={faCircleUp} onClick={handlAddSerie}></PageButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}