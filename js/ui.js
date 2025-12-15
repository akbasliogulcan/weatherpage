const elements = {
           form: document.querySelector("form"),
           loader: document.querySelector('#loader'),
           errorMessage: document.querySelector('#error-message'),
           weatherContainer: document.querySelector('#weather-container'),
           location: document.querySelector('#weather-container'),
           countryFlag: document.querySelector('.country-flag img')
};

//*apiden gelen hava durumu verisi ve bayrak ile arayüzü renderlayan fonksiyon
const displayWeather = (data, flagUrl) => { };


export { elements, displayWeather };

