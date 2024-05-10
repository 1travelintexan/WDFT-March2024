//*************Objects *****************/
//create and object

const classroom = {
  //the whole line is a property of the object
  //left side is the key
  //right side is the value
  teacher: "Joshua",
  TA: "Ragnar",
  students: ["Renan", "Andreia", "Filipa"],
  address: {
    street: "France Way",
    number: "123",
    country: "France",
  },
};

//**********************delete method for objects ******************/
//remove a property from an object
delete classroom.TA;
console.log("after we remove Ragnar,", classroom);

//accessing keys inside an object
//with dot notation
const theTeacher = classroom.teacher;
// console.log("the Teacher is ", theTeacher);
//with the bracket notation (always use quotes '')
const theTA = classroom["TA"];
const students = "students";
// console.log(classroom[students]);
// console.log("the TA is ", theTA);
classroom.students.push("Dalin", "Dani", "Guilherme");

//change the address of the classroom object to be 456 Ocean way
classroom.address.street = "Ocean Way";
classroom.address["number"] = "456";
// console.log("classroom after ", classroom);

//************** in operator for objects *******************/
const doesJoshHaveATA = "Ta" in classroom;
// console.log("does Josh have a TA? :", doesJoshHaveATA);

//******************* Object.keys & Object.values *******************/
//all of the keys of an object in an array
const classroomKeys = Object.keys(classroom);
// console.log("the keys .... ", classroomKeys);
const classroomValues = Object.values(classroom);
// console.log("the values of the object ... ", classroomValues);
classroomValues[1] = "Ragni";
// console.log("values after", classroomValues);
// console.log("the classroom ", classroom);

//************** for in loop to loop over objects *************/
//make sure to always use the [] notation inside the for in loop :)
let keysCounter = 0;
for (let key in classroom) {
  const theValue = classroom[key];
  //   console.log(theValue);
  //   console.log("this is the key", key);
}
// console.log("the number of keys inside our classroom is", keysCounter);
