'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = function(country) {

//     const request = new XMLHttpRequest(); //Ols school way of doing this.
//     request.open("get", `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener("load", function() {
//         // console.log(this.responseText);

//         //Convert the JSONfile
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         const html = `
//     <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)]}</p>
//      <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)].name}</p>
//     </div>
//   </article>
//     `

//         countriesContainer.insertAdjacentHTML("beforeend", html);
//         countriesContainer.style.opacity = 1;
//     });

// }


const renderCountry = function(data, className = "") {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)]}</p>
     <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)].name}</p>
    </div>
  </article>
    `
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
}


const getCountryAndNeighbour = function(country) {

    // AJAX call country 1
    const request = new XMLHttpRequest(); //Ols school way of doing this.
    request.open("get", `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener("load", function() {
        // console.log(this.responseText);
        //Convert the JSONfile
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        //Render country 1
        renderCountry(data);

        //Get neighbour country2
        const [neighbour] = data.borders; //destructing
        if (!neighbour) return;

        // AJAX call country 2
        const request2 = new XMLHttpRequest(); //Ols school way of doing this.
        request2.open("get", `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener("load", function() {
            const [data2] = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, "neighbour")
        });
    });

}


getCountryAndNeighbour("Portugal");
// 😋😋😋😋😋😋😋obj[Object.keys(obj)]  
// getCountryData("China");



// const request = new XMLHttpRequest(); //Ols school way of doing this.
// request.open("get", `https://restcountries.com/v3.1/name/${country}`);
// request.send();


const request = fetch("https://restcountries.com/v3.1/name/Australia");
console.log(request);

const getCountryData = function(country) {
    //Calling a fetch function will return a promise
    //Into a then method: we need to pass a callback function that we want to be executed as soon as the promise is actually fulfilled.
    response.json()
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        // console.log(response);
        //In order to be read from the body, we need to call the json method.
        .then((response) => response.json())
        .then((data) => renderCountry(data[0]));
    // console.log(data);
}
getCountryData("France");