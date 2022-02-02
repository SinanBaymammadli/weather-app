export interface Weather {
  date: number;
  city: string;
  temperature: {
    current: number;
    max: number;
    min: number;
  };
  condition: string;
}
