// 1

// function get(year, mouns, day) {
//   let date =new Date(year, mouns, day);
//   if (
//     date.getDay() == 0 ||
//     date.getDay() == 1 ||
//     date.getDay() == 2 ||
//     date.getDay() == 3 ||
//     date.getDay() == 4
//   ) {
//     return "School day";
//   } else return "Holiday";
// }
// console.log(get(2022, 2, 10));
// console.log(get(2000, 10, 25));
// console.log(get(1930, 4, 3));

// 2

// function get(a) {
//   let a1 = Object.values(a);
//   return Math.min(...a1);
// }
// console.log(get({ cyan: 700, magenta: 700, yellow: 0 }));
// console.log(get({ cyan: 432, magenta: 543, yellow: 777 }));
// console.log(get({ cyan: 23, magenta: 12, yellow: 10 }));

// 3

// function get(a) {
//     let arr = 1
//     let v = a.split(',')
//     let d = v.map((e,i)=>{
//        arr*=e
//     })
//     return arr
// }
// console.log(get("2,3"));
// console.log(get("1, 2, 3, 4"));
// console.log(get("54, 75, 453, 0"));

// 4

// function get(year) {
//   let a = 0;
//   for (let i = 0; i < 11; i++) {
//     let date =new Date(year, i, 13);
//     if (date.getDay() == 5) a++;
//   }
//   return a;
// }

// console.log(get(2020));
// console.log(get(2026));
// console.log(get(2016));

// 5

// function get(a, b) {
//     let arr = [];
//     let a1 = a.length
//     let a2 = b.length
//     if (a1 < a2 || a1>a2) {
//       return false;
//     }
//     for (let i = 0; i < a.length; i++) {
//      arr.push(a[i] + b[i]);
//     }
//     let e =arr.sort((a, b) => {
//       return a - b;
//     });
//     if (e.at(0) == e.at(-1)) {
//       return true;
//     }
//   else return false;
// }

// console.log(get([1, 2, 3, 4], [4, 3, 2, 1]));
// console.log(get([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]));
// console.log(get([1, 2], [-1, -1]));
// console.log(get([9, 8, 7], [7, 8, 9, 10]));

// 6

// function get(a, b) {
//     let a1 = new Date(a).getTime();
//     let a2 = new Date(b).getTime();
//     let n = 0;
//     if (a1 > a2) {
//       n = a1 - a2;
//     } else n = a2 - a1;
//     let e = 24 * 60 * 60 * 1000;
//     return Math.floor(n / e);
// }

// console.log(get(new Date("June 14, 2019"), new Date("June 20, 2019")));
// console.log(get(new Date("Dec 29, 2018"), new Date("Jan 1, 2019")));

// 7

// function get(arr) {
//   let e = [];
//   let v = arr.map((el) => {
//     e.push(el.score);
//   });
//   e.sort((a, b) => {
//     return a - b;
//   });
//   let o = e.reduce((acc, el) => {
//     return acc + el;
//   });
//   let = w = Math.floor(o / e.length);

//   let obj = {
//     highest: e[2],
//     lowest: e[0],
//     average: w,
//     };
//     return obj
// }
// console.log(
//   get([
//     { name: "Alex", score: 80 },
//     { name: "Emily", score: 95 },
//     { name: "Charlie", score: 88 },
//   ])
// );

// 8

// function get(arr) {
//   let a = arr.split("-");
//   let cnt = 0;

//   for (let i = a[0]; i <= a[1]; i++) {
//     if ((i % 4 == 0 && i % 100 != 0) || i % 100 == 0 ) {
//       cnt++;
//     }
//   }
//   if (cnt > 100) {
//       cnt = cnt - 3
//   }
//     return cnt;
// }
// console.log(get("1980-1984"));
// console.log(get("2000-2020"));
// console.log(get("1600-2000"));

//  9

// function get(a) {
//   for (let i = 0; i < a.length; i++) {
//     if (typeof a[i] == "string") {
//       return "Strings not permitted!";
//       }
//       if (a[i] >= a[i+1]) {
//         return false
//       }
//     }
//     return true;
// }

// console.log(get([1, 2, 3, 4]));
// console.log(get([1, 2, 6, 5, 7, 8]));
// console.log(get([1, 2, 3, "4"]));
// console.log(get([1, 2, 3, 6, 7]));
