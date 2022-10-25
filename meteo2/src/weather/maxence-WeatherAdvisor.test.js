import { adviseOutfit } from "./adviseOutfit";
import { getWeather } from "./weather";
import { WeatherAdvisor } from "./WeatherAdvisor";
import { render, screen, fireEvent } from "@testing-library/react";

jest.mock("./weather");
jest.mock("./adviseOutfit");

test("quand il pleut, qu'il fait froid, et qu'on conseille des tongs", () => {
  getWeather.mockReturnValue({ temperature: 0, raining: true });
  adviseOutfit.mockReturnValue("des tongs");

  render(<WeatherAdvisor />);

  expect(screen.getByText(/Il fait 0°c/)).toBeInTheDocument();
  expect(screen.getByText(/et il pleut/)).toBeInTheDocument();
  expect(
    screen.getByText(/Je vous conseille de porter des tongs/),
  ).toBeInTheDocument();
});

test("quand il pleut, qu'il fait froid, et qu'on conseille un poncho", () => {
  getWeather.mockReturnValue({ temperature: 0, raining: true });
  adviseOutfit.mockReturnValue("un poncho");

  render(<WeatherAdvisor />);

  expect(screen.getByText(/Il fait 0°c/)).toBeInTheDocument();
  expect(screen.getByText(/et il pleut/)).toBeInTheDocument();
  expect(
    screen.getByText(/Je vous conseille de porter un poncho/),
  ).toBeInTheDocument();
});

test("quand on coche fahreheit, la temperature s'adapte", () => {
  getWeather.mockReturnValue({ temperature: 10, raining: true });
  adviseOutfit.mockReturnValue("un poncho");

  render(<WeatherAdvisor />);

  expect(screen.getByText(/Il fait 10°c/)).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("coucou"));
  expect(screen.getByText(/Il fait 100°f/)).toBeInTheDocument();
});
