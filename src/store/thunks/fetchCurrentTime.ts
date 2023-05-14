import { TimeService } from "../../services/TimeService";
import { currentTimeSlice } from "../slices/currentTimeSlice";
import { AppDispatch } from "../store";


export const fetchCurrentTime =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentTimeSlice.actions.fetchCurrentTime());
      const res = await TimeService.getCurrentTime(payload);
      if (res.status === 200) {
        dispatch(currentTimeSlice.actions.fetchCurrentTimeSuccess(res));
      } else {
        dispatch(currentTimeSlice.actions.fetchCurrentWeatherError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
