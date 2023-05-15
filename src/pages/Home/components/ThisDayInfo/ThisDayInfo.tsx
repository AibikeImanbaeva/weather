import React from "react";
import styles from "../ThisDayInfo/ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import ThisDayItem from "./ThisDayItem";
import { Weather } from "../../../../store/types/WeatherType";
import { Week } from "../../../../store/types/WeekType";
import { CardInfo } from "../Days/Days";
type Props = {
  weather: Weather;
  week : Week;
  selectedCard: CardInfo | null
};

export interface Item {
  icon_id: string,
  name: string,
  value: string | number,
}

const ThisDayInfo = ({weather, week, selectedCard}: Props) => {
// console.log(weather);

  const pressureInHpa = weather.main.pressure;
  const pressureInMmHg = pressureInHpa * 0.750062;
console.log(week.list)

console.log(selectedCard)

  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: selectedCard ? Math.floor(selectedCard.temp) : Math.floor(weather.main.temp),
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${selectedCard ? selectedCard.pressure : pressureInMmHg} мм.рт.ст`,
    },
    {
      icon_id: "precipitation",
      name: "Облачность",
      value: `${selectedCard ? selectedCard.clouds : weather.clouds.all} %`
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${selectedCard? selectedCard.wind : weather.wind.speed}мс`,
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
