
import { getFlagUrl, getWeather } from "./api.js";
import { elements } from "./ui.js";

//*Hava durumu verilerini alalım */
// const data = await getWeather("Konya");

//*Bayrak URL'sini alalım */
// const url = getFlagUrl(data.sys.country.toLowerCase());
// console.log(url);

elements.form.addEventListener("submit", async (e) => {
           e.preventDefault();
           const query = (e.target[0].value);
           const weatherData = await getWeather(query);
           const flagUrl = getFlagUrl(weatherData.sys.country);
           console.log(flagUrl);
});

