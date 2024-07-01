// 유저가 값을 입력한다.
// "+" 버튼 클릭 시 할일 추가
// "Delete" 버튼 클릭 시 할 일이 삭제된다.
// "Check" 버튼 클릭 시 밑 줄이 간다.

// 진행 중 끝남 탭을 누르면 언더바가 이동한다.
// 진행 중 아이템만 나온다.

// 전체 탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.querySelector("#task-input");
let addButton = document.querySelector("#add-button");
let allButton = document.querySelector("#all-button");
let notDoneButton = document.querySelector("#not-done-button");
let doneButton = document.querySelector("#done-button");
let underLine = document.querySelector("#under-line");
let menus = document.querySelectorAll(".task-tabs .tab-button");

let taskList = new Array();
let tabName = "all"; // 현재 탭 저장

addButton.addEventListener("click", addTask);
menus.forEach((menu) => menu.addEventListener("click", (e) => horizontalIndicator(e)));

// 메뉴 탭 이동
function horizontalIndicator(e) {
  underLine.style.left = e.currentTarget.offsetLeft + "px";
  underLine.style.width = e.currentTarget.offsetWidth + "px";
  underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight - 4 + "px";
}

// 할 일 추가
function addTask() {
  if (taskInput.value == "") {
    alert("할 일을 입력해주세요.");
    return;
  }

  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false
  };
  taskList.push(task);
  taskInput.value = "";
  console.log(taskList);
  
  if (tabName == "all") {
    render();
  } else if (tabName == "not-done") {
    filter("not-done");
  } else if (tabName == "done") {
    filter("done");
  }
}

// 일정 탭 렌더링
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

// 완료,미완료 여부 전환
function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  if (tabName == "all") {
    render();
  } else if (tabName == "not-done") {
    filter("not-done");
  } else if (tabName == "done") {
    filter("done");
  }
  // console.log(taskList);
}

// 할 일 삭제하기
function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }

  if (tabName == "all") {
    render();
  } else if (tabName == "not-done") {
    filter("not-done");
  } else if (tabName == "done") {
    filter("done");
  }
}

function filter(button_type) {
  document.querySelector("#task-board").innerHTML = "";
  
  if (button_type == "all") {
    tabName = "all";
    render();
  } else if (button_type == "not-done") {
    tabName = "not-done";
    resultHTML = "";
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
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
  } else if (button_type == "done") {
    tabName = "done";
    resultHTML = "";
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        resultHTML += `<div class="task">
          <div class="task-content" id="task-done">${taskList[i].taskContent}</div>
          <div class="button-container">
            <button id="check-button" onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-rotate-left fa-lg" style="color: #6b6b6b;"></i></button>
            <button id="delete-button" onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash-can fa-lg" style="color: #f4aecc;"></i></button>
          </div>
        </div>`;
      }
    }
    document.querySelector("#task-board").innerHTML = resultHTML;
  }
}

function randomIDGenerate() {
  return '_' + Math.random().toString(36).substring(2, 9);
}