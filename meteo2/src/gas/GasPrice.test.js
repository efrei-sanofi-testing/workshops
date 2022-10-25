import React from "react";
import { render, screen } from "@testing-library/react";
import GasPrice from "./GasPrice";
import { getGasPrice } from "./getGasPrice";

jest.mock("./getGasPrice");

test("renders a gas price message", () => {
  getGasPrice.mockReturnValue(2);

  render(<GasPrice />);
  expect(screen.getByText("Le prix de l'essence est 2 €")).toBeInTheDocument();
});

test("renders another gas price message", () => {
  getGasPrice.mockReturnValue(1.5);

  render(<GasPrice />);
  expect(
    screen.getByText("Le prix de l'essence est 1.5 €"),
  ).toBeInTheDocument();
});
