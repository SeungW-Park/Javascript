// let age = 21
// let license = false

// if (age > 20) {
//   console.log("운전이 가능합니다.")
// } else if (age >= 18) {
//   console.log("오토바이 운전이 가능합니다.")
// } else {
//   console.log("운전 불가능합니다.")
// }

// if (18 <= age && age < 20) {
//   console.log("오토바이 운전만 가능합니다.")
// } else if (age > 20) {
//   console.log("운전이 가능합니다.")
// } else {
//   console.log("운전 불가능합니다.")
// }

// if ( age > 20) {
//   if (license === true) {
//     console.log("운전이 가능합니다.")
//   } else {
//     console.log("면허를 따세요")
//   }
// } else {
//   console.log("운전 불가능합니다.")
// }

// 문제 1
// let number = -2

// if (number > 0) {
//   console.log("양수입니다.")
// } else if (number === 0) {
//   console.log("0입니다.")
// } else {
//   console.log("음수입니다.")

// 문제 2
// let score = 78
// let grade

// if (score >= 90) {
//   grade = "A"
// } else if (score >= 80 && score < 90) {
//   grade = "B"
// } else if (score >= 70 && score < 80) {
//   grade = "C"
// } else if (score >= 60 && score < 70) {
//   grade = "D"
// } else {
//   grade = "F"
// }

// console.log(grade)

// 문제 3
let skills = ["HTML", "CSS", "Javascript", "React"];

if (skills.includes("Javascript") && skills.includes("React")) {
  console.log("합격!");
} else if (skills.includes("JavaScript") || skills.includes("React")) {
  console.log("예비");
} else {
  console.log("탈락");
}

let menu = 2

// if (menu == 1) {
//   console.log("물건 사기")
// } else if (menu == 2) {
//   console.log("잔고확인")
// } else if (menu == 3) {
//   console.log("히스토리확인")
// } else {
//   console.log("홈으로 돌아가기")
// }

switch (menu) {
  case 1:
    console.log("물건 사기")
    break;
  case 2:
    console.log("잔고확인")
    break;
  case 3:
    console.log("히스토리확인")
    break;
  default:
    console.log("홈으로 돌아가기")
}


let answer = menu <= 3 ? "범위안에 숫자입니다." : "범위 밖의 숫자입니다."
console.log(answer)