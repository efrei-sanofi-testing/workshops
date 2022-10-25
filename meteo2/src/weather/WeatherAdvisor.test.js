import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { getWeather } from "./weather";
import { WeatherAdvisor } from "./WeatherAdvisor.js";

const totot = jest.mock("./weather");

test("renders weatheradvice", () => {
  getWeather.mockReturnValue({ temperature: 9, raining: true });
  render(<WeatherAdvisor />);
  expect(screen.getByText(/un manteau imperméable/)).toBeInTheDocument();

  getWeather.mockReturnValue({ temperature: 21, raining: true });
  render(<WeatherAdvisor />);
  expect(screen.getByText(/un t-shirt et un parapluie/)).toBeInTheDocument();

  getWeather.mockReturnValue({ temperature: 15, raining: false });
  render(<WeatherAdvisor />);
  expect(screen.getByText(/une veste légère/)).toBeInTheDocument();
});
