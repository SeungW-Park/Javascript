// "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet'를 만드시오.
function greet() {
  console.log("안녕 내 이름은 제시카야");
}

greet();

// 이름을 매개변수로 받아 다양한 이름을 프린트할 수 있도록 수정하시오.
function greet(name) {
  console.log(`안녕 내 이름은 ${name}(이)야!`);
}

greet("승원");

// 매개변수로 전달받은 이름을 반환하도록 함수를 수정하시오.
function greet(name) {
  console.log(`안녕 내 이름은 ${name}(이)야!`);
  return name;
}

let newName = greet("승원");
console.log(newName);

// meetAt 함수를 만들어주세요.
function meetAt(year, month, day) {
  if (year && !month && !day) {
    return `${year}년`;
  } else if (year && month && !day) {
    return `${year}년 ${month}월`;
  } else if (year && month && day) {
    return `${year}/${month}/${day}`;
  }
}

let newMeetAt = meetAt(2024, 5, 7);
console.log(newMeetAt);

// findSmallestElement
let numbers = [100, 200, 3, -2, 2, 1];

function findSmallestElement(numArr) {
  if (numArr.length === 0) {
    return 0;
  } else if (numArr.length > 0) {
    let minValue;
    minValue = numArr[0];
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] < minValue) {
        minValue = numArr[i];
      }
    }
    return minValue;
  }
}

let minNumberInArr = findSmallestElement(numbers);
console.log(minNumberInArr);

// 돈을 매개변수로 받으면 몇 개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오.
let money = 12300;

function CalcMoney(money) {
  let num50000 = Math.floor(money / 50000);
  let restMoney = money - num50000 * 50000;
  let num10000 = Math.floor(restMoney / 10000);
  restMoney -= num10000 * 10000;
  let num5000 = Math.floor(restMoney / 5000);
  restMoney -= num5000 * 5000;
  let num1000 = Math.floor(restMoney / 1000);
  restMoney -= num1000 * 1000;
  let num500 = Math.floor(restMoney / 500);
  restMoney -= num500 * 500;
  let num100 = Math.floor(restMoney / 100);
  restMoney -= num100 * 100;

  console.log(`50000 X ${num50000}`);
  console.log(`10000 X ${num10000}`);
  console.log(`5000 X ${num5000}`);
  console.log(`1000 X ${num1000}`);
  console.log(`500 X ${num500}`);
  console.log(`100 X ${num100}`);
  console.log(`잔액은 ${restMoney}원입니다.`);
}

CalcMoney(money);

//----------------------------------------------------
function CalcMoney(money) {
  let unit = [50000, 10000, 5000, 1000, 500, 100];
  for (let i = 0; i < unit.length; i++) {
    let num = Math.floor(money / unit[i]);
    console.log(unit[i] + " X " + num);
    money -= unit[i] * num;
  }
}

CalcMoney(12300)