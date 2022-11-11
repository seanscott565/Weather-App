document.getElementById("happy");
const output = document.getElementById("output")

const temp = document.getElementById('temp')
const humidity = document.getElementById('humidity')
const feelsLike = document.getElementById('feelslike')
const maxTemp = document.getElementById('maxTemp')
const lowTemp = document.getElementById('lowTemp')
const weatherType = document.getElementById('weatherType')
const windSpeed = document.getElementById('windSpeed')
const windDirection = document.getElementById('windDirection')
const sunrise = document.getElementById('sunrise')

temp.addEventListener('click', function() {
    output.style.opacity = 1;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerText = `The temperature is ${json.main.temp} degrees farenheit`))
})

humidity.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerText = `The humidity is ${json.main.humidity}`))
})

feelsLike.addEventListener('click', function() {
    output.style.opacity = 1;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerText = `It feels like ${json.main.feels_like} degrees fahrenheit`))
})

maxTemp.addEventListener('click', function() {
    output.style.opacity = 1;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerText = `The high is ${json.main.temp_max} degrees fahrenheit`))
})

lowTemp.addEventListener('click', function() {
    output.style.opacity = 1;
     fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerText = `The low is ${json.main.temp_min} degrees fahrenheit`))
})


weatherType.addEventListener('click', function() {
    output.style.opacity = 1;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerHTML = ` <img src="http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png" />${json.weather[0].description}`))

})

windSpeed.addEventListener('click', function() {
    output.style.opacity = 1;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerText = `The wind speed is ${json.wind.speed} mph`))
})

windDirection.addEventListener('click', function() {
    output.style.opacity = 1;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerText = `The wind direction is ${json.wind.deg} degrees`))
})

sunrise.addEventListener('click', function() {
    output.style.opacity = 1;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerText = `The sunrise is ${json.sys.sunrise}`))
}}
