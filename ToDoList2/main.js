// nav-bar 보이기
let toggleButton = document.querySelector("#toggle-button");
let navBar = document.querySelector(".nav-bar");

toggleButton.addEventListener("click", function () {
  navBar.classList.toggle("active");
});

// input 버튼을 누르면 할 일을 리스트에 추가
let taskList = new Array();

let 