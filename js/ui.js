const elements = {
           form: document.querySelector("form"),
           loader: document.querySelector('#loader'),
           errorMessage: document.querySelector('#error-message'),
           weatherContainer: document.querySelector('#weather-container'),
           location: document.querySelector('#location'),
           countryFlag: document.querySelector('.country-flag img'),
           date: document.querySelector('#date'),
           temperature: document.querySelector('#temperature'),
           feelLike: document.querySelector('#feel-like'),
           weatherIcon: document.querySelector('.weather-icon img'),
           weatherDescription: document.querySelector('#weather-description'),
           windSpeed: document.querySelector('#wind-speed'),
           humidity: document.querySelector('#humidity'),
           pressure: document.querySelector('#pressure'),
};

//*Loaderı gösteren fonksiyon
const showLoader = () => {
           elements.loader.style.display = "flex";
           elements.weatherContainer.classList.add("hidden");
}

//*Loaderı gizleyen fonksiyon
const hideLoader = () => {
           elements.loader.style.display = 'none';
}

//*apiden gelen hava durumu verisi ve bayrak ile arayüzü renderlayan fonksiyon
const displayWeather = (data, flagUrl) => {

           //*tarihi al
           const date = new Date().toLocaleDateString("tr", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",

           });
           console.log(data);


           //*Weather Container'ı görünür yap
           elements.weatherContainer.classList.remove("hidden");

           //*şehir adı ve ülke kodunu güncelle
           elements.location.textContent = `${data.name}, ${data.sys.country}`;

           //*bayrağı güncelle
           elements.countryFlag.src = flagUrl;

           //*tarihi güncelle
           elements.date.textContent = date;

           //*sıcaklık bilgilerini güncelle
           elements.temperature.textContent = `${Math.round(data.main.temp)}°C`;
           elements.feelLike.textContent = `Hissedilen: ${Math.round(data.main.feels_like)}°C`;

           //*hava durumu ikonu ve açıklamasını güncelle
           elements.weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
           elements.weatherDescription.textContent = data.weather[0].description;

           //*diğer hava durumu detaylarını güncelle
           elements.windSpeed.textContent = ` ${data.wind.speed} m/s`;
           elements.humidity.textContent = ` ${data.main.humidity}%`;
           elements.pressure.textContent = ` ${data.main.pressure} hPa`;

};
export { elements, displayWeather, showLoader, hideLoader };

