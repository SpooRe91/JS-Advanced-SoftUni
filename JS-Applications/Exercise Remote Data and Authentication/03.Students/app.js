const fName = document.getElementsByName("firstName")[0]
const lName = document.getElementsByName("lastName")[0]
const number = document.getElementsByName("facultyNumber")[0]
const grade = document.getElementsByName("grade")[0]
const table = document.querySelector('#results > tbody')

document.getElementById("submit").addEventListener("click", onSubmit)

window.addEventListener("DOMContentLoaded", onLoad)

async function onLoad() {
    let data = await getAllStudents()

    Object.values(data).forEach(obj => {
        const newRow = createTr(obj.firstName, obj.lastName, obj.facultyNumber, obj.grade)
        table.appendChild(newRow)
    })
}

async function onSubmit(ev) {
    ev.preventDefault()

    if (fName.value && lName.value && number.value && grade.value) {
        let student = createStudent(fName.value, lName.value, number.value, grade.value)
        await putStudent(student);
        const newRow = createTr(fName.value, lName.value, number.value, grade.value)
        table.appendChild(newRow)
        fName.value = ""
        lName.value = ""
        number.value = ""
        grade.value = ""
    } else {
        alert("Some fields are missing!")
    }
}

async function getAllStudents() {
    const res = await fetch("http://localhost:3030/jsonstore/collections/students")
    const data = await res.json();

    return data
}

function createTr(fName, lName, number, grade) {
    let newRow = document.createElement("tr")
    newRow.innerHTML = `<th>${fName}</th>
    <th>${lName}</th>
    <th>${number}</th>
    <th>${grade}</th>`

    return newRow
}
function createStudent(fName, lName, number, grade) {
    const student = {
        firstName: fName,
        lastName: lName,
        facultyNumber: number,
        grade: Number(grade)
    }
    return student;
}

async function putStudent(student) {
    const res = await fetch("http://localhost:3030/jsonstore/collections/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(student)
    })
    const data = await res.json();

    return data
}