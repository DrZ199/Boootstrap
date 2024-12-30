// Select chat elements
const chatArea = document.getElementById('chatArea');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

// Function to add messages to the chat
function addMessage(message, sender = 'user') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.textContent = message;
    chatArea.appendChild(messageDiv);
    chatArea.scrollTop = chatArea.scrollHeight; // Auto-scroll to the latest message
}

// Event listener for the Send button
sendBtn.addEventListener('click', () => {
    const userMessage = chatInput.value.trim(); // Get and trim user input
    if (userMessage) {
        addMessage(userMessage, 'user'); // Add user message to chat
        chatInput.value = ''; // Clear input field

        // Simulate chatbot response (replace this with API call)
        setTimeout(() => {
            const botResponse = 'This is a response from NelsonGPT.'; // Replace with dynamic content
            addMessage(botResponse, 'bot'); // Add bot response to chat
        }, 1000); // Simulate a delay of 1 second
    }
});

// Enable sending message on pressing Enter
chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendBtn.click(); // Trigger the click event of the Send button
    }
});