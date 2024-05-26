const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://chat-gpt26.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '0134a6def4msh889f1a2f7af1ff4p11ab03jsn59ea9a7a4c53',
    'X-RapidAPI-Host': 'chat-gpt26.p.rapidapi.com'
  },
  data: {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: 'Hello'
      }
    ]
  }
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}