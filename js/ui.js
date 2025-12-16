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
           weatherIcon: document.querySelector('#weather-icon img'),
           weatherDescription: document.querySelector('#weather-description'),
           windSpeed: document.querySelector('#wind-speed'),
           humidity: document.querySelector('#humidity'),
           pressure: document.querySelector('#pressure'),
};

//*apiden gelen hava durumu verisi ve bayrak ile arayüzü renderlayan fonksiyon
const displayWeather = (data, flagUrl) => {
           const date = new Date().toLocaleDateString("tr", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
           });

           console.log(data);
           console.log(flagUrl);

           //*Weather Container'ı görünür yap
           elements.weatherContainer.classList.remove("hidden");

           //*şehir adı ve ülke kodunu güncelle
           elements.location.textContent = `${data.name}, ${data.sys.country}`;

           //*bayrağı güncelle
           elements.countryFlag.src = flagUrl;


};
export { elements, displayWeather };

