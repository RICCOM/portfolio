// Simulated database using localStorage
function saveMessage(data) {
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push(data);
    localStorage.setItem('messages', JSON.stringify(messages));
  }
  
  // Optional: Retrieve messages (for debugging or future use)
  function getMessages() {
    return JSON.parse(localStorage.getItem('messages') || '[]');
  }
  
  // Example usage (uncomment to test in console)
  // console.log(getMessages());