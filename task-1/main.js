/************************************ Task 1 ************************************/
let x = 10;
let y = 20;

console.log(`X: ${x}
Y: ${y}`);

[x, y] = [y, x];
console.log(`After Swap || X: ${x} and Y:${y}`);
console.log("-------------------------------------------------------------");

/************************************ Task 1 ************************************/

/************************************ Task 2 ************************************/
let arr = [10, 34, 632, 482, 843, 234, 2];
let arr2 = [1, 4, 7, 3, 9, 2];

let getMaxValue = (arr) => {
    console.log(`Max Value of the array is ${Math.max(...arr)}`);
    console.log(`Max Value of the array is ${Math.min(...arr)}`);
    console.log("-------------------------------------------------------------");
};

getMaxValue(arr);
getMaxValue(arr2);
console.log("-------------------------------------------------------------");
/************************************ Task 2 ************************************/

/************************************ Task 3 ************************************/
let student = {
    studentName: "Boray",
    university: "Helwan",
    faculty: "Business Adminstration",
    finalGrade: 87,
};
console.log(
    `${student.studentName} is a student in faculty of ${student.faculty} in university of ${student.university} and his final grade is ${student.finalGrade}`
);
console.log("-------------------------------------------------------------");
/************************************ Task 3 ************************************/

/************************************ Task 4 ************************************/
let arrCountries = ["Egypt", "Saudi Arabia", "Japan", "Qatar", "Bahrain", "Bahrain", "Bahrain"];
let arrCountries2 = ["India", "Kuwait", "UAE", "Egypt", "Bahrain", "China", "Russia"];
let countries = new Set(arrCountries);
let countries2 = new Set(arrCountries2);

//4) a
// The set operator do NOT accept repeated values

// 4) b
for (let i of countries) {
    console.log(i);
}
console.log(...countries);

// 4) c
console.log(arrCountries.length - countries.size);

console.log(countries);

// 4) d
let diffVal = new Set();
for (let i = 0; i < countries.size; i++) {
    if (!countries2.has(countries[i])) {
        diffVal.add();
    }
}

// 4) e
let countries3 = new Set([...countries, ...countries2]);
console.log(countries3);
/************************************ Task 4 ************************************/

/************************************ Task 5 ************************************/
let selectStudent = document.getElementById("student");

let studentGrades = new Map();
studentGrades.set("Anas", [
    {
        courseName: "Javascript",
        grade: "Excellent",
    },
    {
        courseName: "Jquery",
        grade: "Good",
    },
    {
        courseName: "React",
        grade: "V.Good",
    },
    {
        courseName: "ESNext",
        grade: "Good",
    },
    {
        courseName: "NodeJS",
        grade: "V.Good",
    },
]);

studentGrades.set("Omar", [
    {
        courseName: "Javascript",
        grade: "Excellent",
    },
    {
        courseName: "Jquery",
        grade: "Good",
    },
    {
        courseName: "React",
        grade: "V.Good",
    },
    {
        courseName: "ESNext",
        grade: "V.Good",
    },
    {
        courseName: "NodeJS",
        grade: "Excellent",
    },
]);

studentGrades.set("Clever", [
    {
        courseName: "Javascript",
        grade: "Excellent",
    },
    {
        courseName: "Jquery",
        grade: "Excellent",
    },
    {
        courseName: "React",
        grade: "Excellent",
    },
    {
        courseName: "ESNext",
        grade: "Excellent",
    },
    {
        courseName: "NodeJS",
        grade: "Excellent",
    },
]);
console.log(studentGrades);

for (let [studentName, studentCourse] of studentGrades) {
    // let addOption = document.createElement("option");
    // addOption.innerText = studentName;
    // addOption.value = studentName;
    // addOption.appendChild(selectStudent);
    console.log(`${studentName}`);
    for (let j = 0; j < studentCourse.length; j++) {
        console.log(`Has gained ${studentCourse[j].grade} in ${studentCourse[j].courseName}`);
    }
}

studentGrades.forEach((student) => {
    console.log(studentGrades.keys().next().value);
    for (let j = 0; j < student.length; j++) {
        console.log(`Course ${student[j].courseName} Grade ${student[j].grade}`);
    }
});

console.log(studentGrades.keys());
/************************************ Task 5 ************************************/
