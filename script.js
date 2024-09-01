'use strict';

let UnknownNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

const message = function (message) {
  document.querySelector('.message').textContent = message;
};
const number = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess === UnknownNumber) {
    message('congradulation 🎉');

    number(UnknownNumber);
    let Highscore = score;
    Number((document.querySelector('.highscore').textContent = Highscore));
    document.querySelector('body').style.backgroundColor = '#50B35B';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess === 0) {
    message('No Number ❌');
  } else if (UnknownNumber !== guess) {
    if (score > 1) {
      guess < UnknownNumber ? message('higher ⬆️') : message('Lower ⬇️');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message('You Lost the Game ☠️');
      document.querySelector('body').style.backgroundColor = '#8E2020';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  document.querySelector('.score').textContent = score;

  UnknownNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';

  message(`Start guessing...`);
  document.querySelector('.guess').value = '';
  number('?');
  document.querySelector('.number').style.width = '15rem';
});
