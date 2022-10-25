import { adviseOutfit } from "./adviseOutfit";
import { getWeather } from "./weather";

jest.mock("./weather");

test("quand il pleut et qu'il fait froid", () => {
  getWeather.mockReturnValue({ temperature: 0, raining: true });

  expect(adviseOutfit()).toBe("un manteau imperméable");
});

test("quand il fait chaud et sec, on me conseille un t-shirt", () => {
  getWeather.mockReturnValue({ temperature: 30, raining: false });

  expect(adviseOutfit()).toBe("un t-shirt");
});
