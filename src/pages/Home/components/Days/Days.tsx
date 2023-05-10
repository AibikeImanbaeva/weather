import React from 'react';
import { Card } from './Card';

import styles  from './Days.module.scss';
import { Tabs } from './Tabs';
import { Week } from '../../../../store/types/types';
export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp: string;
  info: string;
}


type Props = {
  week: Week;

}

export const Days = ({week}: Props) => {





  const days: Day[] = [
    {
      day: 'Сегодня',
      day_info: '28 авг',
      icon_id: 'sun',
      temp: '3',
      info: 'Облачно',
    },
    {
      day: 'Завтра',
      day_info: '29 авг',
      icon_id: 'small_rain_sun',
      temp: '3',
      info: 'небольшой дождь и солнце',
    },
    {
      day: 'Ср',
      day_info: '30 авг',
      icon_id: 'small_rain',
      temp: '3',
      info: 'небольшой дождь',
    },
    {
      day: 'Чт',
      day_info: '28 авг',
      icon_id: 'mainly_cloudy',
      temp: '3',
      info: 'Облачно',
    },
    {
      day: 'Пт',
      day_info: '28 авг',
      icon_id: 'rain',
      temp: '3',
      info: 'Облачно',
    },
    {
      day: 'Сб',
      day_info: '28 авг',
      icon_id: 'sun',
      temp: '3',
      info: 'Облачно',
    },
    {
      day: 'Вс',
      day_info: '28 авг',
      icon_id: 'sun',
      temp: '3',
      info: 'Облачно',
    },
  ];
  
  const dt = week.list.map(item => item.dt_txt
    );
  console.log(dt)
  days.forEach((day, index) => {
    const dtIndex = index * 8; // каждый день состоит из 8 элементов в массиве `dt`
     day.day_info = dt[dtIndex];
     
    // здесь можно также подставить другие данные из массива `dt` для каждого дня
  });
  
  
 
  return (
    <>
    <Tabs />
    
    <div className={styles.days}>{
        days.map((day: Day)=> <Card day={day} key={day.day} />)
    }</div>
    </>
  )
}

export default Days