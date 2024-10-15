// getting DOM elements
const Student_form_container = document.getElementById("Student_form_container");
const student_container = document.querySelector(".Students");
const nameInput = Student_form_container['Name'];
const ageInput = Student_form_container['Age'];
const rollInput = Student_form_container['Roll'];

const students = JSON.parse(localStorage.getItem("students")) || [];
const addStudent =(Name, Age, Roll) => {
students.push(
    {
        Name: Name,
        Age: Age,
        Roll: Roll
    }
);
localStorage.setItem("students", JSON.stringify(students))

return{ Name, Age, Roll}
}
// adding students to the DOM
const createStudentElement = ({Name, Age, Roll}) => {
    const studentDiv = document.createElement('div')
    const studentName = document.createElement('h1')
    const studentAge = document.createElement('p')
    const studentRoll = document.createElement('p')

    // adding content inside the elements
    studentName.innerText = "Student Name: " + Name
    studentAge.innerText = "Student Age: " + Age
    studentRoll.innerText = "Student Roll: " + Roll
// appending content (add to dom)
    studentDiv.append(studentName, studentAge, studentRoll)
    student_container.appendChild(studentDiv)
    student_container.style.display = students.length == 0 ? "none" : "flex"
}
    student_container.style.display = students.length == 0 ? "none" : "flex"
// calling the function
students.forEach(createStudentElement)
Student_form_container.onsubmit = (e) =>{
e.preventDefault();

const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
);
createStudentElement(newStudent)
nameInput.value ="";
ageInput.value ="";
rollInput.value=""
};