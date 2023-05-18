import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/WeatherType';
import styles from '../ThisDay/ThisDay.module.scss';
import { CardInfo } from '../Days/Days';


interface Props  {
  weather: Weather,
  time: Time,
  selectedCard: CardInfo | null;
}


export type Time = {
  timezone: number 
  }
  


const ThisDay = ({ weather, time, selectedCard }: Props) => {
 
  // console.log(selectedCard)

  const now = new Date();
  const offset = time.timezone / 60; // переводим смещение в часы
  const bishkekTime = new Date(now.getTime() + offset * 60 * 60 * 1000);
  const timeString = bishkekTime.toLocaleTimeString('ru-RU', {  hour: '2-digit', minute: '2-digit', hour12: false});
  


  return (
    <div className={styles.this__day}>
      <div className={styles.top__block}>
        <div className={styles.top__block_wrapper}>

      <div className={styles.this__temp}> {selectedCard ? Math.floor(selectedCard.temp) : Math.floor(weather.main.temp)}</div>
      <div className={styles.this__day_name}>{selectedCard ? (selectedCard.day_info) : 'сегодня'}</div>
        </div>
     <GlobalSvgSelector  id='sun'/>
      </div>
      <div className={styles.bottom__block}>
      <div className={styles.this__time}>Время:{timeString} <span></span></div>
      <div className={styles.this__city}>город: Бишкек<br />
   
       </div>
      </div>
    </div>
  )
}

export default ThisDay