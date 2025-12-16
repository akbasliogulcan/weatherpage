
import { getFlagUrl, getWeather } from "./api.js";
import { displayWeather, elements, hideLoader, showLoader } from "./ui.js";

//*Hava durumu verilerini alalım */
// const data = await getWeather("Konya");

//*Bayrak URL'sini alalım */
// const url = getFlagUrl(data.sys.country.toLowerCase());
// console.log(url);

elements.form.addEventListener("submit", async (e) => {

           e.preventDefault();

           const query = (e.target[0].value);

           //*Loaderı göster */
           showLoader();

           const weatherData = await getWeather(query);
           //*Loaderı gizle */
           hideLoader();

           const flagUrl = getFlagUrl(weatherData.sys.country);

           displayWeather(weatherData, flagUrl);
});

