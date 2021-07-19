'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/* const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              Number(data.population) / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('Lithuania');
getCountryData('Russia');
getCountryData('Latvia');
getCountryData('Estonia'); */
/* request.open('GET', 'https://restcountries.eu/rest/v2/all');
request.send();

request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);
  data.forEach((country) => {
    const html = `
    <article class="country">
    <img class="country__img" src="${country.flag}" />
    <div class="country__data">
        <h3 class="country__name">${country.name}</h3>
        <h4 class="country__region">${country.region}</h4>
        <p class="country__row"><span>👫</span>${(
          Number(country.population) / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${country.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${country.currencies[0].name}</p>
    </div>
    </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
  });
  countriesContainer.style.opacity = 1;
}); */

const renderCountry = function (data, className = '') {
  const html = `
          <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                Number(data.population) / 1000000
              ).toFixed(1)}M people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
          </div>
          </article>
      `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    const [neighbour] = data.borders;

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('Lithuania');
getCountryAndNeighbour('Estonia'); */

/* const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
console.log(request);

const getCountryData = function (country) {
  const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};
 */

/* const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = `Something went wrong`) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      // const neighbour = 'jdskj';

      if (!neighbour) throw new Error('No neighbour found!');

      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then((data) => renderCountry(data, 'neighbour'))
    .catch((err) => {
      console.log(`${err} 💥💥💥`);
      renderError(`Something went wrong | ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('Iceland');
}); */

/* const getCountryData = function (country) {
      const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Country not found (${response.status})`);
          }
          return response.json();
        })
        .then((data) => {
          renderCountry(data[0]);
          const neighbour = data[0].borders[0];
    
          if (!neighbour) return;
    
          return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Country not found (${response.status})`);
          }
          return response.json();
        })
        .then((data) => renderCountry(data, 'neighbour'))
        .catch((err) => {
          console.log(`${err} 💥💥💥`);
          renderError(`Something went wronk | ${err.message}. Try again`);
        })
        .finally(() => {
          countriesContainer.style.opacity = 1;
        });
    }; */

/* const errorHandler = function (url, errormsg) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errormsg}`);
    }
    return response.json();
  });
};

const whereAmI = function (lat, lng) {
  errorHandler(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`,
    'Too fast bitch'
  )
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.countryName}`);

      return errorHandler(
        `https://restcountries.eu/rest/v2/name/${data.countryName}`,
        'No country by this name'
      );
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.log(err))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}; */

/* whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
 */

/* const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Checking the ticket');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win');
    } else {
      reject("You didn't win");
    }
  }, 2000);
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 secs');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 sec'));

Promise.resolve('abc').then((x) => console.log(x));
Promise.reject(new TypeError('Problem!')).then((x) => console.log(x)); */
/* 
navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.log(err)
);
 */
/* const getPosition = function () {
  return new Promise(function (resolve, reject) {
    /* navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (err) => console.log(err)
    ); 
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((pos) => console.log(pos));

const errorHandler = function (url, errormsg) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errormsg}`);
    }
    return response.json();
  });
};

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
      );
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${errormsg}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.countryName}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.countryName}`);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${errormsg}`);
      }
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', whereAmI); */
/* 
const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let image;

createImage('img/img-1.jpg')
  .then((res) => {
    console.log(`Loaded image 1`);
    image = res;
    return wait(2);
  })
  .then(() => {
    image.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then((res) => {
    console.log(`Loaded image 2`);
    image = res;
    return wait(2);
  })
  .then(() => {
    image.style.display = 'none';
  })
  .catch((err) => console.log(err)); */

/* const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();

    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.countryName}`
    );
    if (!res.ok) throw new Error('Problem getting country');

    const [data] = await res.json();
    renderCountry(data);

    return `You are in ${dataGeo.city}`;
  } catch (err) {
    console.log(err.message);
    renderError(`Something went wrong`);
  }
};

// const city = whereAmI();
// console.log(city);

whereAmI().then((city) => console.log(city));

(async function () {
  try {
    const res = await whereAmI();
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
})();

console.log('first'); */
/* const getJSON = function (url, errorMsg = `Something went wrong`) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );

    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);

    console.log(data.map((data) => data[0].capital));
  } catch (err) {
    console.log(err);
  }
};

get3Countries('lithuania', 'latvia', 'australia');
 */

// const wait = function (sec) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, sec * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let image;

// createImage('img/img-1.jpg')
//   .then((res) => {
//     console.log(`Loaded image 1`);
//     image = res;
//     return wait(2);
//   })
//   .then(() => {
//     image.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then((res) => {
//     console.log(`Loaded image 2`);
//     image = res;
//     return wait(2);
//   })
//   .then(() => {
//     image.style.display = 'none';
//   })
//   .catch((err) => console.log(err));

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const loadNPause = async function () {
  try {
    let res = await createImage(`img/img-1.jpg`);
    await wait(2);
    res.style.display = 'none';
    res = await createImage('img/img-2.jpg');
    await wait(2);
    res.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((el) => el.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// loadNPause();
