import React, {useState, useEffect} from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import styles  from './Days.module.scss';
import { Week } from "../../../../store/types/WeekType";
import { Day } from "./Days";

type Props = {
day : Day
}


export const CardToday = ({day}:Props) => {
    console.log(day)
    
    return (
        <div className={styles.card} >
        <div className={styles.day}>{day.day}</div>
        <div className={styles.day__info}>{day.day_info}</div>
        <div className={styles.img}>
          
         {/* {iconId && <GlobalSvgSelector id={iconId} />} */}
        </div>
  
        <div className={styles.temp__day}>{day.temp}</div>
        <div className={styles.temp__night}>{day.temp}</div>
        <div className={styles.info}>{day.info}</div>
      </div>
    );
  };


  export default CardToday