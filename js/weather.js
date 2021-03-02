const api = {
    key : "4bfa4e63fc2450ba1e03bf3d598329e8",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt){
    //keycode==13 -> enter key
    if(evt.keyCode==13){
        getResults(searchBox.value);
        

    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather=>{
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.date');
    date.innerHTML = dateBuilder(now);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c<span>`;

    let weather_el = document.querySelector(".weather_el");
    weather_el.innerHTML = weather.weather[0].main;
    
    let weather_icon = document.querySelector(".weatherIcon>img");
    weather_icon.setAttribute("src", "weather/"+weather.weather[0].icon+".svg");

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c/${Math.round(weather.main.temp_max)}°c`;


}
function dateBuilder (d){
    let months = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

return `${day} ${date} ${month} ${year}`;

}