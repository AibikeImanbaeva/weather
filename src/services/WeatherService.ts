import {AxiosResponse} from "axios";
import { Weather } from "../store/types/WeatherType";
import api from "../axios";
import { Week } from "../store/types/WeekType";
export class WeatherService {
    static getCurrentWeather(latitude: string, longitude: string): Promise<AxiosResponse<Weather>> {
      return api.get<Weather>(`/weather?lat=${latitude}&lon=${longitude}`);
    }

  }


  export class WeatherWeekService {
    static getWeekWeather (city: string): Promise<AxiosResponse<Week>>{
return api.get<Week>(`/forecast?q=${city}&ctn=7`)
    }
  }
