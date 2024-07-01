// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 유저번호보다 작다면 다운!!
// 랜덤번호가 유저번호보다 크다면 업!!
// reset 버튼을 누르면 게임 리셋
// 5번의 기회를 다 쓰면 게임이 끝난다.(버튼 disable)
// 유저가 범위 이상의 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
// 유저가 이미 입력한 숫자를 다시 입력하면 알려준다. 기회를 깎지 않는다.

let answer;
let userNumber;
let chance = 3;
let isGameOver = false;
let numArr = new Array();

let resultLetter = document.querySelector("#result-letter");
let inputArea = document.querySelector("#input-number");
let inputButton = document.querySelector("#input-button");
let resetButton = document.querySelector("#reset-button");
let lastChance = document.querySelector(".last-chance");
let answerArea = document.querySelector(".answer-area");
let numberArea = document.querySelector(".number-list");

inputButton.addEventListener("click", getNumber);
resetButton.addEventListener("click", reset);
inputArea.addEventListener("focus", function () {inputArea.value = "";})

// 랜덤번호 지정
function setNumber() {
  answer = Math.floor(Math.random() * 100) + 1;
  answerArea.innerText = `정답 : ${answer}`
}

// 입력값 받아오기
function getNumber() {
  userNumber = inputArea.value;

  if (userNumber < 1 || userNumber > 100) {
    resultLetter.innerText = "1~100 사이의 숫자를 입력하세요."
    return;
  }

  if (numArr.includes(userNumber)) {
    resultLetter.innerText = "이미 입력했던 숫자입니다."
    return;
  }

  numArr.push(userNumber);
  numberArea.textContent += String(userNumber) + ", ";

  if (userNumber > answer) {
    resultLetter.innerText = "아래로!";
  } else if (userNumber < answer) {
    resultLetter.innerText = "위로!";
  } else {
    resultLetter.innerText = "정답입니다!";
    inputButton.disabled = true;
    inputButton.style = "background: gray;"
    inputArea.value = "";
    lastChance.textContent = "";
  }

  if (chance >= 1) {
    chance --;
    lastChance.innerText = `CHANCE : ${chance}`;
    if (chance == 0) {
      isGameOver = true;
      console.log("game over");
      lastChance.innerText = "게임 종료!";
      lastChance.style = "color: red;"
      inputButton.disabled = true;
      inputButton.style = "background: gray;"
      inputArea.value = "";
      numberArea.textContent = "입력했던 숫자 : ";
    }
  }
}

function reset() {
  chance = 3;
  lastChance.innerText = `CHANCE : ${chance}`;
  lastChance.style = "color: black;"
  inputButton.disabled = false;
  inputButton.style = "background: rgb(65, 65, 248);"
  resultLetter.innerText = "결과값이 여기에 표시됩니다.";
  numberArea.textContent = "입력했던 숫자 : ";
  numArr.length = 0;
  setNumber();
}

setNumber();