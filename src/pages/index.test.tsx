import { fireEvent, render, screen } from "@testing-library/react";

import { Forecast } from "../models";
import Home from "./index";

const list: Forecast[] = [
  {
    date: 1487246400000,
    city: "Berlin",
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

window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe("Header", () => {
  it("renders given data correctly", () => {
    render(<Home forecastList={list} />);

    expect(screen.getByText("Altstadt")).toBeInTheDocument();
    expect(screen.getByText("Thursday")).toBeInTheDocument();
    expect(screen.getByText("16. February")).toBeInTheDocument();
    expect(screen.getByTestId("main-temperature")).toHaveTextContent("13°");
    expect(screen.getByText("13° / 9°")).toBeInTheDocument();
    expect(screen.getByText("Clouds")).toBeInTheDocument();
    expect(screen.getByTestId("cloud-icon")).toBeInTheDocument();
  });

  it("selects correct forcast and shows it on header", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(1487246400000));

    render(<Home forecastList={list} />);

    expect(screen.getByText("Berlin")).toBeInTheDocument();
    expect(screen.getByText("Thursday")).toBeInTheDocument();
    expect(screen.getByText("16. February")).toBeInTheDocument();
    expect(screen.getByTestId("main-temperature")).toHaveTextContent("14°");
    expect(screen.getByText("14° / 8°")).toBeInTheDocument();
    expect(screen.getByText("Clear")).toBeInTheDocument();
    expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
  });

  it("changes selected date when clicked", () => {
    render(<Home forecastList={list} />);

    const firstItem = screen.getByText("12:00");
    expect(firstItem).toBeInTheDocument();
    fireEvent.click(firstItem);

    expect(screen.getByText("Berlin")).toBeInTheDocument();
    expect(screen.getByText("Thursday")).toBeInTheDocument();
    expect(screen.getByText("16. February")).toBeInTheDocument();
    expect(screen.getByTestId("main-temperature")).toHaveTextContent("14°");
    expect(screen.getByText("14° / 8°")).toBeInTheDocument();
    expect(screen.getByText("Clear")).toBeInTheDocument();
    expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
  });
});
