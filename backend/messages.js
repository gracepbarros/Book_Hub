let _messages = [];

const messages = () => _messages;

const addMessage = (user_message) => {
    _messages.push(user_message);
}

//maybe edit and delete 

const resetMessages = () => {
    _messages.splice(0, _messages.length);
}

export { messages, addMessage, resetMessages }; 