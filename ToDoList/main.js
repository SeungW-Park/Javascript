// 유저가 값을 입력한다.
// "+" 버튼 클릭 시 할일 추가
// "Delete" 버튼 클릭 시 할 일이 삭제된다.
// "Check" 버튼 클릭 시 밑 줄이 간다.

// 진행 중 끝남 탭을 누르면 언더바가 이동한다.
// 진행 중 아이템만 나온다.

// 전체 탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.querySelector("#task-input");
let addButton = document.querySelector("#add-button");

let taskList = new Array();

addButton.addEventListener("click", addTask);

function addTask() {
  let taskContent = taskInput.value;
  taskList.push(taskContent);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `<div class="task">
          <div>${taskList[i]}</div>
          <div>
            <button>Check</button>
            <button>Delete</button>
          </div>
        </div>`;
  }

  document.querySelector("#task-board").innerHTML = resultHTML;
}