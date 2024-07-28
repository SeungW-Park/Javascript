let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffet",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

// map 문제
// let upperCase = names.map((item) => item.toUpperCase());
// console.log(upperCase);

// let onlyNames = names.map((item) => item.split(" ")[0]);

// console.log(onlyNames);

// let firstInitial = names.map((item) => {
//   let splitName = item.split(" ");
//   let Initial = splitName.map(si => si[0]).join("");
//   return Initial;
// });

// console.log(firstInitial);

// filter 문제
// let containA = names.filter((item) => item.includes("a"));
// console.log(containA);

// let serialChar = names.filter((item) => {
//   let nameToUpper = item.toUpperCase();
//   let charList = nameToUpper.split("");
//   return charList.some((char, index) => char == charList[index + 1]);
// });

// console.log(serialChar);

// some 문제
// let isOver20 = names.some((item) => {
//   let splitList = item.split("");
//   return splitList.length >= 20;
// });

// console.log(isOver20);

// // 이름이 20자 이상인 사람 출력
// let WhoisOver20 = names.filter(item => {
//   let splitList = item.split("");
//   return splitList.length >= 20;
// });

// console.log(WhoisOver20);

// let containP = names.filter(item => {
//   let splitList = item.slice(1, -1);
//   // return splitList.includes("p") || splitList.includes("P");
//   return splitList.includes("p") || splitList.includes("P");
// });

// console.log(containP);

// let containP = names.some((item) => {
//   let splitList = item.slice(1, -1);
//   // return splitList.includes("p") || splitList.includes("P");
//   return splitList.includes("p") || splitList.includes("P");
// });

// console.log(containP);

// every 문제
// let isEveryOver20 = names.every(item => {
//   let splitList = item.split("");
//   return splitList.length >= 20;
// });

// console.log(isEveryOver20);

// let isEveryContainA = names.every(item => {
//   return item.includes("a");
// });

// console.log(isEveryContainA);

// find 문제
// let nameOver20 = names.find(item => {
//   let itemSplit = item.split("");
//   return itemSplit.length >= 20;
// });

// console.log(nameOver20);

// let hasMiddleName = names.find(item => {
//   let splitName = item.split(" ");
//   return splitName.length >= 3;
// });

// console.log(hasMiddleName);

// findIndex 문제
// let nameOver20 = names.findIndex(item => {
//   let splitName = item.split("");
//   return splitName.length >= 20;
// });

// console.log(nameOver20);

let hasMiddleName = names.findIndex(item => {
  let splitName = item.split(" ");
  return splitName.length >= 3;
});

console.log(hasMiddleName);