function main() {
  console.log("Hello, World!");
  const startButton = document.getElementById('start-button');
  const messages = document.querySelectorAll('.message');

  // Add hidden class to all messages initially
  messages.forEach(message => {
    message.classList.add('hidden');
  });

  if (startButton) {
    startButton.addEventListener('click', () => {
      // Iterate through all messages and remove the hidden class
      messages.forEach(message => {
        message.classList.remove('hidden');
      });
    });
  } else {
      console.error("Start button not found!");
  }

}

main();
