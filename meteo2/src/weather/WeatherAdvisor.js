import { adviseOutfit } from "./adviseOutfit";
import { getWeather } from "./weather";

export function WeatherAdvisor() {
  const { raining, temperature } = getWeather();

  return (
    <div>
      <h1>
        Bonjour ! Il fait {temperature}°c et{" "}
        {raining ? "il pleut" : "il ne pleut pas"}
      </h1>
      <h1>Je vous conseille de porter {adviseOutfit()}</h1>
    </div>
  );
}
