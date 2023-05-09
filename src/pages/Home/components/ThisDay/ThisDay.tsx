import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import styles from '../ThisDay/ThisDay.module.scss';
import { Time } from '../../../../store/types/types';

interface Props  {
  weather: Weather,
  time: Time
}




const ThisDay = ({ weather, time }: Props) => {
 
  const now = new Date();
  const offset = time.timezone / 60; // переводим смещение в часы
  const bishkekTime = new Date(now.getTime() + offset * 60 * 60 * 1000);
  
  // Форматируем время в формат "чч:мм"
  const hours = bishkekTime.getHours().toString().padStart(2, '0');
  const minutes = bishkekTime.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  
  // Форматируем дату в формат "дд.мм.гггг"
  const date = bishkekTime.getDate().toString().padStart(2, '0');
  const month = (bishkekTime.getMonth() + 1).toString().padStart(2, '0');
  const year = bishkekTime.getFullYear().toString();
  const dateString = `${date}.${month}.${year}`;
  

  return (
    <div className={styles.this__day}>
      <div className={styles.top__block}>
        <div className={styles.top__block_wrapper}>

      <div className={styles.this__temp}>{Math.floor(weather.main.temp)}</div>
      <div className={styles.this__day_name}>сегодня</div>
        </div>
     <GlobalSvgSelector  id='sun'/>
      </div>
      <div className={styles.bottom__block}>
      <div className={styles.this__time}>Время:{timeString} <span></span></div>
      <div className={styles.this__city}>Дата:{dateString} <br />
       <span>Бишкек</span>
       </div>
      </div>
    </div>
  )
}

export default ThisDay