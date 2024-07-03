// nav-bar 보이기
let toggleButton = document.querySelector("#toggle-button");
let navBar = document.querySelector(".nav-bar");

toggleButton.addEventListener("click", function () {
  navBar.classList.toggle("active");
});

// input 버튼을 누르면 할 일을 리스트에 추가
let taskList = new Array();
let filteredList = new Array();
let taskType = "Personal";
let menuTab;
let isFiltered = false;

let inputArea = document.querySelector("#input-area");
let inputButton = document.querySelector("#input-button");
let personalButton = document.querySelector("#personal-type");
let IndividualButton = document.querySelector("#individual-type");
let workButton = document.querySelector("#work-type");
let taskBox = document.querySelector(".task-box");
let deleteButton = document.querySelector("#delete-button");
let allMenu = document.querySelector(".menu-title:first-child");
let personalMenu = document.querySelector("#menu-1-1");
let individualMenu = document.querySelector("#menu-1-2");
let workMenu = document.querySelector("#menu-1-3");
let allTab = document.querySelector("#all-tab");
let doneTab = document.querySelector("#done-tab");
let notDoneTab = document.querySelector("#not-done-tab");
let scheduledTasks = document.querySelector("#Scheduled-tasks");
let settings = document.querySelector("#settings");

// 알람창
scheduledTasks.addEventListener("click", function() {
  alert("준비중입니다.");
});
settings.addEventListener("click", function() {
  alert("준비중입니다.");
});

// 입력 이벤트 리스너
inputButton.addEventListener("click", AddTask);
inputArea.addEventListener("keyup", function(e) {
  if (e.key == "Enter") {
    AddTask();
  }
})

// 필터 이벤트 리스너
allMenu.addEventListener("click", Filter);
personalMenu.addEventListener("click", Filter);
individualMenu.addEventListener("click", Filter);
workMenu.addEventListener("click", Filter);
allTab.addEventListener("click", Filter);
doneTab.addEventListener("click", Filter);
notDoneTab.addEventListener("click", Filter);

//할 일 입력 받을 때 일의 종류 입력
personalButton.addEventListener("click", function() {
  taskType = "Personal";
  console.log(taskType);
});
IndividualButton.addEventListener("click", function() {
  taskType = "Individual";
  console.log(taskType);
});
workButton.addEventListener("click", function() {
  taskType = "Work";
  console.log(taskType);
});

// 할 일 리스트에 할 일 추가
function AddTask() {
  let taskObject = {
    taskId: GenerateID(),
    taskContent: inputArea.value,
    taskType: taskType,
    isComplete: false
  };

  taskList.push(taskObject);
  inputArea.value = "";

  // 필터링 리스트 최신화
  if (menuTab == taskType) {
    filteredList.push(taskObject);
  }

  RenderUI();

  // 애니메이션 오류 수정
  if (menuTab == taskObject.taskType || !menuTab) {
    document.querySelector("#tasks:last-child").style.animation = 'slideIn 0.3s ease-in-out';
  }
  
  // 테스트코드
  console.log(taskList);
}

// uuid 생성
function GenerateID() {
  return '_' + Math.random().toString(36).substring(2, 16);
}

// 렌더링
function RenderUI() {
  resultHTML = "";

  if (!isFiltered) {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].taskType == "Personal") {
        if (taskList[i].isComplete == false) {
          resultHTML += 
            `<div id="tasks" class="${taskList[i].taskId}">
              <div id="task-group">
                <i class="fa-solid fa-circle fa-xs" style="color: #74C0FC;"></i>
              </div>
              <div id="task-content">${taskList[i].taskContent}</div>
              <div class="button-combined">
                <button id="done-button" onclick="ToggleComplete('${taskList[i].taskId}')"><i class="fa-regular fa-circle-check fa-xl" style="color: #c6c6c6;"></i></button>
                <button id="delete-button" onclick="DeleteTask('${taskList[i].taskId}')"><i class="fa-regular fa-trash-can fa-xl" style="color: #cbabf7;"></i></button>
              </div>
            </div>`;
        } else {
          resultHTML += 
            `<div id="tasks" class="${taskList[i].taskId}" style="opacity: 0.5;">
              <div id="task-group">
                <i class="fa-solid fa-circle fa-xs" style="color: #74C0FC;"></i>
              </div>
              <div id="task-content">${taskList[i].taskContent}</div>
              <div class="button-combined">
                <button id="done-button" onclick="ToggleComplete('${taskList[i].taskId}')"><i class="fa-regular fa-circle-check fa-xl" style="color: #cbabf7;"></i></button>
                <button id="delete-button" onclick="DeleteTask('${taskList[i].taskId}')"><i class="fa-regular fa-trash-can fa-xl" style="color: #cbabf7;"></i></button>
              </div>
            </div>`;
        }
      } else if (taskList[i].taskType == "Individual") {
        if (taskList[i].isComplete == false) {
          resultHTML +=
            `<div id="tasks" class="${taskList[i].taskId}">
              <div id="task-group">
                <i class="fa-solid fa-circle fa-xs" style="color: #63E6BE;"></i>
              </div>
              <div id="task-content">${taskList[i].taskContent}</div>
              <div class="button-combined">
                <button id="done-button" onclick="ToggleComplete('${taskList[i].taskId}')"><i class="fa-regular fa-circle-check fa-xl" style="color: #c6c6c6;"></i></button>
                <button id="delete-button" onclick="DeleteTask('${taskList[i].taskId}')"><i class="fa-regular fa-trash-can fa-xl" style="color: #cbabf7;"></i></button>
              </div>
            </div>`;
        } else {
          resultHTML +=
            `<div id="tasks" class="${taskList[i].taskId}" style="opacity: 0.5;">
              <div id="task-group">
                <i class="fa-solid fa-circle fa-xs" style="color: #63E6BE;"></i>
              </div>
              <div id="task-content">${taskList[i].taskContent}</div>
              <div class="button-combined">
                <button id="done-button" onclick="ToggleComplete('${taskList[i].taskId}')"><i class="fa-regular fa-circle-check fa-xl" style="color: #cbabf7;"></i></button>
                <button id="delete-button" onclick="DeleteTask('${taskList[i].taskId}')"><i class="fa-regular fa-trash-can fa-xl" style="color: #cbabf7;"></i></button>
              </div>
            </div>`;
        }
      } else if (taskList[i].taskType == "Work") {
        if (taskList[i].isComplete == false) {
          resultHTML +=
            `<div id="tasks" class="${taskList[i].taskId}">
              <div id="task-group">
                <i class="fa-solid fa-circle fa-xs" style="color: #FFD43B;"></i>
              </div>
              <div id="task-content">${taskList[i].taskContent}</div>
              <div class="button-combined">
                <button id="done-button" onclick="ToggleComplete('${taskList[i].taskId}')"><i class="fa-regular fa-circle-check fa-xl" style="color: #c6c6c6;"></i></button>
                <button id="delete-button" onclick="DeleteTask('${taskList[i].taskId}')"><i class="fa-regular fa-trash-can fa-xl" style="color: #cbabf7;"></i></button>
              </div>
            </div>`;
        } else {
          resultHTML +=
            `<div id="tasks" class="${taskList[i].taskId}" style="opacity: 0.5;">
              <div id="task-group">
                <i class="fa-solid fa-circle fa-xs" style="color: #FFD43B;"></i>
              </div>
              <div id="task-content">${taskList[i].taskContent}</div>
              <div class="button-combined">
                <button id="done-button" onclick="ToggleComplete('${taskList[i].taskId}')"><i class="fa-regular fa-circle-check fa-xl" style="color: #cbabf7;"></i></button>
                <button id="delete-button" onclick="DeleteTask('${taskList[i].taskId}')"><i class="fa-regular fa-trash-can fa-xl" style="color: #cbabf7;"></i></button>
              </div>
            </div>`;
        }
      }
    }

    taskBox.innerHTML = resultHTML;
  } else { // 필터가 되었을 때
    if (menuTab == "Personal") {
      for (let i = 0; i < filteredList.length; i++) {
        if (filteredList[i].isComplete == false) {
          resultHTML +=
            `<div id="tasks" class="${filteredList[i].taskId}">
              <div id="task-group">
                <i class="fa-solid fa-circle fa-xs" style="color: #74C0FC;"></i>
              </div>
              <div id="task-content">${filteredList[i].taskContent}</div>
              <div class="button-combined">
                <button id="done-button" onclick="ToggleComplete('${filteredList[i].taskId}')"><i class="fa-regular fa-circle-check fa-xl" style="color: #c6c6c6;"></i></button>
                <button id="delete-button" onclick="DeleteTask('${filteredList[i].taskId}')"><i class="fa-regular fa-trash-can fa-xl" style="color: #cbabf7;"></i></button>
              </div>
            </div>`;
        } else {
          resultHTML +=
            `<div id="tasks" class="${filteredList[i].taskId}" style="opacity: 0.5;">
              <div id="task-group">
                <i class="fa-solid fa-circle fa-xs" style="color: #74C0FC;"></i>
              </div>
              <div id="task-content">${filteredList[i].taskContent}</div>
              <div class="button-combined">
                <button id="done-button" onclick="ToggleComplete('${filteredList[i].taskId}')"><i class="fa-regular fa-circle-check fa-xl" style="color: #cbabf7;"></i></button>
                <button id="delete-button" onclick="DeleteTask('${filteredList[i].taskId}')"><i class="fa-regular fa-trash-can fa-xl" style="color: #cbabf7;"></i></button>
              </div>
            </div>`;
        }
      }  
    } else if (menuTab == "Individual") {
      for (let i = 0; i < filteredList.length; i++) {
        if (filteredList[i].isComplete == false) {
          resultHTML +=
            `<div id="tasks" class="${filteredList[i].taskId}">
              <div id="task-group">
                <i class="fa-solid fa-circle fa-xs" style="color: #63E6BE;"></i>
              </div>
              <div id="task-content">${filteredList[i].taskContent}</div>
              <div class="button-combined">
                <button id="done-button" onclick="ToggleComplete('${filteredList[i].taskId}')"><i class="fa-regular fa-circle-check fa-xl" style="color: #c6c6c6;"></i></button>
                <button id="delete-button" onclick="DeleteTask('${filteredList[i].taskId}')"><i class="fa-regular fa-trash-can fa-xl" style="color: #cbabf7;"></i></button>
              </div>
            </div>`;
        } else {
          resultHTML +=
            `<div id="tasks" class="${filteredList[i].taskId}" style="opacity: 0.5;">
              <div id="task-group">
                <i class="fa-solid fa-circle fa-xs" style="color: #63E6BE;"></i>
              </div>
              <div id="task-content">${filteredList[i].taskContent}</div>
              <div class="button-combined">
                <button id="done-button" onclick="ToggleComplete('${filteredList[i].taskId}')"><i class="fa-regular fa-circle-check fa-xl" style="color: #cbabf7;"></i></button>
                <button id="delete-button" onclick="DeleteTask('${filteredList[i].taskId}')"><i class="fa-regular fa-trash-can fa-xl" style="color: #cbabf7;"></i></button>
              </div>
            </div>`;
        }
      }
    } else if (menuTab == "Work") {
      for (let i = 0; i < filteredList.length; i++) {
        if (filteredList[i].isComplete == false) {
          resultHTML +=
            `<div id="tasks" class="${filteredList[i].taskId}">
              <div id="task-group">
                <i class="fa-solid fa-circle fa-xs" style="color: #FFD43B;"></i>
              </div>
              <div id="task-content">${filteredList[i].taskContent}</div>
              <div class="button-combined">
                <button id="done-button" onclick="ToggleComplete('${filteredList[i].taskId}')"><i class="fa-regular fa-circle-check fa-xl" style="color: #c6c6c6;"></i></button>
                <button id="delete-button" onclick="DeleteTask('${filteredList[i].taskId}')"><i class="fa-regular fa-trash-can fa-xl" style="color: #cbabf7;"></i></button>
              </div>
            </div>`;
        } else {
          resultHTML +=
            `<div id="tasks" class="${filteredList[i].taskId}" style="opacity: 0.5;">
              <div id="task-group">
                <i class="fa-solid fa-circle fa-xs" style="color: #FFD43B;"></i>
              </div>
              <div id="task-content">${filteredList[i].taskContent}</div>
              <div class="button-combined">
                <button id="done-button" onclick="ToggleComplete('${filteredList[i].taskId}')"><i class="fa-regular fa-circle-check fa-xl" style="color: #cbabf7;"></i></button>
                <button id="delete-button" onclick="DeleteTask('${filteredList[i].taskId}')"><i class="fa-regular fa-trash-can fa-xl" style="color: #cbabf7;"></i></button>
              </div>
            </div>`;
        }
      }
    }

    taskBox.innerHTML = resultHTML;
  }
}

// 완료 여부 토글 및 UI 렌더링
function ToggleComplete(id) {
  // taskList isComplete true 변경
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].taskId == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
    }
  }
  
  RenderUI();
  // 렌더링 함수에서 조정
}

// 할 일 리스트에서 할 일 삭제 후 렌더링
function DeleteTask(id) {
  let itemIndex;

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].taskId == id) {
      itemIndex = i;
      break;
    }
  }

  let item = document.querySelector(`#tasks.${id}`);
  if (item) {
    item.addEventListener('animationend', function() {
      taskList.splice(itemIndex, 1);
      // 필터링리스트 최신화
      for (let i = 0; i < filteredList.length; i++) {
        if (filteredList[i].taskId == id) {
          filteredList.splice(i, 1);
        }
      }
      RenderUI();
    });
    item.style.animation = 'slideOut 0.3s ease-in-out';
  }
}

// 할 일 필터링
function Filter() {
  filteredList = [];

  if (this.id == "menu-1-1") { // Personal 클릭
    isFiltered = true;
    menuTab = "Personal";

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].taskType == "Personal") {
        filteredList.push(taskList[i]);
      }
    }

    RenderUI();
  } else if (this.id == "menu-1-2") { // Individual 클릭
    isFiltered = true;
    menuTab = "Individual";

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].taskType == "Individual") {
        filteredList.push(taskList[i]);
      }
    }
    
    RenderUI();
  } else if (this.id == "menu-1-3") { // Work 클릭
    isFiltered = true;
    menuTab = "Work";

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].taskType == "Work") {
        filteredList.push(taskList[i]);
      }
    }

    RenderUI();
  } else if (this.id == "menu-1-0") {
    isFiltered = false;
    menuTab = undefined;

    RenderUI();
  } else if (this.id == "all-tab") {
    console.log("all-tab");
  } else if (this.id == "done-tab") {
    console.log("done-tab");
  } else if (this.id == "not-done-tab") {
    console.log("not-done-tab");
  }
}