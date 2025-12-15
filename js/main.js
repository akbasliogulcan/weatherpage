import { getFlagUrl, getWeather } from "./api.js";

//*Hava durumu verilerini alalım */
const data = await getWeather("Konya");
console.log(data);


//*Bayrak URL'sini alalım */
const url = getFlagUrl(data.sys.country.toLowerCase());
console.log(url);

