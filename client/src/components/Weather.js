import { useEffect, useState } from "react";

const Weather = () => {

    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const weatherApi = process.env.REACT_APP_WEATHER_API || "";

    useEffect(() => {

        const fetchWeather = async () => {
            const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherApi}&q=auto:ip&aqi=no`);

            const data = await fetchData.json();
            setWeather(data);
            console.log(data);
            };
            fetchWeather();
    }, [weatherApi]);

    if (error) return <span className="text-red-500">{error}</span>;

    return (

        <div className="bg-none flex text-zinc-500 flex-row justify-around">

            <img src={weather?.current?.condition?.icon} alt='weather' className="h-20 w-15"/>

            <section className="">

                <span className="font-bold text-2xl inline !text-[#b76e79]">{weather?.current?.temp_c}<sup>o</sup>C</span>
                <span>  ⚲ {weather?.location?.name}</span><br />
                <span>༄ {weather?.current?.wind_mph}mph  </span>
                <span className="text-indigo-500">{weather?.current?.condition.text}</span>

            </section>

        </div>

    );

};

export default Weather;

// base api https://www.weatherapi.com/
