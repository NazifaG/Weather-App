const apiKey = "10ac37b86431246a1c734beccf8450a5"
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=london"

const input = document.querySelector('.input')
const searchBtn = document.querySelector('.searchBtn')

const weatherIcon = document.querySelector('.weather-icon')

// const cardDetails = document.querySelector('.card-details')



async function checkWeather(url){
      try{
        const response = await fetch(url)
        const data = await response.json()

        weatherInfo(data)

      } catch(err){
        console.log('ssssssssss');
      }     
       

   
}
// checkWeather()


function search(){
    const searchCity = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value}&appid=${apiKey}`
    checkWeather(searchCity)
}


searchBtn.addEventListener('click', search)

input.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        search()
    }
})





function weatherInfo(data){
    const arr = data
    document.querySelector('.city').innerHTML= data.name
    document.querySelector('.temp').innerHTML= Math.floor(data.main.temp) + "°C "
    document.querySelector('.humidity').innerHTML=data.main.humidity + "%"
    document.querySelector('.wind').innerHTML=data.wind.speed + " km/h"


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src ="./assets/img/weather-app-img (1)/images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="./assets/img/weather-app-img (1)/images/clear.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="./assets/img/weather-app-img (1)/images/rain.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="./assets/img/weather-app-img (1)/images/drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="./assets/img/weather-app-img (1)/images/mist.png";
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src ="./assets/img/weather-app-img (1)/images/snow.png";
    } 

       document.querySelector(".card-details").style.display = "block" 
   
}
