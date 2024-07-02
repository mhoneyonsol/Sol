<template>
  <div class="chatbot">
    <div class="chatbot-header">
      <button class="clear-button" @click="clearMessages">✖</button>
    </div>
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
      input: '',
    };
  },
  methods: {
    async sendMessage() {
      if (this.input.trim() === '') {
        return;
      }

      // Add user's message to the chat
      this.messages.push({ user: true, text: this.input });

      try {
        const response = await axios.post(
          'https://api.openai.com/v1/completions',
          {
            model: 'text-davinci-003', // Specify the model you are using
            prompt: this.input,
            max_tokens: 150,
            temperature: 0.7
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.VUE_APP_OPENAI_API_KEY}`
            }
          }
        );

        const botResponse = response.data.choices[0].text.trim();
        this.messages.push({ user: false, text: botResponse });
      } catch (error) {
        console.error('Error communicating with OpenAI API:', error);
      } finally {
        this.input = '';
      }
    },
    clearMessages() {
      this.messages = [];
    }
  }
};
</script>

<style scoped>
.chatbot {
    position: fixed;
    bottom: 0;
    right: 50%;
    left: 45%;
    width: 300px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    border-radius: 12px 12px 0px 0px;
}

.chatbot-header {
    display: flex;
    justify-content: flex-end;
}

.clear-button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #ccc;
}

.clear-button:hover {
    color: #ff0000;
}

.messages {
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.message {
  margin-bottom: 5px;
}

button {
    margin-left: 5%!important;
    padding-bottom: 5px!important;
}
</style>
