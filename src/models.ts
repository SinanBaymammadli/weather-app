export interface Forecast {
  date: number;
  city: string;
  temperature: {
    current: number;
    max: number;
    min: number;
  };
  condition: "Clear" | "Clouds";
}
