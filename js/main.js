
import { getFlagUrl, getWeather } from "./api.js";
import cities from "./constant.js";
import { displayWeather, elements, hideLoader, showLoader, showError, hideError, updateThemeIcon } from "./ui.js";



//*******************************Tema Ayarı ***************************************/
//*Body elementini seç (Clean code için değişkene atadık)
const body = document.body;

//* 1) Tema Attribute. localStorage’da kayıtlı bir tema varsa onu al, yoksa "light" kullan
const savedTheme = localStorage.getItem('theme') || "light";



//* 2) Body'e tema attribute ekle .Seçilen temayı body'e yaz
//* savedTheme → “Kullanılacak tema”    data-theme → “HTML’ye bildir”
body.setAttribute("data-theme", savedTheme);

//*******************************Tema Ayarı ***************************************/



//*DOMContentLoaded eventi, HTML belgesi tamamen yüklendiğinde ve ayrıştırıldığında tetiklenir
document.addEventListener("DOMContentLoaded", () => {

           //*Şehirleri datalist'e ekle
           createOption(cities);



           //*Dark/Light tema butonunu ayarla
           //*Tema değiştirme butonuna tıklanınca çalışacak event listener
           elements.themeBtn.addEventListener("click", () => {



                      //*Mevcut temayı al */
                      const currentTheme = body.getAttribute("data-theme");

                      let newTheme;

                      //*Yeni temayı belirle */        
                      newTheme = currentTheme === "light" ? "dark" : "light";

                      //*Yeni temayı body'e uygula */
                      body.setAttribute("data-theme", newTheme);

                      //*Yeni temayı localStorage'a kaydet */
                      localStorage.setItem("data-theme", newTheme);


                      //*iconu güncelle
                      updateThemeIcon(newTheme);

           });





});


//*Form gönderdildiğinde çalışacak event listener api çağrısı yapar
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

           finally {
                      //*loeaderı gizle
                      hideLoader();
           }







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




