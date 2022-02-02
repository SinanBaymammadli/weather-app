import { Weather } from "./models";

interface IWeatherRepository {
  getWeatherList: () => Promise<Weather[]>;
}

export const WeatherRepository: IWeatherRepository = {
  getWeatherList: async () => {
    const res = await fetch(
      "https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22"
    );
    const json = await res.json();
    const list: Weather[] = json.list.map((item: any) => ({
      date: item.dt_txt,
      city: json.city.name,
      temperature: {
        current: item.main.temp,
        max: item.main.temp_max,
        min: item.main.temp_min,
      },
      condition: item.weather[0].main,
    }));

    return list;
  },
};
