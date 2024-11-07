document.addEventListener("DOMContentLoaded", function() {
    const chatbotContainer = document.createElement("div");
    chatbotContainer.id = "chatbotContainer";
    chatbotContainer.innerHTML = `
        <button id="chatbotToggle">Chat</button>
        <div id="chatbox" style="display: none;">
            <p>Hi! How can I help you today?</p>
            <input type="text" id="userInput" placeholder="Type here...">
            <button id="sendBtn">Send</button>
            <div id="chatResponses"></div>
        </div>
    `;
    document.body.appendChild(chatbotContainer);

    document.getElementById("chatbotToggle").addEventListener("click", function() {
        const chatbox = document.getElementById("chatbox");
        chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
    });

    document.getElementById("sendBtn").addEventListener("click", function() {
        const userInput = document.getElementById("userInput").value;
        const responses = document.getElementById("chatResponses");
        const userMessage = document.createElement("p");
        userMessage.textContent = "You: " + userInput;
        responses.appendChild(userMessage);

        const botMessage = document.createElement("p");
        botMessage.textContent = "Bot: Here to assist!";
        responses.appendChild(botMessage);
        document.getElementById("userInput").value = "";
    });
});
