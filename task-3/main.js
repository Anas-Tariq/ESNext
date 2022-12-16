/*************************** Task 1 ***************************/
// let target = {
//     userName: "Joe",
//     age: 25,
//     address: "63 St.",
// };
// let handler = {
//     get(target, prop, receiver) {
//         if (prop in target) {
//             return target[prop];
//         } else {
//             throw `There is no element with the name of ${prop}`;
//         }
//     },
//     set(target, prop, value, receiver) {
//         if (prop == "userName" && value.length > 7 && typeof value == "string") {
//             target[prop] = value;
//         } else if (prop == "address" && typeof value == "string") {
//             target[prop] = value;
//         } else if (prop == "age" && typeof value == "number" && value >= 25 && value < 60) {
//             target[prop] = value;
//         } else {
//             throw `Something went wrong ${typeof value}`;
//         }
//     },
// };

// const proxy1 = new Proxy(target, handler);
// console.log((proxy1.age = 60));
/*************************** Task 1 ***************************/

/*************************** Task 2 ***************************/
// class Shapes {
//     static count = 0;
//     constructor(height = null, width = null) {
//         Shapes.count++;
//         this.height = height;
//         this.width = width;
//     }
//     clacArea() {}
//     calcPerimeter() {}
//     toString() {
//         console.log(`The area of the shape is ${this.clacArea()} and the perimeter ${this.calcPerimeter()}`);
//     }
//     static getCount() {
//         return Shapes.count;
//     }
// }

// class Rectangle extends Shapes {
//     //perimeter = 2(l+w)
//     // area = w l
//     constructor(height, width) {
//         super(height, width);
//     }
//     clacArea() {
//         return this.height * this.width;
//     }
//     calcPerimeter() {
//         return 2 * (this.height + this.width);
//     }
// }

// class Square extends Shapes {
//     // perimeter = 4a
//     // area = a^2
//     constructor(height, width) {
//         super(height, width);
//     }
//     clacArea() {
//         return Math.pow(this.height, 2);
//     }
//     calcPerimeter() {
//         return 4 * this.height;
//     }
// }

// class Circle extends Shapes {
//     // perimeter = 2 * 3.14159 * r
//     // area = 3.14159 * r^2
//     constructor(height, width) {
//         super(height, width);
//     }
//     clacArea() {
//         return 3.14159 * Math.pow(this.height, 2);
//     }
//     calcPerimeter() {
//         return 2 * 3.14159 * this.height;
//     }
// }

// let rec = new Rectangle(10, 5);
// rec.toString();
// let sqr = new Square(5);
// sqr.toString();
// let crc = new Circle(8);
// crc.toString();
// console.log(Shapes.count);
/*************************** Task 2 ***************************/

/*************************** Task 3 ***************************/

/*************************** Task 3 ***************************/

/*************************** Task 4 ***************************/
// let book = {
//     bookName: "Clean Code",
//     category: "Programing",
//     pagesNum: 431,
// };

// book[Symbol.iterator] = function () {
//     let bookKey = Object.keys(this);
//     let bookValue = Object.values(this);
//     let i = 0;

//     return {
//         next: () => {
//             if (i < bookKey.length) {
//                 let result = { value: `${bookKey[i]} --- ${bookValue[i]}`, done: false };
//                 i++;
//                 return result;
//             } else {
//                 return { value: undefined, done: true };
//             }
//         },
//     };
// };
// for (let i of book) {
//     console.log(i);
// }

/*************************** Task 4 ***************************/

/*************************** Task 5 ***************************/
// var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// //5) 1
// console.log(fruits.every((item) => typeof item == "string"));

// //5) 2
// console.log(fruits.find((item) => item.startsWith("a")));

// //5) 3
// let newFruits = fruits.filter((item) => {
//     return item.startsWith("b") || item.startsWith("s");
// });
// console.log(newFruits);
/*************************** Task 5 ***************************/
