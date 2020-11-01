let randomNumber = Math.floor(Math.random() * 100) + 1;

const quessSubmit = document.querySelector('.guess__submit');
const quessField = document.querySelector('.guess__field');

const quesses = document.querySelector('.result__guesses');
const outcome = document.querySelector('.result__outcome');
const comparison = document.querySelector('.result__comparison');

let quessCount = 1;
let resetButton;

function checkGuess() {
  
  let userGuess = +quessField.value;
  // typeof userGuess == 'number' &&
  if (isNaN(userGuess) || quessField.value === '') {
      alert('Введите цифру');
  }  else {
    
    if (quessCount === 1) {
      quesses.textContent = 'Ваши предположения: ';
    }
    quesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
      outcome.textContent = 'Поздравляем! Вы угадали!';
     outcome.style.backgroundColor = 'green';
     comparison.textContent = '';
     setGameOver();
   } else if (quessCount === 10) {
     outcome.textContent = 'Упс! Закончились попытки! Вы ПРОИГРАЛИ!';
     comparison.textContent = '';
     setGameOver();
   } else {
     outcome.textContent = 'Ошибочка! Попытайтесь ещё!';
     outcome.style.backgroundColor = 'red';
     if(userGuess < randomNumber) {
       comparison.textContent = 'Ваше предположение оказалось меньше загаданного числа!';
     } else if(userGuess > randomNumber) {
       comparison.textContent = 'Ваше предположение оказалось больше загаданного числа';
     }
   }

    quessCount++;
    quessField.value = '';
    quessField.focus ();
  }
}

quessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  quessField.disabled = true;
  quessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Начать новую игру';
  document.querySelector('.app').appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  quessCount = 1;

  let reset = document.querySelectorAll('.result p');
  for (let i = 0; i < reset.length; i++) {
    reset[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  quessField.disabled = false;
  quessSubmit.disabled = false;
  quessField.value = '';
  quessField.focus();

  outcome.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

