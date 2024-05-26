const axios = require("axios");
const headers = {
  'content-type': 'application/json',
  'X-RapidAPI-Key': '0134a6def4msh889f1a2f7af1ff4p11ab03jsn59ea9a7a4c53',
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