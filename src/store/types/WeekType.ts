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
  