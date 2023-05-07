import React from 'react'
import styles from './Popup.module.scss';
import Select from 'react-select';
import ThisDayItem from '../../Home/components/ThisDayInfo/ThisDayItem';
import { GlobalSvgSelector } from '../../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../Home/components/ThisDayInfo/ThisDayInfo';
interface Props {

}

export const Popup = ({}: Props) => {const items = [
  {
    icon_id: "temp",
    name: "Температура",
    value: "20 - ощущается как 17",
  },
  {
    icon_id: "pressure",
    name: "Давление",
    value: "765мм ртутного столба - нормальное",
  },
  {
    icon_id: "precipitation",
    name: "Осадки",
    value: "Без осадков",
  },
  {
    icon_id: "wind",
    name: "Ветер",
    value: "3 м/c юго-запад - легкий ветер",
  },
];

  return (
    <>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
        <div className={styles.day}>
          <div className={styles.day__temp}>20°</div>
          <div className={styles.day__name}>Среда</div>
          <div className={styles.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={styles.day__time}>
            Время: <span>21:54</span>
          </div>
          <div className={styles.day__city}>
            Время: <span>Санкт-Петербург</span>
          </div>
        </div>
        <div className={styles.this__day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={styles.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};