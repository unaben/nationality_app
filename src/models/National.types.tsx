export interface INationality{
    count: number;
    name: string
    country: ICountry[] 
    }

    export interface ICountry {
        country_id: string;
        probability: number
    }