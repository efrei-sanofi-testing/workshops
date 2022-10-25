import { getWeather } from '../weather.js'



export function WetherAdvice() {

    let wether = getWeather()
    let temp = wether.temperature
    let raining = wether.raining

    //temp = Math.floor(Math.random()*35-6)
    //raining = true
    console.log("temp and rain", temp, raining)

//math.floor(Math.random()*35-6

    let closes = ""

    if (temp > 22) closes = "short and shirt";
    if (temp < 23) closes = "pant and shirt";
    if (temp < 18) closes += ', and pull-over';
    if (temp < 15 && temp > 5) closes += ', and cott';
    if (temp < 6) closes += ', and anorak';
    if (temp < 1) closes += ', and wooly hat';
    console.log(closes)
    if (raining && temp > 0) {
        closes += '. Also take your umbrella!'
    } else {
        closes += '.'
    };
    console.log(closes)

    if (temp < 1 && raining) {
        return (
            <div>
                <h2>Wether advice</h2>
                <h3>you should take with you:</h3>
                <p>{closes}<br></br>Possible snowball battle.Take your gloves!</p>
            </div>
        )
    }else{
        return (
            <div>
                <h2>Wether advice</h2>
                <h3>you should take with you:</h3>
                <p>{closes}</p>
            </div>
        )
    };
}
