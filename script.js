//Обновить страницу при нажатии на кнопку "Попробовать еше раз" - done
const helloBox = document.querySelector(".hello-box");
const random = document.querySelector(".random");
const input = document.querySelector(".input");
const success = document.querySelector(".success");
const lose = document.querySelector(".lose");
const helloButton = document.querySelector(".hello-box__button");
const interactiveButton = document.querySelector(".interactive__button");
const tryAgainButton = document.querySelector(".try-again-button");
const tryAgainButtonTwo = document.querySelector(".try-again-button-two");
const secretNumber = document.querySelector("#secretNumber");
const secretNumberTwo = document.querySelector("#secretNumber2");
// const randomeNumber = document.querySelector(".test");

helloButton.onclick = clickStart;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clickStart() {
  helloBox.style.display = "none";
  random.style.display = "flex";

  let getNumber = getRandom(1, 10);

  //   randomeNumber.innerHTML = getNumber; // Для теста
  secretNumber.innerHTML = getNumber;
  secretNumberTwo.innerHTML = getNumber;

  console.log(getNumber);

  return getNumber;
}

interactiveButton.onclick = checkAnsver;
function checkAnsver() {
  //   console.log(input.value);
  //   console.log(secretNumber.innerHTML);
  if (input.value == secretNumber.innerHTML) {
    helloBox.style.display = "none";
    random.style.display = "none";
    lose.style.display = "none";
    success.style.display = "flex";
  } else {
    helloBox.style.display = "none";
    random.style.display = "none";
    lose.style.display = "flex";
    success.style.display = "none";
  }
}

tryAgainButton.onclick = restart;
tryAgainButtonTwo.onclick = restart;

function restart() {
  location.reload();
}
