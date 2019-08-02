// Create 3 objects that represents some of your teammates as NSS students
//    - Name
//    - Cohort
//    - Current exercise being worked on

const humberto = {
    toString () {
        return `${this.name} is in cohort ${this.cohort} and is working on the ${this.currentExercises} exercise`
    },
    name: "Humberto",
    cohort: 34,
    currentExercises: "Functions"
}

const bryan = {
    toString () {
        return `${this.name} is in cohort ${this.cohort} and is working on the ${this.currentExercises} exercise`
    },
    name: "Bryan Nilsen",
    cohort: 34,
    currentExercises: "TicTacToe"
}

const eric = {
    toString () {
        return `${this.name} is in cohort ${this.cohort} and is working on the ${this.currentExercises} exercise`
    },
    name: "Eric Taylor",
    cohort: 34,
    currentExercises: "jokes"
}

// Add a `toString()` method to your object that creates a
//    string representation and returns it. Use the following
//    format:
//        "Name is in cohort and is working on the X exercise"


// Write a function that inputs a student object and returns the
//    string representation

const studentStringFactory = (student) => student.toString()


studentStringFactory(bryan)

// 5. Put all object into an array stored in the variable `students`

const students = [humberto, bryan, eric]

console.log(students)

// 6. Use the `map()` method to generate a new array that only contains
//    the string representations of each student


// const studentsStrings = students.map(student => {
//     return student.toString()
// })

// console.log(studentsStrings)

// or you could do the following:

const studentsStrings = students.map(studentStringFactory)

console.log(studentsStrings)

//normally store the html location in a variable here instead of inside the function below

studentsStrings.forEach( (studentString) => {
    document.querySelector("#studentReport")
    .innerHTML += `<p>${studentString}</p>`
})