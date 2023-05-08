import { WeatherService } from "../../services/WeatherService";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store"

export const fetchCurrentWeather =
  (payload: string) => async (dispatch: AppDispatch) => {
     
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
      const res = await WeatherService.getCurrentWeather(payload);
    
  };