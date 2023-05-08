import axios,{AxiosResponse} from "axios";
import { Weather } from "../store/types/types";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={4cf4863d542e006da4bf3f4e64dea481}`)
    }
}