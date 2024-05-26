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

export default {
  data() {
    return {
      messages: [],
      input: ''
    };
  },
  methods: {
    async sendMessage() {
      const userMessage = this.input;
      if (userMessage.trim() === '') return;

      this.messages.push({ user: true, text: userMessage });
      this.input = '';

      try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
          prompt: `User: ${userMessage}\nBot:`,
          max_tokens: 150,
          n: 1,
          stop: ["\n"],
        }, {
          headers: {
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
            'Content-Type': 'application/json'
          }
        });

        const botMessage = response.data.choices[0].text.trim();
        this.messages.push({ user: false, text: botMessage });
      } catch (error) {
        console.error('Error communicating with the API', error);
        this.messages.push({ user: false, text: 'Sorry, I am having trouble responding right now.' });
      }
    }
  }
};
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