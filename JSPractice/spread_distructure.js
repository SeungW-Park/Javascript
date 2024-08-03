// const arr = ['apple', 'banana', 'orange'];

// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);

// console.log(Object.getOwnPropertyDescriptor(arr));

// const arr = [];

// console.time('Array Performance Test');

// for (let i = 0; i < 10000000; i++) {
//   arr[i] = i;
// }

// console.timeEnd('Array Performance Test');

// const Queue = (function () {
//   function Queue(array = []) {
//     if (!Array.isArray(array)) {
//       throw new TypeError(`${array} is not an array`);
//     }
//     this.array = array;
//   }

//   Queue.prototype = {
//     constructor: Queue,
//     enqueu(value) {
//       return this.array.push(value);
//     },
//     dequeue() {
//       return this.array.shift();
//     },
//     entries() {
//       return [...this.array];
//     }
//   };
//   return Queue;
// }());

// const queue = new Queue([1, 2]);
// console.log(queue.entries());

// queue.enqueu(3);
// console.log(queue.entries());

// queue.dequeue();
// console.log(queue.entries());

// const Stack = (function () {
//   function Stack(arr) {
//     if (!Array.isArray(arr)) {
//       throw new TypeError(`${stack} is not an array`);
//     }
//     this.arr = arr;
//   }

//   Stack.prototype = {
//     constructor: Stack,
//     push(value) {
//       return this.arr.push(value);
//     },
//     pop() {
//       return this.arr.pop();
//     },
//     entries() {
//       return [...this.arr];
//     }
//   };
//   return Stack;
// }());

// const stack = new Stack([]);

// stack.push(1);
// console.log(stack.entries());
// stack.push(2);
// console.log(stack.entries());
// stack.pop();
// console.log(stack.entries());

// const target = 'Is this all there is?';
// const regExp = / /g;

// console.log(regExp.exec(target));
// console.log(regExp.test(target));
// console.log(target.match(regExp));


// const target = 'A AA B BB Aa Bb AAA';
// const regExp = /[\D]+/ig;

// console.log(target.match(regExp));

// const target = 'color colour';
// const regExp = /colou?r/g;

// console.log(target.match(regExp));

// const target = 'Aa Bb 12,345 _$%&';
// let regExp = /[\w,]+/g;

// console.log(target.match(regExp));

// const target = 'https://poiemaweb.com';
// const regExp = /^https/;

// console.log(target.test(regExp));

// const url = 'http://example.com';

// console.log(/^https?:\/\//.test(url));

// const letter = 'abc&#*123%#1';

// console.log(letter.replace(/[^A-Za-z0-9]/ig, ''));

// const str = '   Hello   ';

// // for (let i = 0; i < str.length; i++) {
// //   console.log(str.charPointAt(i));
// // }

// console.log(str.trimEnd());

// const obj = {
//   [Symbol.for('mySymbol')]: 1
// };

// console.log(obj[Symbol.for('mySymbol')]);

// const array = [1, 2, 3];

// const iterator = array[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// const iterable = [1, 2, 3];

// const iterator = iterable[Symbol.iterator]();

// while(true) {
//   const res = iterator.next();

//   if (res.done) break;

//   const item = res.value;
//   console.log(item);

// const fibonacci = {
//   [Symbol.iterator]() {
//     let [pre, cur] = [0, 1];
//     const max = 20;

//     return {
//       next() {
//         [pre, cur] = [cur, pre + cur];
//         return { value: cur, done: cur >= max };
//       }
//     };
//   }
// };

// const fiboArr = [ ...fibonacci ];
// // console.log(fiboArr);

// const [first, second, ...rest] = fibonacci;
// console.log(first, second, rest);

// const fibonacci = function (max) {
//   let [pre, cur] = [0, 1];

//   return {
//     [Symbol.iterator]() {
//       return {
//         next() {
//           [pre, cur] = [cur, pre + cur];
//           return { value: cur, done: cur >= max };
//         }
//       };
//     }
//   };
// };

// for (const num of fibonacci(30)) {
//   console.log(num);
// }

// const arr = [1, 2, 10, 15, 3, 7];

// console.log(Math.max(...arr));

// console.log(Math.max(1, 2, 10, 15, 3, 7));

// function sum() {
//   var args = Array.prototype.slice.call(arguments);

//   return args.reduce(function (pre, cur) {
//     return pre + cur;
//   }, 0);
// }

// console.log(sum(1, 10, 15));

// const obj = { x: 1, y: 2 };
// const copy = { ...obj };

// console.log(copy);

// const merged = { x: 1, y: 2, ...{ a: 3, b: 4} };
// console.log(merged);

// const changed = Object.assign({}, { x: 1, y: 2 }, { y: 100 });
// console.log(changed);

// const arr = [1, 2, 3];

// const [one, two, three] = arr;

// console.log(`one : ${one}, two : ${two}, three: ${three}`);

// const [a, b, c = 3] = [1, 2];
// console.log(a, b, c);

// const [e, f = 10, g = 3] = [1, 2];
// console.log(e, f, g);

function parseURL(url = '') {
    const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  
    if (!parsedURL) return {};
  
    const [, protocol, host, path] = parsedURL;
    return { protocol, host, path };
  }
  
  const parsedURL = parseURL('https://replit.com/@wonvely941/DD-Functions#script.js');
  
  console.log(parsedURL);