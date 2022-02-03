import { render, screen } from "@testing-library/react";

import { WeatherList } from "./WeatherList";

const list = [
  {
    date: 1487246400000,
    city: "Altstadt",
    temperature: { current: 14, max: 14, min: 8 },
    condition: "Clear",
  },
  {
    date: 1487257200000,
    city: "Altstadt",
    temperature: { current: 13, max: 13, min: 9 },
    condition: "Clouds",
  },
];

describe("WeatherList", () => {
  it("renders given data correctly", () => {
    render(
      <WeatherList list={list} selectedDate={1487246400000} onSelectedDateChange={jest.fn()} />
    );

    expect(screen.getByText("12:00")).toBeInTheDocument();
    expect(screen.getByText("14°")).toBeInTheDocument();
    expect(screen.getByTitle("weather-sun")).toBeInTheDocument();

    expect(screen.getByText("15:00")).toBeInTheDocument();
    expect(screen.getByText("13°")).toBeInTheDocument();
    expect(screen.getByTitle("weather-cloud")).toBeInTheDocument();
  });
});
