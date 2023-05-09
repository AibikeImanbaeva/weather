import React from "react";
import styles from "../ThisDayInfo/ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import ThisDayItem from "./ThisDayItem";
import { Weather } from "../../../../store/types/types";
type Props = {
  weather: Weather
};

export interface Item {
  icon_id: string,
  name: string,
  value: string,
}

const ThisDayInfo = ({weather}: Props) => {

  const pressureInHpa = weather.main.pressure;
  const pressureInMmHg = pressureInHpa * 0.750062;

  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${weather.main.temp}: ощущается как ${weather.main.feels_like}`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${Math.floor(pressureInMmHg)} мм.рт.ст`,
    },
    {
      icon_id: "precipitation",
      name: "Облачность",
      value: `${weather.clouds.all} %`
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${weather.wind.speed}мс`,
    },
  ];

  return (
    <div className={styles.this__day_info}>
    <div className={styles.this__day_info_items}>
      {items.map((item: Item) => (
        <ThisDayItem key={item.icon_id} item={item} />
      ))}
    </div>
    <img className={styles.cloud__img} src={cloud} alt="облако" />
  </div>
  );
};

export default ThisDayInfo;
