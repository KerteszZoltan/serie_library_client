import styles from "./serieItem.module.scss";
import IserieModel from "../../../app/models/IserieModel";

export default function SerieItem(
    {titleEN,
    titleHU,
    descriptionEN,
    descriptionHU
    } : IserieModel){
    return (
        <div className={styles.background}>
            <div className={styles.background_container}>
                    <span className={styles.background_container_const_titleEN}>English title:</span>
                    <span className={styles.background_container_titleEN}>{titleEN}</span>
                    <span className={styles.background_container_const_titleHU}>Hungarian title:</span>
                    <span className={styles.background_container_titleHU}>{titleHU}</span>
                    <div className={styles.background_container_descriptions}>
                        <span className={styles.background_container_descriptions_const_descriptionEN}>English description:</span>
                        <span className={styles.background_container_descriptions_description}>{descriptionEN}
                        </span>
                        <span  className={styles.background_container_descriptions_const_descriptionHU}>Hungarian description:</span>
                        <span  className={styles.background_container_descriptions_description}>{descriptionHU}
                        </span>
                    </div>
                    
            </div>
        </div>
    );
}