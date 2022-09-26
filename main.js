const getWeather = async () => {
    var cityName = document.getElementById('city-name').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=f4b1ff505ad0a408a6c27d1d0fbff93d`)
    const data = await response.json()
    console.log(data)

    const city = data.name
    const temp = data.main.temp
    const icon = data.weather[0].icon
    const high = data.main.temp_max
    const low = data.main.temp_min
    const forecast = data.weather[0].description
    const humidity = data.main.humidity
    const wind = data.wind.speed

    document.querySelector('#welcome').innerText = ''
    document.querySelector('#instructions').innerText = ''
    document.querySelector('#city').innerText = "Current Weather in " + city;
    document.querySelector('#temp').innerText = "Temperature:  " + temp + "° F";
    document.querySelector('#icon').setAttribute("src", `https://openweathermap.org/img/wn/${icon}@4x.png`);
    document.querySelector('#forecast').innerText = "Forecast:  " + forecast;
    document.querySelector('#high').innerText = "High Temperature:  " + high + "° F";
    document.querySelector('#low').innerText = "Low Temperature:  " + low + "° F";
    document.querySelector('#humidity').innerText = "Humidity:  " + humidity + "%";
    document.querySelector('#wind').innerText = "Wind Speed:  " + wind + " MPH";
}
