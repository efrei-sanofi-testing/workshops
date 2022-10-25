import { useState } from "react";
import { getGasPrice } from "./getGasPrice";

function GasPrice() {
  const gasPrice = getGasPrice();
  const gasPriceInDollars = gasPrice * 1.2;
  const [showInDollars, setShowInDollars] = useState(false);

  return (
    <div>
      {showInDollars ? (
        <h1>Le prix de l'essence est {gasPriceInDollars} $</h1>
      ) : (
        <h1>Le prix de l'essence est {gasPrice} €</h1>
      )}

      <label htmlFor="toggle">Show price in dollars</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={(e) => setShowInDollars(e.target.checked)}
        checked={showInDollars}
      />
    </div>
  );
}

export default GasPrice;
