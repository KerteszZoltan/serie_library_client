import SerieItem from "@/common/componenets/serieItem/serieItem";
import styles from "./page.module.scss";
import { Key } from "react";
import ErrorPage from "@/common/componenets/error/error";

export default async function Home() {
  try{
    const data = await fetch('http://localhost:8000/series');
    const series = await data.json();
    return (
      <div className={styles.page}>
        {series.map((series: { _id: Key | null | undefined; titleEN: string; titleHU: string; descriptionEN: string; descriptionHU: string; }) => (
          <SerieItem key={series._id} titleEN={series.titleEN} titleHU={series.titleHU} descriptionEN={series.descriptionEN} descriptionHU={series.descriptionHU} />
        ))}
      </div>
    );
  }
  catch(e){
    return (
      <div className={styles.page}>
        <div className={styles.page_error}><ErrorPage message={String(e)}></ErrorPage></div>
      </div>
    );
  }
  
}
