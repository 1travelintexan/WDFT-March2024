import "./App.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  //this is just normal javascript
  const user = {
    name: "Ragnar",
    age: 3,
    breed: "Dog",
  };
  const students = ["Filipa", "Dani", "Renan", "Dalin", "Ayoub", "Guilherme"];
  const [student1, student2, ...restOfStudents] = students;
  console.log("here are the students", students);
  console.log(
    "student1 and student2",
    student1,
    student2,
    restOfStudents,
    "last student"
  );

  //this is destructuring
  const { name, age } = user;
  // console.log("here is our user", user);
  // console.log("here is our name", name);

  //we will add functions here
  return (
    <>
      <Navbar />
      <h1>
        {name}'s Webpage and he is {age} years old
      </h1>
      <Banner />
      <Footer />
    </>
  );
}

export default App;
