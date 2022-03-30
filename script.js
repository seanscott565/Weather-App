const tempatureButton = document.getElementById("happy")
const output = document.getElementById("output")

const temp = document.getElementById('temp')
const humidity = document.getElementById('humidity')
const feelslike = document.getElementById('feelslike')
const maxTemp = document.getElementById('maxTemp')
const lowTemp = document.getElementById('lowTemp')
const weatherType = document.getElementById('weatherType')

temp.addEventListener('click', function(e) {
    output.style.opacity = 1;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerText = `The tempature is ${json.main.temp} degrees farenheit`))
})



humidity.addEventListener('click', function(e) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerText = `The humidity is ${json.main.humidity}`))
})

feelslike.addEventListener('click', function(e) {
    output.style.opacity = 1;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerText = `It feels like ${json.main.feels_like} degrees fahrenheit`))
})

maxTemp.addEventListener('click', function(e) {
    output.style.opacity = 1;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerText = `The high is ${json.main.temp_max} degrees fahrenheit`))
})

lowTemp.addEventListener('click', function(e) {
    output.style.opacity = 1;
     fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerText = `The low is ${json.main.temp_min} degrees fahrenheit`))
})


weatherType.addEventListener('click', function(e) {
    output.style.opacity = 1;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=4160021&units=imperial&appid=e743c2a63bc0a7fdd6b2299493d3570a').then
    (response => response.json().then
    (json => output.innerHTML = ` <img src="http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png" />${json.weather[0].description}`))

})