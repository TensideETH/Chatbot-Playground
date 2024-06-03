// Example code for creating a chatbot in JavaScript
function chatbot() {
    while (true) {
        let user_input = prompt("You: ");
        if (user_input.toLowerCase() === 'bye') {
            console.log("Chatbot: Bye! See you soon!");
            break;
        } else {
            console.log("Chatbot: Great, I'm still learning to respond but I'll get there soon!");
        }
    }
}

chatbot();
