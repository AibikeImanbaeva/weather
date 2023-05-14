import {AxiosResponse} from "axios";
import { Time } from "../store/types/types";
import api from "../axios";

export class TimeService {
    static getCurrentTime(city: string): Promise<AxiosResponse<Time>> {
      return api.get<Time>(`/weather?q=${city}`);
    }

  }

