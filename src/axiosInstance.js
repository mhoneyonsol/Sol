const axios = require('axios');
require('dotenv').config();

// Define the prompt
const prompt = `Hello`;

// Make the API call
axios.post('https://api.openai.com/v1/completions', {
    prompt: prompt,
    max_tokens: 1024,
    temperature: 0.5
  },
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    }
  }
)
.then(response => {
    // Extract the generated text from the API response
    const generatedText = response.data.choices[0].text;
    console.log(generatedText)
  })
  .catch(error => {
    console.log(error);
  });