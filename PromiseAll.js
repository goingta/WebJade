// let p1 = new Promise((resolve, reject) => {
//   resolve("p1 success");
// });

// let p2 = new Promise((resolve, reject) => {
//   resolve("p2 success");
// });

// let p3 = Promise.reject("失败");

// Promise.all([p1, p2])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log("error: ", error);
//   });

// let wake = time => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${time / 1000}秒后醒来`);
//     }, time);
//   });
// };

// let p1 = wake(3000);
// let p2 = wake(2000);

// Promise.all([p1, p2])
//   .then(result => {
//     console.log(result); // [ '3秒后醒来', '2秒后醒来' ]
//   })
//   .catch(error => {
//     console.log(error);
//   });

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("failed");
  }, 500);
});

Promise.race([p1, p2])
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error); // 打开的是 'failed'
  });
