const typedByUser = document.querySelector('#typingInput');
const headerWord = document.querySelector('#headerWord')



//getting every input from user 
typedByUser.addEventListener('input', (event) => {
    console.log(event.target.value); 
});

// never remove focus out of input
typedByUser.addEventListener('blur', () => {
    typedByUser.focus();
});

//json api display as h1
async function getRandomWord() {

    const response = await fetch('json/all.json');
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];

    headerWord.textContent = randomItem;
    console.log(randomItem);
    
    return randomItem;
  }
