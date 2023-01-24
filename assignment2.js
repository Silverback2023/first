//Q1

let result = [];
let student = [{name: "Daniel", email: "daniel@gmail.com", marks:[80, 60, 50, 70, 95]},
{name: "Mark", email: "mark@gmail.com", marks:[99, 40, 84, 72, 60]},
{name: "Stacy", email: "stacy@gmail.com", marks:[8, 30, 11, 0, 20]},
{name: "Geri", email: "geri@gmail.com", marks:[100, 99, 95, 85, 99]}];

student.forEach( student => {
  result.push({
    name: student.name,
    marks: Object.values(student.marks).reduce((a, b) => a + b)
  })
});

console.log(result)

//Q2
    
const minimumValue = [15, 14, 10, 41, 23];

console.log(Math.min(...minimumValue));



//Q3
const str = 'Helloworld';

console.log(`${str.length}`);