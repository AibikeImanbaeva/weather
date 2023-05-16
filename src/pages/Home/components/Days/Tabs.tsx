import React,{useState} from 'react'
import styles  from './Days.module.scss'
interface Props {}
type TabsProps = {
  activeTab: string;
  onClick: (tabValue: string) => void;
};

export const Tabs = (props: TabsProps) => {
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
    
    
    
  </div>
);
};