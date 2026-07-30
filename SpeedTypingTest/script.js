const typedByUser = document.querySelector('#typingInput');

//getting every input from user 
typedByUser.addEventListener('input', (event) => {
    console.log(event.target.value); 
});

// never remove focus out of input
typedByUser.addEventListener('blur', () => {
    typedByUser.focus();
});

async function getRandomWord() {

    // Fetches 1 random word from the public API
    const response = await fetch('https://random-word-api.herokuapp.com/all');
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];
    console.log("Your random selection:", randomItem);
    return randomItem;
  }
