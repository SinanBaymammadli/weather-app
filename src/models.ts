export interface Weather {
  date: string;
  city: string;
  temperature: {
    current: number;
    max: number;
    min: number;
  };
  condition: string;
}
