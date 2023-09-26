const apiKey = "43a3781b091f6148503d18b3b053a06e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=$(apiKey)`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        
        
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/weather-app-img/images/clouds.png"; 
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "/weather-app-img/images/clear.png"; 
    }
    else if(data.weather[0].main == "rain"){
        weatherIcon.src = "/weather-app-img/images/rain.png"; 
    }
    else if(data.weather[0].main == "snow"){
        weatherIcon.src = "/weather-app-img/images/snow.png"; 
    }
    else if(data.weather[0].main == "wind"){
        weatherIcon.src = "/weather-app-img/images/wind.png"; 
    }
    else if(data.weather[0].main == "mist"){
        weatherIcon.src = "/weather-app-img/images/mist.png"; 
    }
    else if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "/weather-app-img/images/drizzle.png"; 
    }
    else if(data.weather[0].main == "humidity"){
        weatherIcon.src = "/weather-app-img/images/humidity.png"; 
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none  ";

    }


}

searchBtn.addEventListener("click",()=> {
    checkWeather(searchBox.value);
})

checkWeather();

