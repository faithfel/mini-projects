const typedByUser = document.querySelector('#typingInput');
const headerWord = document.querySelector('#headerWord');
const headerInput = document.querySelector('#headerInput');


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
    
    return randomItem;
  }


function compareWord() {

    if (typedByUser === ) {
        console.log('yea');
    }
    else {
        console.log('nah');
    }

}
