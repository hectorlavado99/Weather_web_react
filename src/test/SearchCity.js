import axios from 'axios';



function searchCity(id, text) {
    const params = { q: text };
    if (id) {
        params.chatId = id;
    }
    return new Promise((resolve, reject) => {
      var city="bar";
      var apiKey=localStorage.getItem('apiKey');
      axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city}&language=es-es`)
      .then((response) => {
        resolve(response.data);
      })
    });
}

/*
function searchCity(id, text) {
  const params = { q: text };
  if (id) {
      params.chatId = id;
  }
  return new Promise((resolve, reject) => {
    var city="bar";
    var apiKey=localStorage.getItem('apiKey');
    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city}&language=es-es`)
    .then((response) => {
      resolve(response.data);
    })
  });
}*/

export default {
  searchCity
};