// Initialize the chatbot
function initBot() {
    // Define the starting message
    var botMessage = "Hi! How can I assist you today?";
  
    // Get the chatbox and append the bot's message
    var chatbox = document.getElementById("chatbox");
    var timestamp = new Date().toLocaleTimeString();
    chatbox.innerHTML += "<p class='botText'>" + botMessage + "</p><h5 class='chat-timestamp'>" + timestamp + "</h5>";
  
    // Set the focus on the input box
    document.getElementById("textInput").focus();
  }
  
  // Send user input to the chatbot
  function sendButton() {
    // Get the user's input
    var userInput = document.getElementById("textInput").value;
  
    // Clear the input box
    document.getElementById("textInput").value = "";
  
    // Get the chatbox and append the user's message
    var chatbox = document.getElementById("chatbox");
    var timestamp = new Date().toLocaleTimeString();
    chatbox.innerHTML += "<p class='userText'>" + userInput + "</p><h5 class='chat-timestamp'>" + timestamp + "</h5>";
  
    // Get the bot's response and append it to the chatbox
    var botResponse = getBotResponse(userInput);
    chatbox.innerHTML += "<p class='botText'>" + botResponse + "</p><h5 class='chat-timestamp'>" + timestamp + "</h5>";
  
    // Set the focus on the input box
    document.getElementById("textInput").focus();
  }
  
  // Get the bot's response based on user input
  function getBotResponse(input) {
    // TODO: Implement your chatbot's logic here
    return "I'm sorry, I don't understand. Can you please rephrase?";
  }
  
  // Add heart button functionality
  function heartButton() {
    // Toggle the heart icon's color
    var heartIcon = document.getElementById("heart-icon");
    if (heartIcon.style.color === "red") {
      heartIcon.style.color = "#333";
    } else {
      heartIcon.style.color = "red";
    }
  }
  