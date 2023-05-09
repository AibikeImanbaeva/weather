import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import styles from '../ThisDay/ThisDay.module.scss'

interface Props  {
  weather: Weather,
}

const ThisDay = ({ weather }: Props) => {
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
      <div className={styles.this__time}>Время: <span>21:52</span></div>
      <div className={styles.this__city}>Время: <span>Бишкек</span></div>
      </div>
    </div>
  )
}

export default ThisDay