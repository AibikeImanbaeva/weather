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
import { fetchWeekWeather } from '../../../store/thunks/fetchWeekWeather';

import { useGeolocated } from "react-geolocated";




export const Home = (props: Props)=> {
  const geo =  useGeolocated()
  const { coords } = geo || {};
  // const { latitude, longitude } = geo
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(state=> state.currentWeatherSliceReducer);
const { time } = useCustomSelector (state =>  state.currentTimeSliceReducer)
const {week} = useCustomSelector(state => state.weekWeatherSliceReducer)


useEffect(() => {
  if (coords) {
    const { latitude, longitude } = coords;
    dispatch(fetchCurrentWeather(latitude.toString(), longitude.toString()))
  }
}, [coords]);

useEffect(() => {
  const cachedWeek = localStorage.getItem('week');
  if (cachedWeek) {
    dispatch(fetchWeekWeather(JSON.parse(cachedWeek)));
  } else {
    dispatch(fetchWeekWeather('bishkek'));
  }
}, [dispatch]);




  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay weather={weather} time={time}/>
        <ThisDayInfo weather={weather}/>
      </div>
      <Days week={week} weather={weather}/>
    </div>
  );
};


export default Home