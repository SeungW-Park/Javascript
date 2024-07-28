// let num = 3;
// let kind;

// // if (num % 2) {
// //   kind = '홀수';
// // } else {
// //   kind = '짝수';
// // }

// kind = num ? num % 2 ? '홀수' : '짝수' : '영';

// console.log(`${num}은(는) ${kind}입니다.`);

// let month = 10;
// let monthName;

// switch (month) {
//   case 1:
//     monthName = "1월";
//     break;
//   case 2:
//     monthName = "2월";
//     break;
//   case 3:
//     monthName = "3월";
//     break;
//   case 4:
//     monthName = "4월";
//     break;
//   case 5:
//     monthName = "5월";
//     break;
//   case 6:
//     monthName = "6월";
//     break;
//   case 7:
//     monthName = "7월";
//     break;
//   case 8:
//     monthName = "8월";
//     break;
//   case 9:
//     monthName = "9월";
//     break;
//   case 10:
//     monthName = "10월";
//     break;
//   case 11:
//     monthName = "11월";
//     break;
//   case 12:
//     monthName = "12월";
//     break;
//   default:
//     monthName = '잘못된 숫자를 입력하였습니다.';
// }

// console.log(monthName);

// let sum = 0;


// for (let i = 1; i < 1250; i++) {
//   sum += i; // sum = sum + i;
// }

// console.log('sum : ', sum);

// let diceNum = 10;

// for (let i = 1; i <= diceNum / 2 + 1; i++) {
//   for (let j = 1; j <= diceNum / 2 + 1; j++) {
//     if (i + j === 10) console.log(`${i} + ${j} = ${i + j}`);
//   }
// }

// let count = 0;

// while (true) {
//   console.log(count);
//   count++;

//   if (count === 3) break;
// }

// 레이블 문 : 식별자가 붇은 문
// foo : {
//   console.log(1);
//   break foo;
//   console.log(2);
// }

// console.log('Done!');

// outer : for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (i + j === 3) {
//       console.log(`${i} + ${j} = ${i + j}`);
//       break outer;
//     }
//   }
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (i + j === 3) {
//       console.log(`${i} + ${j} = ${i + j}`);
//       break;
//     }
//   }
// }

// let string = 'Hello World!';
// // let searchValue = 'l';
// // let count = 0;

// // for (let i = 0; i < string.length; i++) {
// //   if (string[i] === 'l') {
// //     count++;
// //     // continue;
// //   }
// // }

// // console.log(count);

// const regexp = new RegExp(search, 'l');
// console.log(string.match(regexp).length);

// let x = 10;

// console.log(typeof x, x);

// let strX = x.toString();
// console.log(typeof strX, strX);

// let y = 10;

// console.log(typeof y, y);

// let strY = y + '';
// console.log(typeof strY, strY);

// console.log('' && 'Dogs');

// let done = true;
// let message = '';

// if (!done) message = '완료';

// message = done || '완료';
// console.log(message);

// function getStringLength(str) {
//   let strLength = str?.length;
//   return strLength;
// }

// console.log(getStringLength());
// console.log(getStringLength('2555'));

// let foo = 0 || 'default';
// console.log(foo);

// let person = {
//   name: 'Seung Won',
//   sayHello: function() {
//     console.log(`say Hello to ${this.name}`);
//   }
// };

// console.log(typeof person);
// console.log(person);

// let circle = {
//   radius: 5,

//   getDiameter: function() {
//     return 2 * this.radius;
//   }
// };

// console.log(circle.getDiameter());

// let name = 'Park';

// let person = {
//   name: 'Lee',
//   Park: 'SeungWon'
// };

// console.log(person['name']);

// let prefix = 'prop';
// let i = 0;

// let obj = {
//   [`${prefix}-${i++}`]: i,
//   [`${prefix}-${i++}`]: i,
//   [`${prefix}-${i++}`]: i
// };

// console.log(obj);

// let x = null;
// let copy = x;

// x = false;

// console.log(x, copy);

// let person = {
//   name: 'Park Seung Won',
//   age: 31
// }

// console.log(person);

// person.age = 32;

// console.log(person)

// person.address = '전남 목포시';

// console.log(person);

// delete person.age;

// console.log(person);

// const o = { x: { y: 1 }};

// const c1 = { ...o };
// const c2 = o;

// c2.x = { y: 2 };
// console.log(o);
// console.log(c1);
// console.log(c2);

// let person = {
//   name: 'Lee'
// };

// let copy = person;

// console.log(copy === person);

// copy.name = 'Kim';
// person.address = 'Seoul';

// console.log(person);
// console.log(copy);

// function add(x, y) {
//   return x - y;
// }

// const f = function add(x, y) {
//   return x + y;
// }

// console.log(typeof f);
// console.log(typeof add);


const sub = function (a, b) {
  return a - b;
}
console.log(typeof sub);