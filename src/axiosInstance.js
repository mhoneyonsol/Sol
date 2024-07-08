const axios = require("axios");
const headers = {
  'content-type': 'application/json',
  'X-RapidAPI-Key': '',
  'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
};
const data = {
  prompt: "A cute kitten",
  n: 1,
  size: "1024x1024"
};
axios.post("https://openai80.p.rapidapi.com/images/generations", data, { headers })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });