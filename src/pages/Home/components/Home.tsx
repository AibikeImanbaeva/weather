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
import { fetchCurrentTime } from '../../../store/thunks/fetchCurrentTime';

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(state=> state.currentWeatherSliceReducer);
const { time } = useCustomSelector (state =>  state.currentTimeSliceReducer)
  useEffect(() => {
    dispatch(fetchCurrentWeather('bishkek'));
    dispatch(fetchCurrentTime('bishkek'))
  }, []);
 

  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay weather={weather} time={time}/>
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};


export default Home