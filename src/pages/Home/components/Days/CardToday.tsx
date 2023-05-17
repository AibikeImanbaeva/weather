import React, {useState, useEffect} from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import styles  from './Days.module.scss';
import { Week } from "../../../../store/types/WeekType";
import { Day, DayHour } from "./Days";

type Props = {
day : DayHour
}



export const CardToday = ({day}:Props) => {
    console.log(day)
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
        <div className={styles.card} >
            <div className={styles.day}>Время: {day.hour}</div>
        <div className={styles.day}>{day.temp}° C</div>
        <div className={styles.day__info}>{day.info}</div>
        <div className={styles.img}>
          
         {iconId && <GlobalSvgSelector id={iconId} />}
        </div>
  
   
      </div>
    );
  };


  export default CardToday