// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 유저번호보다 작다면 다운!!
// 랜덤번호가 유저번호보다 크다면 업!!
// reset 버튼을 누르면 게임 리셋
// 5번의 기회를 다 쓰면 게임이 끝난다.(버튼 disable)
// 유저가 범위 이상의 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
// 유저가 이미 입력한 숫자를 다시 입력하면 알려준다. 기회를 깎지 않는다.

let computerNum = 0;
let goBtn = document.getElementById("go-btn");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area")

goBtn.addEventListener("click", play);

function pickRandomNum() {
  // 두 자리 랜덤 숫자를 변수에 저장
  computerNum = Math.floor(Math.random() * (10 ** 2)) + 1;
}

// up, down, 정답을 result-area에 출력
function play() {
  let userValue = userInput.value;
  if (userValue < computerNum) {
    resultArea.textContent = "UP!"
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!"
  } else if (userValue == computerNum) {
    resultArea.textContent = "정답입니다!"
  }
}

pickRandomNum();

let test = document.getElementById("test");
console.log(test.innerText);
console.log(test.textContent);
console.log(test.innerHTML);