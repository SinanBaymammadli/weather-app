import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("Header", () => {
  it("renders given data correctly", () => {
    render(
      <Header
        date={1487246400000}
        city="Berlin"
        condition="Clear"
        temperature={{ current: 11, max: 12, min: 9 }}
      />
    );

    expect(screen.getByText("Berlin")).toBeInTheDocument();
    expect(screen.getByText("Thursday")).toBeInTheDocument();
    expect(screen.getByText("16. February")).toBeInTheDocument();
    expect(screen.getByText("11°")).toBeInTheDocument();
    expect(screen.getByText("12° / 9°")).toBeInTheDocument();
    expect(screen.getByText("Clear")).toBeInTheDocument();
    expect(screen.getByTitle("weather-sun")).toBeInTheDocument();
  });

  it("renders correct icon for clouds", () => {
    render(
      <Header
        date={1487246400000}
        city="Berlin"
        condition="Clouds"
        temperature={{ current: 11, max: 12, min: 9 }}
      />
    );

    expect(screen.getByText("Clouds")).toBeInTheDocument();
    expect(screen.getByTitle("weather-cloud")).toBeInTheDocument();
  });
});
