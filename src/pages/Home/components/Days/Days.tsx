import React,{useState, useEffect} from 'react';
import { Card } from './Card';

import styles  from './Days.module.scss';
import { Tabs } from './Tabs';
import { Week } from '../../../../store/types/WeekType';
import { Weather } from '../../../../store/types/WeatherType';
import { CardToday } from './CardToday';
export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp: number;
  info: string;

}


export interface DayHour {
  hour:string,
  icon_id: string,
  temp:number,
  info:string
}

export interface CardInfo {
  day: string;
  day_info: string;
  icon_id: string;
  temp: number;
  info: string;
  onClick: (cardInfo: CardInfo) => void;
}
export interface CardProps {
  day: Day;
  onClick: (cardInfo: CardInfo) => void;
  
}


type Props = {
  week: Week;
 
weather:Weather;
onClick: (cardInfo: CardInfo) => void;
setSelectedCard: (cardInfo: CardInfo) => void;
}



export const Days = ({ week, onClick, setSelectedCard }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('На 5 дней');

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
  };
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


const onCardClick = (cardInfo:CardInfo) => {
  setSelectedCard(cardInfo)
}
const renderCards = () => {
  switch (activeTab) {
    case 'На 5 дней':
      return days.map((day: Day) => (
        <Card onClick={onCardClick} day={day} key={day.day} />
      ));
    case 'По часам на сегодня':
      return weatherForHours.map((day : DayHour)=> (
        <CardToday day={day} key={day.hour} />
      ));
    default:
      return null;
  }
};

console.log(week)

// const time = dateTimeString.split(" ")[1].substring(0, 5);

const weatherForHours = isLoading ? []
: [
  
  {
  hour: `${week.list[0]?.dt_txt.split(" ")[1].substring(0, 5)}`,
    icon_id: "mainly_cloudy",
    temp: Math.floor(week.list[0]?.main?.temp),
    info: `${week.list[3]?.weather[0]?.description}`,
  },
  {
    hour: `${week.list[1]?.dt_txt.split(" ")[1].substring(0, 5)}`,
    icon_id: "rain",
    temp: Math.floor(week.list[1]?.main?.temp),
    info: `${week.list[4]?.weather[0]?.description}`,
  },
  {
    hour: `${week.list[2]?.dt_txt.split(" ")[1].substring(0, 5)}`,
    icon_id: "rain",
    temp: Math.floor(week.list[2]?.main?.temp),
    info: `${week.list[4]?.weather[0]?.description}`,
  },
  {
    hour: `${week.list[3]?.dt_txt.split(" ")[1].substring(0, 5)}`,
    icon_id: "rain",
    temp: Math.floor(week.list[3]?.main?.temp),
    info: `${week.list[4]?.weather[0]?.description}`,
  },{
    hour: `${week.list[4]?.dt_txt.split(" ")[1].substring(0, 5)}`,
    icon_id: "rain",
    temp: Math.floor(week.list[4]?.main?.temp),
    info: `${week.list[4]?.weather[0]?.description}`,
  },
  
]


const days = isLoading
  ? []
  :  [
    {
      day: "Сегодня",
      day_info: formatDate(today),
      icon_id: "small_rain_sun",
      temp: Math.floor(week.list[0]?.main?.temp),
      info: `${week.list[0]?.weather[0]?.description}`,
    },
    {
      day: "Завтра",
      day_info: formatDate(new Date(week.list[14]?.dt * 1000)),
      icon_id: "small_rain_sun",
      temp: Math.floor(week.list[14]?.main?.temp),
      info: `${week.list[14]?.weather[0]?.description}`,
    },
    {
      day: weekdays[(dayOfWeek + 2) % 7],
      day_info: formatDate(new Date(week.list[21]?.dt * 1000)),
      icon_id: "small_rain",
      temp: Math.floor(week.list[21]?.main?.temp),
      info: `${week.list[21]?.weather[0]?.description}`,
    },
    {
      day: weekdays[(dayOfWeek + 3) % 7],
      day_info: formatDate(new Date(week.list[28]?.dt * 1000)),
      icon_id: "mainly_cloudy",
      temp: Math.floor(week.list[28]?.main?.temp),
      info: `${week.list[28]?.weather[0]?.description}`,
    },
    {
      day: weekdays[(dayOfWeek + 4) % 7],
      day_info: formatDate(new Date(week.list[35]?.dt * 1000)),
      icon_id: "rain",
      temp: Math.floor(week.list[35]?.main?.temp),
      info: `${week.list[35]?.weather[0]?.description}`,
    },
    
  ];
  return (
    <>
      <Tabs activeTab={activeTab} onClick={handleTabClick} />

<div className={styles.days}>
  {isLoading ? <p>Loading...</p> : renderCards()}
</div>
    </>
  );
};

export default Days