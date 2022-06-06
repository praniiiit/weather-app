let weather = 
{
    "apiKey" : "7ab852365c647e9b9a9f3fd7e390d205",

    fetchWeather : function(city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid="
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather : function (data) 
    {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, feels_like, humidity } =  data.main;
        const { speed } = data.wind;

        // console.log(name, feels_like, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".feels").innerText = "Feels like " + feels_like + "°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";        
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/hr";

        document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?" 
        + name.replace(" ", "+") + ")";
    },
    
    search : function()
    {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-button").addEventListener("click", function()
{
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) 
{
    if (event.key == "Enter")
    {
        weather.search();
    }
});

// weather.fetchWeather("Kolkata");