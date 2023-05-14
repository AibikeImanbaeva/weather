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
      dt: number,
      main: {
        temp: number;
        feels_like: number;
      },
      weather:{
        description: string,
      }[],
      
      }[];
    isLoading: boolean;
    response: {
      status: number;
      message: string;
    };}
  
  