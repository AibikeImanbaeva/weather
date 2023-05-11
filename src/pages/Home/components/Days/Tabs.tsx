import React from 'react'
import styles  from './Days.module.scss'
interface Props {}

export const Tabs = (props: Props) => {
  const tabs = [
    {
      value: 'На 5 дней',
    },
    {
      value: 'По часам на сегодня',
    },
    
  ];
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        {tabs.map(tab => (
          <div className={styles.tab + ' ' + styles.active} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={styles.cancel}>Отменить</div>
    </div>
  );
};