import React, { useEffect, useState } from 'react';
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
import { CardInfo } from './Days/Days';
import { useGeolocated } from "react-geolocated";
import axios from 'axios';



export const Home = (props: Props)=> {
  const geo =  useGeolocated()
  const { coords } = geo || {};

  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(state=> state.currentWeatherSliceReducer);
const { time } = useCustomSelector (state =>  state.currentTimeSliceReducer)
const {week} = useCustomSelector(state => state.weekWeatherSliceReducer)

useEffect(() => {
  if (coords) {
    const { latitude, longitude } = coords;
    localStorage.setItem('coords', JSON.stringify({ latitude, longitude }))
    dispatch(fetchCurrentWeather(latitude.toString(), longitude.toString()))
  }
}, [coords]);



const [selectedCard, setSelectedCard] = useState<CardInfo | null>(null);

const handleCardClick = (cardInfo: CardInfo) => {
  setSelectedCard(cardInfo);
};


useEffect(() => {
  const cachedCoords = localStorage.getItem('coords');
  if (cachedCoords) {
    const { latitude, longitude } = JSON.parse(cachedCoords);
    dispatch(fetchCurrentWeather(latitude.toString(), longitude.toString()))
  } else {
    dispatch(fetchWeekWeather('bishkek'));
  } 
}, [dispatch]);





  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay weather={weather} time={time} selectedCard={selectedCard}/>
        <ThisDayInfo weather={weather}/>
      </div>
      <Days week={week} weather= {weather}onClick={handleCardClick} setSelectedCard={setSelectedCard}/>
    </div>
  );
};


export default Home