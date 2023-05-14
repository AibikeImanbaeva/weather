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
