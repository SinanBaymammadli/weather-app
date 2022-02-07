import { Forecast } from "./models";

interface IForecastRepository {
  getForecastList: () => Promise<Forecast[]>;
}

export function kelvinToCelcius(k: number) {
  return Math.round(k - 273.15);
}

export const API_URL =
  "https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22";

export const ForecastRepository: IForecastRepository = {
  getForecastList: async () => {
    const res = await fetch(API_URL);
    const json = await res.json();
    const list: Forecast[] = json.list.map((item: any) => ({
      date: item.dt * 1000,
      city: json.city.name,
      temperature: {
        current: kelvinToCelcius(item.main.temp),
        max: kelvinToCelcius(item.main.temp_max),
        min: kelvinToCelcius(item.main.temp_min),
      },
      condition: item.weather[0].main,
    }));

    return list;
  },
};
