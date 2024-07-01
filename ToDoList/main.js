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
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `<div class="task">
          <div class="task-content" id="task-done">${taskList[i].taskContent}</div>
          <div class="button-container">
            <button id="check-button" onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-rotate-left fa-lg" style="color: #6b6b6b;"></i></button>
            <button id="delete-button" onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash-can fa-lg" style="color: #f4aecc;"></i></button>
          </div>
        </div>`;
    } else {
      resultHTML += `<div class="task">
            <div class="task-content">${taskList[i].taskContent}</div>
            <div class="button-container">
              <button id="check-button" onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-check fa-lg" style="color: #63E6BE;"></i></button>
              <button id="delete-button" onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash-can fa-lg" style="color: #f4aecc;"></i></button>
            </div>
          </div>`;
    }
  }

  document.querySelector("#task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  // console.log(taskList);
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }

  render();
}

function randomIDGenerate() {
  return '_' + Math.random().toString(36).substring(2, 9);
}