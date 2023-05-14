import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Time } from '../types/types';
import { AxiosResponse } from 'axios';

type CurrentTime = {
    time: Time,
    isLoading: boolean,
    response: Response
}

type Response ={
    status: number,
    message: string
}

const initialState: CurrentTime = {
    time: {
        timezone: 0
    },
    
    isLoading: false,
    response: {
        status: 0,
        message:''
    }

}


export const currentTimeSlice = createSlice({
    name: 'current_time',
    initialState,
    reducers: {
        fetchCurrentTime(state) {
            state.isLoading = true;
        },
        fetchCurrentTimeSuccess(state, 
            action: PayloadAction<AxiosResponse<Time>
            > ){
                state.isLoading = false;
            state.time = action.payload.data;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchCurrentWeatherError(state, 
            action: PayloadAction<AxiosResponse<Time>
            > ){
            
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        }
    }
})


export default currentTimeSlice.reducer