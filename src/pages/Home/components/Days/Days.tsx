import React,{useState, useEffect} from 'react';
import { Card } from './Card';

import styles  from './Days.module.scss';
import { Tabs } from './Tabs';
import { Week } from '../../../../store/types/types';
import { Weather } from '../../../../store/types/types';
export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp: number;
  info: string;
}


type Props = {
  week: Week;
weather:Weather
}



export const Days = ({ week }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
// console.log(week)
  useEffect(() => {
    if (week && week.list) {
      setIsLoading(false);
    }
  }, [week]);
 const weekdays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const today = new Date();
const dayOfWeek = today.getDay();

const formatDate = (date: Date) =>
  `${date.getDate()} ${months[date.getMonth()]}`;


// console.log(week);


const days = isLoading
  ? []
  : [
      {
        day: "Сегодня",
        day_info: formatDate(today),
        icon_id: "small_rain_sun",
        temp: Math.floor(week.list[0]?.main?.temp),
        info: `${week.list[dayOfWeek]?.weather[0]?.description}`,
      },
      {
        day: "Завтра",
        day_info: formatDate(new Date(week.list[dayOfWeek + 1]?.dt * 1000)),
        icon_id: "small_rain_sun",
        temp: Math.floor(week.list[dayOfWeek + 1]?.main?.temp),
        info: `${week.list[dayOfWeek + 1]?.weather[0]?.description}`,
      },
      {
        day: weekdays[(dayOfWeek + 2) % 7],
        day_info: formatDate(new Date(week.list[dayOfWeek + 7]?.dt * 1000)),
        icon_id: "small_rain",
        temp: Math.floor(week.list[dayOfWeek + 2]?.main?.temp),
        info: `${week.list[dayOfWeek + 2]?.weather[0]?.description}`,
      },
      {
        day: weekdays[(dayOfWeek + 3) % 7],
        day_info: formatDate(new Date(week.list[dayOfWeek + 15]?.dt * 1000)),
        icon_id: "mainly_cloudy",
        temp: Math.floor(week.list[dayOfWeek + 3]?.main?.temp),
        info: `${week.list[dayOfWeek + 3]?.weather[0]?.description}`,
      },
      {
        day: weekdays[(dayOfWeek + 4) % 7],
        day_info: formatDate(new Date(week.list[dayOfWeek + 23]?.dt * 1000)),
        icon_id: "rain",
        temp: Math.floor(week.list[dayOfWeek + 4]?.main?.temp),
        info: `${week.list[dayOfWeek + 4]?.weather[0]?.description}`,
      },
      {
        day: weekdays[(dayOfWeek + 5) % 7],
        day_info: formatDate(new Date(week.list[dayOfWeek + 31]?.dt * 1000)),
        icon_id: "sun",
        temp: Math.floor(week.list[dayOfWeek + 5]?.main?.temp),
        info: `${week.list[dayOfWeek + 5]?.weather[0]?.description}`,
      },
    ];
  return (
    <>
      <Tabs />

      <div className={styles.days}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          days.map((day: Day) => <Card day={day} key={day.day} 
     
          />)
        )}
      </div>
    </>
  );
};

export default Days