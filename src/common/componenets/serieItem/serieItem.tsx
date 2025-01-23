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
                <div className={styles.background_container_span_container}>
                    <span>English title:</span>
                    <span>{titleEN}</span>
                    <span>Hungarian title:</span>
                    <span>{titleHU}</span>
                    <span>English description:</span>
                    <span>{descriptionEN}
                    </span>
                    <span>Hungarian description:</span>
                    <span>{descriptionHU}
                    </span>
                </div>
            </div>
        </div>
    );
}