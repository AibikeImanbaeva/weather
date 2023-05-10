export type Weather = {
    main:  {
        temp: number,
        feels_like: number,
        pressure: number
    },
    wind: {
        speed: number,
    }
    ,
    clouds: {
        all : number,
    }
}


export type Time = {
timezone: number 
}


export type CityName = {
    name: string
}
export interface Week {
    list: {
        dt_txt: string,
        main: {
          temp: number;
          feels_like: number;
     
        },
      
      }[];
    isLoading: boolean;
    response: {
      status: number;
      message: string;
    };}
  
  