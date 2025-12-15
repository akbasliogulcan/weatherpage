//!Base URL and API Key
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "5e6222f6ff94b614c359d6270b9d3176";

//*bayrak verilerini alan Fonks.
const getFlagUrl = (countryCode) =>
           `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`;



//*Hava durumu verilerini alan Fonks.
const getWeather = async (city) => {
           try {
                      const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);

                      const weatherData = await response.json();


                      if (!response.ok) {
                                 throw new Error("Arama sırasında bir hata oluştu.");
                      }

                      return weatherData;

           } catch (error) {

                      throw error
           }

};
export { getWeather, getFlagUrl };