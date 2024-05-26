const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://chat-gpt26.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '6ed4acb7e9msh0431f35c7687e02p10466cjsna33735aae3c6',
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