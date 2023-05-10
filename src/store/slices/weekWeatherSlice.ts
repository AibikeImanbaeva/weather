import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Week} from '../types/types';
import { AxiosResponse } from 'axios';

type WeekWeather = {
  
    week:Week,
    isLoading: boolean,
    response: Response
}

type Response ={
    status: number,
    message: string
}


const initialState: WeekWeather = {
    week: {
      list: [],
      isLoading: false,
      response: {
        status: 0,
        message:'',
      },
    },
    isLoading: false,
    response: {
      status: 0,
      message:'',
    },
  }

export const weekWeatherSlice = createSlice({
    name: 'week_weather',
    initialState,
    reducers: {
        fetchWeekWeather(state) {
            state.isLoading = true;
        },
        fetchWeekWeatherSuccess(state, 
            action: PayloadAction<AxiosResponse<Week>
            > ){
                state.isLoading = false;
            state.week= action.payload.data;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchWeekWeatherError(state, 
            action: PayloadAction<AxiosResponse<Week>
            > ){
            
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        }
    }
})

export default weekWeatherSlice.reducer