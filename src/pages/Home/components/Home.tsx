import React, { useEffect } from 'react';
import Days from './Days/Days';
import styles from './Home.module.scss'
import ThisDay from './ThisDay/ThisDay';
import ThisDayInfo from './ThisDayInfo/ThisDayInfo';
import { useCustomDispatch } from '../../../hooks/store';
import { fetchCurrentWeather } from '../../../store/thunks/fetchCurrentWeather';
// import { Weather } from '../../../store/types/types';
import { useCustomSelector } from '../../../hooks/store';
import { Props } from 'react-select';

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(state=> state.currentWeatherSliceReducer);

  useEffect(() => {
    dispatch(fetchCurrentWeather('london'));
  }, []);
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay weather={weather}/>
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};


export default Home