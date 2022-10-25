import { useState } from "react";
import { adviseOutfit } from "./adviseOutfit";
import { getWeather } from "./weather";

export function WeatherAdvisor() {
  const { raining, temperature } = getWeather();
  const [showFahrenheit, setShowFahrenheit] = useState(false);
  const temperatureInCurrentUnit = temperature * (showFahrenheit ? 10 : 1);

  function terribleCode(a, b) {
    if (true) console.log("haha");
  }

  return (
    <div>
      <h1>
        Bonjour ! Il fait {temperatureInCurrentUnit}°
        {showFahrenheit ? "f" : "c"} et{" "}
        {raining ? "il pleut" : "il ne pleut pas"}
      </h1>
      <h1>Je vous conseille de porter {adviseOutfit()}</h1>
      <label htmlFor="showFahrenheit">Show in Fahrenheit</label>
      <input
        type="checkbox"
        name="showFahrenheit"
        id="showFahrenheit"
        data-testid="coucou"
        value={showFahrenheit}
        onClick={() => setShowFahrenheit(!showFahrenheit)}
      />
    </div>
  );
}
