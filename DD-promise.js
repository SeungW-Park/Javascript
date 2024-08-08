// console.log('load');

// const promiseGet = url => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();

//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(JSON.parse(xhr.response));
//       } else {
//         reject(new Error(xhr.status));
//       }
//     };
//   });
// };

// console.log(promiseGet('https://jsonplaceholder.typicode.com/posts/1'));

// const fulfilled = new Promise(resolve => resolve(1));
// console.log(fulfilled);

// const rejected = new Promise((_, rejected) => rejected(new Error('error occurred')));
// console.log(rejected);

// new Promise((resolve) => resolve('fulfilled'))
//   .then(v => console.log(v), e => console.error(e));


// new Promise((resolve, reject) => reject('rejected'))
//   .then(v => console.log(v), e => console.error(e));

// const promiseGet = (url) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();

//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(JSON.parse(xhr.response));
//       } else {
//         reject(new Error(xhr.statusText));
//       }
//     };
//   });
// };

// promiseGet('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => console.log(res))
//   .catch(err => console.err(err))
//   .finally(() => console.log('Bye!'));

// const wrongUrl = 'https://jsonplaceholder.typicode.com/XXX/1';

// promiseGet(wrongUrl)
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
//   // .then(undefined, err => console.log(err));

// const url = 'https://jsonplaceholder.typicode.com';

// promiseGet(`${url}/posts/1`)
//   .then(({ userId }) => {
//     promiseGet(`${url}/users/${userId}`);
//     })
//   .then(userInfo => console.log(userInfo))
//   .catch(err => console.error(err));

// const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
// const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
// const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

// // const res = [];
// // requestData1()
// //   .then(data => {
// //     res.push(data);
// //     return requestData2();
// //   })
// //   .then(data => {
// //     res.push(data);
// //     return requestData3();
// //   })
// //   .then(data => {
// //     res.push(data);
// //     console.log(res);
// //   })
// //   .catch(console.error);

// Promise.all([requestData1(), requestData2(), requestData3()])
//   .then(console.log)
//   .catch(console.error);

// const promiseGet = url => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();

//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(JSON.parse(xhr.response));
//       } else {
//         reject(new Error(xhr.status));
//       }
//     };
//   });
// };

// const githubIds = ['jeresig', 'ahejlsberg', 'ungmo2', 'SeungW-Park'];

// Promise.all(githubIds.map(id => promiseGet(`https://api.github.com/users/${id}`)))
//   .then(users => users.map(user => user.name))
//   .then(console.log)
//   .catch(console.error);

// setTimeout(() => console.log(1), 0);

// Promise.resolve()
//   .then(() => console.log(2))
//   .then(() => console.log(3));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

const url = new URL('https://jsonplaceholder.typicode.com/todos/1');

const request = {
  get(url) {
    return fetch(url);
  },

  post(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  },

  patch(url, payload) {
    return fetch(url, {
      method: 'PATCH',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  },

  delete(url) {
    return fetch(url, {
      method: 'DELETE'
    });
  }
};

// request.get(url)
//   .then(response => {
//     if (!response.ok) throw new Error(response.statusText);
//     return response.json();
//   })
//   .then(todos => console.log(todos))
//   .catch(err => console.error(err));


// request.post(url, {
//   userId: 1,
//   title: 'Javascript',
//   complete: false
// })
// .then(response => {
//   if (!response.ok) throw new Error(response.statusText);
//   return response.json();
// })
// .then(todos => console.log(todos))
// .catch(err => console.error(err));

// request.patch(url, {
//   completed: true
// })
// .then(response => {
//   if (!response.ok) throw new Error(response.statusText);
//   return response.json();
// })
// .then(todos => console.log(todos))
// .catch(err => console.error(err));

request.delete(url)
.then(response => {
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
})
.then(todos => console.log(todos))
.catch(err => console.error(err));