const typedByUser = document.querySelector('#typingInput');
const headerWord = document.querySelector('#headerWord');
const headerInput = document.querySelector('#headerInput');

const scoreText = document.querySelector('#score');

let score = 0;

// never remove focus out of input
typedByUser.addEventListener('blur', () => {
    typedByUser.focus();
});

//getting every input from user 
typedByUser.addEventListener('input', (event) => {
    headerInput.textContent = event.target.value;
    compareWord(); 
});

//json api display as h1
async function getRandomWord() {

    const response = await fetch('json/all.json');
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];


    headerWord.textContent = randomItem;
    console.log(randomItem);

    currentRandomItem = randomItem; 
    return randomItem;
  }


function compareWord() {
    if (typedByUser.value === currentRandomItem) {

        console.log("Word matched");
        getRandomWord();

        typedByUser.value = "";
        headerInput.textContent = "";

        score ++
        scoreText.textContent = score;
    }
    else {
        console.log("Does not match.");
    }
}


