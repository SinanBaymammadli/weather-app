import { WEATHER_API_URL } from "../../src/data";

const mocks = {
  cod: "200",
  message: 0.0032,
  cnt: 36,
  list: [
    {
      dt: 1487246400,
      main: {
        temp: 286.67,
        temp_min: 281.556,
        temp_max: 286.67,
        pressure: 972.73,
        sea_level: 1046.46,
        grnd_level: 972.73,
        humidity: 75,
        temp_kf: 5.11,
      },
      weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
      clouds: { all: 0 },
      wind: { speed: 1.81, deg: 247.501 },
      sys: { pod: "d" },
      dt_txt: "2017-02-16 12:00:00",
    },
    {
      dt: 1487257200,
      main: {
        temp: 285.66,
        temp_min: 281.821,
        temp_max: 285.66,
        pressure: 970.91,
        sea_level: 1044.32,
        grnd_level: 970.91,
        humidity: 70,
        temp_kf: 3.84,
      },
      weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
      clouds: { all: 0 },
      wind: { speed: 1.59, deg: 290.501 },
      sys: { pod: "d" },
      dt_txt: "2017-02-16 15:00:00",
    },
  ],
  city: {
    id: 6940463,
    name: "Altstadt",
    coord: { lat: 48.137, lon: 11.5752 },
    country: "none",
  },
};

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays city name", () => {
    cy.findByText("Altstadt").should("exist");
  });

  it("when clicking on specific time it displays it on header", async () => {
    cy.window().then((window) => {
      const { worker, rest } = (window as any).msw;
      worker.use(
        rest.get(WEATHER_API_URL, (req, res, ctx) => {
          return res(ctx.json(mocks));
        })
      );

      cy.findByText("19:00").click();
      cy.findByTestId("main-temperature").should("have.text", "13°");
    });
  });
});
