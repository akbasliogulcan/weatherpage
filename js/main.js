
import { getFlagUrl, getWeather } from "./api.js";
import cities from "./constant.js";
import { displayWeather, elements, hideLoader, showLoader, showError, hideError } from "./ui.js";


//*Sayfa yüklendiğinde şehirleri datalist'e ekle
document.addEventListener("DOMContentLoaded", () => {
           createOption(cities);

});

//*Form gönderdildiğinde çalışacak event listener
elements.form.addEventListener("submit", async (e) => {


           e.preventDefault();

           const query = (e.target[0].value.trim());

           //*Eğer input boşsa işlemi durdur */
           if (!query) {
                      alert("Lütfen bir şehir adı giriniz.");
                      return;
           }



           //*Loaderı göster */
           showLoader();


           try {
                      //*Hava durumu verilerini al */
                      const weatherData = await getWeather(query);

                      //*Bayrak URL'sini al */
                      const flagUrl = getFlagUrl(weatherData.sys.country);

                      //*Hava durumu verilerini arayüzde göster */
                      displayWeather(weatherData, flagUrl);


                      hideError();
           }

           catch (error) {

                      showError(error.message);

           }

           //*loeaderı gizle
           hideLoader();





});


//*Şehirleri gösteren fonksiyon

const createOption = (cities) => {
           //*dışarıdan verilen cities dizisini dön ve herbir dizi elemanı için option oluştur.
           cities.forEach(city => {

                      //*her eleman için option oluştur
                      const option = document.createElement("option");

                      //*optionların value değerini şehir adı olarak ayarla
                      option.value = city;

                      //*optionı datalistin içine ekle,appendChild, seçtiğin HTML elemanını başka bir elemanın içine eklemeye yarar.
                      elements.citiesDatalist.appendChild(option);

           });
};

