// 반복문 문제 1
let sum = 0

for (let i = 1; i < 101; i++) {
  sum += i
}

console.log("합계는 " + sum + "입니다.")

// 반복문 문제 2
for (let i = 1; i < 101; i++) {
  if (i % 2 == 1) {
    console.log(i)
  }
}

for (let i = 1; i < 101; i += 2) {
  console.log(i)
}

// 반복문 문제 3
for (let i = 1; i < 51; i++) {
  let numToString = String(i);
  let numberOf369 = 0; // 한 숫자에 3 또는 6 또는 9가 포함되어 있는 횟수

  if (numToString.includes("3")) {
    numberOf369 += 1;
  }

  if (numToString.includes("6")) {
    numberOf369 += 1;
  }

  if (numToString.includes("9")) {
    numberOf369 += 1;
  }

  if (
    numToString.includes("3") ||
    numToString.includes("6") ||
    numToString.includes("9")
  ) {
    console.log("짝".repeat(numberOf369));
  } else {
    console.log(i);
  }
}
//--------------------------------------------------------
for (let i = 1; i < 51; i++) {
  let numToString = String(i)
  let result = ""

  for (let j = 0; j < numToString.length; j++) {
    if (numToString[j] === "3" || numToString[j] === "6" || numToString[j] === "9") {
      result += "짝"
    }
  }

  console.log(result.length > 0 ? result : i)
}


// 반복문 문제 4
let maxNum = 50;

for (let i = 1; i < maxNum + 1; i++) {
  // 10보다 큰 경우
  if (i >= 10 && (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0)) {
    console.log(`${i} : false`);
  } else if (i >= 10 && (i % 2 !== 0 || i % 3 !== 0 || i % 5 !== 0 || i % 7 !== 0)) {
    console.log(`${i} : true`);
  }

  // 10보다 작은 경우
  if (i < 10 && (i === 2 || i === 3 || i === 5 || i === 7)) {
    console.log(`${i} : true`);
  } else if (i < 10 && (i !== 2 || i !== 3 || i !== 5 || i !== 7)) {
    console.log(`${i} : false`);
  }
}

// -----------------------------------------------------------
let num = 7
let isPrime = true

if (num === 1) {
  isPrime = false
}
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false
  }
}

console.log(isPrime)

let fruit = ["apple", "mango", "strawberry", "pineapple"]

for (let i = 0; i < fruit.length; i++) {
  console.log("누나가 좋아하는 과일은", fruit[i])
}

for (let item of fruit) {
  console.log("누나가 좋아하는 과일은", item)
}

let sentence = "누나는 코딩을 너무 좋아해"

for (let char of sentence) {
  console.log(char)
}