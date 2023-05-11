import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";

import { Day } from "./Days";


import styles from "./Days.module.scss";

interface Props {
  day: Day;


  
}

export const Card = ({ day }: Props) => {
 console.log(day)
//  let iconId;
  
let iconId;
if (day.temp >  20 ) {
  iconId = "sun";
} else if (day.temp >  15) {
  iconId = "small_rain";
} else if (day.temp >  10) {
  iconId = "mainly_cloudy";
} else if (day.temp >  0) {
  iconId = "smail_rain";
} else {
  iconId = null; 
}

  return (
    <div className={styles.card}>
      <div className={styles.day}>{day.day}</div>
      <div className={styles.day__info}>{day.day_info}</div>
      <div className={styles.img}>
        
       {iconId && <GlobalSvgSelector id={iconId} />}
      </div>

      <div className={styles.temp__day}>{day.temp}</div>
      <div className={styles.temp__night}>{day.temp}</div>
      <div className={styles.info}>{day.info}</div>
    </div>
  );
};
