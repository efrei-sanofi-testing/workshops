import { getWeather } from "./weather";

export function adviseOutfit() {
  // coucou
  const { raining, temperature } = getWeather();
  if (raining) {
    if (temperature < 10) {
      return "un manteau imperméable";
    }
    if (temperature > 20) {
      return "un t-shirt et un parapluie";
    }
    return "un K-way";
  }
  if (temperature < 10) {
    return "un gros pull-over";
  }
  if (temperature > 20) {
    return "un t-shirt";
  }
  return "une veste légère";
}
