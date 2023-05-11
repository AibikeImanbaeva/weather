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
if (day.info ===  'overcast clouds') {
  iconId = "mainly_cloudy";
} else if (day.info ===  'light rain') {
  iconId = "small_rain";
}else if (day.info ===  'sun') {
  iconId = "sun";
} else if (day.info ===  'scy is clear') {
  iconId = "sun";
}  else {
  iconId = 'sun'; 
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
