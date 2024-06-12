const button = document.getElementById("search-button");
const input = document.getElementById("search-bar");
const icon = document.getElementById("icon");
const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("city-temp");
const cityDesc = document.getElementById("city-description");
const cityHumidity = document.getElementById("city-humidity");
const cityWind = document.getElementById("city-wind");

async function getData(cityName) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=c72b0cf5b8784bef8f5190818230812&q=${cityName}&aqi=yes`);
    
    return await promise.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);

    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;

    cityTemp.innerText = `${result.current.temp_c}`;

    icon.innerText = `${result.current.condition.icon}`;

    cityDesc.innerText = `${result.current.condition.text}`;

    cityHumidity.innerText = `${result.current.humidity}`;

    cityWind.innerText = `${result.current.wind_kph}`;

});


// http://api.weatherapi.com/v1/current.json?key=c72b0cf5b8784bef8f5190818230812&q=Kolkata&aqi=yes
