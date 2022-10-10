// this is the code to get the city latitude and longitude:

fetch('http://api.openweathermap.org/geo/1.0/direct?q=Miami,US FL,USA&limit=2&appid=117a215317474ea15e7c30dd04526463', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data[0]);
    var lat = data[0].lat
    var lon = data[0].lon

    fetch('https://api.openweathermap.org/data/3.0/onecall?lat='+lat+'&lon='+lon+'&appid=117a215317474ea15e7c30dd04526463', {
      method: 'GET', 
      credentials: 'same-origin', 
      redirect: 'follow', 
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  
  });