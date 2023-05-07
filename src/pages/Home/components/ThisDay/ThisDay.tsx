import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';

import styles from '../ThisDay/ThisDay.module.scss'

type Props = {}

const ThisDay = (props: Props) => {
  return (
    <div className={styles.this__day}>
      <div className={styles.top__block}>
        <div className={styles.top__block_wrapper}>

      <div className={styles.this__temp}>20 </div>
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