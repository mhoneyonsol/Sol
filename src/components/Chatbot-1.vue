<template>
  <div class="chatbot">
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <strong>{{ message.user ? 'You' : 'Bot' }}:</strong> {{ message.text }}
      </div>
    </div>
    <input v-model="input" @keyup.enter="sendMessage" placeholder="Type your message" />
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script>
import axios from 'axios';

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
</script>

<style scoped>
.chatbot {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.messages {
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.message {
  margin-bottom: 5px;
}
</style>