
import React from "react";
import { render, screen } from "@testing-library/react";
import { getWeather } from '../weather.js'

import { WetherAdvice } from "./WetherAd.js";


 jest.mock('../weather.js')

 test    ("check closes advice", () => {

    getWeather.mockReturnValue({temperature: 25, raining:false})
    render(<WetherAdvice />);
    expect(screen.getByText("short and shirt.")).toBeInTheDocument();

    getWeather.mockReturnValue({temperature: 20, raining:false})
    render(<WetherAdvice />);
    expect(screen.getByText("pant and shirt.")).toBeInTheDocument();


    getWeather.mockReturnValue({temperature: 20, raining:true})
    render(<WetherAdvice />);
    expect(screen.getByText("pant and shirt. Also take your umbrella!")).toBeInTheDocument();



    getWeather.mockReturnValue({temperature: 17, raining:false})
    render(<WetherAdvice />);
    expect(screen.getByText("pant and shirt, and pull-over.")).toBeInTheDocument();

    getWeather.mockReturnValue({temperature: 17, raining:true})
    render(<WetherAdvice />);
    expect(screen.getByText("pant and shirt, and pull-over. Also take your umbrella!")).toBeInTheDocument();

    getWeather.mockReturnValue({temperature: 14, raining:false})
    render(<WetherAdvice />);
    expect(screen.getByText("pant and shirt, and pull-over, and cott.")).toBeInTheDocument();

    getWeather.mockReturnValue({temperature: 2, raining:true})
    render(<WetherAdvice />);
    expect(screen.getByText("pant and shirt, and pull-over, and anorak. Also take your umbrella!")).toBeInTheDocument();


    getWeather.mockReturnValue({temperature: -1, raining:true})
    render(<WetherAdvice />);
    expect(screen.getByText("pant and shirt, and pull-over")).toBeInTheDocument();





 }
   
    )

