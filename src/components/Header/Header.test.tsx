import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("Header", () => {
  it("renders city name", () => {
    render(
      <Header
        date={121323}
        city="Berlin"
        condition="Clear"
        temperature={{ current: 123, max: 123, min: 123 }}
      />
    );

    expect(screen.getByText("Berlin")).toBeInTheDocument();
  });
});
