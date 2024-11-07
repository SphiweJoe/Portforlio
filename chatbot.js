// script.js
document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() === '') {
    return;
  }

  // Display user message
  appendMessage(userInput, 'user');

  // Clear input field
  document.getElementById('user-input').value = '';

  // Generate bot response after a short delay
  setTimeout(() => {
    const botResponse = getBotResponse(userInput);
    appendMessage(botResponse, 'bot');
  }, 1000);
}

function appendMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message', `${sender}-message`);
  messageElement.innerHTML = `<p>${message}</p>`;

  const chatBox = document.getElementById('chat-box');
  chatBox.appendChild(messageElement);
  
  // Scroll to the latest message
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  const lowerCaseInput = input.toLowerCase();
  
  // Simple responses based on user input
  if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
    return 'Hello there! How can I assist you today?';
  } else if (lowerCaseInput.includes('your name')) {
    return 'I am a chatbot created by OpenAI!';
  } else if (lowerCaseInput.includes('how are you')) {
    return 'I am just a bot, but I am doing great! How about you?';
  } else if (lowerCaseInput.includes('bye')) {
    return 'Goodbye! Have a nice day!';
  } else {
    return 'I\'m sorry, I don\'t understand that. Can you try again?';
  }
}

// script.js
let userName = '';  // Variable to remember user's name

// Event listener for the send button
document.getElementById('send-btn').addEventListener('click', sendMessage);

// Function to send message
function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() === '') {
    return; // Don't send empty messages
  }

  // Display user message
  appendMessage(userInput, 'user');

  // Clear input field
  document.getElementById('user-input').value = '';

  // Generate bot response after a short delay
  setTimeout(() => {
    const botResponse = getBotResponse(userInput);
    appendMessage(botResponse, 'bot');
  }, 1000);
}

// Function to append messages to the chat
function appendMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message', `${sender}-message`);
  messageElement.innerHTML = `<p>${message}</p>`;

  const chatBox = document.getElementById('chat-box');
  chatBox.appendChild(messageElement);
  
  // Scroll to the latest message
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to generate bot response based on user input
function getBotResponse(input) {
  const lowerCaseInput = input.toLowerCase();

  // Check for user's name
  if (lowerCaseInput.includes('my name is') || lowerCaseInput.includes('i am')) {
    const name = lowerCaseInput.replace(/.*(my name is|i am)\s/, '').trim();
    userName = name;
    return `Nice to meet you, ${userName}! How can I help you today?`;
  }

  // Handle greetings with variations
  if (lowerCaseInput.match(/hello|hi|hey|greetings/)) {
    return getRandomGreeting();
  }

  // Handling questions about the bot
  if (lowerCaseInput.includes('your name') || lowerCaseInput.includes('who are you')) {
    return 'I am a chatbot created by OpenAI! How can I assist you?';
  }

  // Handle emotional responses
  if (lowerCaseInput.includes('how are you')) {
    return getRandomEmotionResponse();
  }

  // Handle farewell
  if (lowerCaseInput.match(/bye|goodbye|see you/)) {
    return 'Goodbye! Hope to chat again soon!';
  }

  // Handle unrecognized inputs
  return 'I\'m sorry, I don\'t understand that. Can you try again?';
}

// Function to return a random greeting
function getRandomGreeting() {
  const greetings = [
    'Hello there! How can I assist you today?',
    'Hi! How are you doing today?',
    'Hey! What can I do for you?',
    'Greetings! How can I help you today?'
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

// Function to return a random emotional response
function getRandomEmotionResponse() {
  const emotions = [
    'I am doing great, thanks for asking!',
    'I\'m just a bot, but I\'m always ready to chat!',
    'I\'m doing well! How about you?',
    'I am functioning optimally, thank you!'
  ];
  return emotions[Math.floor(Math.random() * emotions.length)];

  // chatbot.js

// Responses object to store possible chatbot replies
const responses = {
    greet: ['Hello! How can I assist you today?', 'Hi there! What can I do for you?', 'Greetings! How can I help you?'],
    help: ['Sure! How can I help you?', 'What do you need assistance with?', 'Tell me how I can assist you.'],
    time: function() {
        const now = new Date();
        return `The current time is ${now.getHours()}:${now.getMinutes()} on ${now.toLocaleDateString()}.`;
    },
    joke: ['Why don’t skeletons fight each other? They don’t have the guts!', 'Why did the scarecrow win an award? Because he was outstanding in his field!'],
    unknown: ['I’m not sure I understand. Could you rephrase?', 'I didn’t quite get that. Can you clarify?', 'I’m sorry, I don’t know how to respond to that.']
};

// Function to send user message to the chatbox
function displayUserMessage(message) {
    const chatbox = document.getElementById('chatbox');
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user-message');
    userMessageElement.textContent = `You: ${message}`;
    chatbox.appendChild(userMessageElement);
}

// Function to send bot response to the chatbox
function displayBotMessage(response) {
    const chatbox = document.getElementById('chatbox');
    const botMessageElement = document.createElement('div');
    botMessageElement.classList.add('message', 'bot-message');
    botMessageElement.textContent = `Bot: ${response}`;
    chatbox.appendChild(botMessageElement);
    chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to the bottom
}

// Function to handle user input and determine bot response
function handleUserInput() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    if (!userInput) return;  // Don't process empty input

    displayUserMessage(userInput);  // Display user input

    let botResponse = responses.unknown;  // Default response

    // Match user input to one of the categories
    if (userInput.includes('hello') || userInput.includes('hi')) {
        botResponse = responses.greet[Math.floor(Math.random() * responses.greet.length)];
    } else if (userInput.includes('help')) {
        botResponse = responses.help[Math.floor(Math.random() * responses.help.length)];
    } else if (userInput.includes('time')) {
        botResponse = responses.time();
    } else if (userInput.includes('joke')) {
        botResponse = responses.joke[Math.floor(Math.random() * responses.joke.length)];
    }

    displayBotMessage(botResponse);  // Display bot response
    document.getElementById('user-input').value = '';  // Clear input field
}

// Add event listener to the send button
document.getElementById('send-btn').addEventListener('click', handleUserInput);

// Allow pressing Enter to submit the message as well
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

}
