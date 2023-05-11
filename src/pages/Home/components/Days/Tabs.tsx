import React,{useState} from 'react'
import styles  from './Days.module.scss'
interface Props {}

export const Tabs = (props: Props) => {
  const [activeTab, setActiveTab] = useState('На 5 дней');

  const tabs = [
    {
      value: 'На 5 дней',
 
    },
    {
      value: 'По часам на сегодня',
      
    },
  ];

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue);
  };

 
  return (
    <div className={styles.tabs}>
    <div className={styles.tabs__wrapper}>
      {tabs.map(tab => (
        <div
          key={tab.value}
          className={`${styles.tab} ${activeTab === tab.value ? styles.active : ''}`}
          onClick={() => handleTabClick(tab.value)}
        >
          {tab.value}
        </div>
      ))}
    </div>
    <div className={styles.cancel}>Отменить</div>
    
    
  </div>
);
};