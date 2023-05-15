export interface Week {
    list: {
      dt: number,
      clouds: {
        all:string,
      },
      wind: {
        speed: string
      },
      main: {
        temp: number;
        feels_like: number;
        pressure:number
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
  