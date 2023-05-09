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