import { getGasPrice } from "./getGasPrice";

function GasPrice() {
  const gasPrice = getGasPrice();
  return <h1>Le prix de l'essence est {gasPrice} €</h1>;
}

export default GasPrice;
