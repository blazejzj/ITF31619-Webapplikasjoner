import Student from "./types/Student";
import Subject from "./types/Subject";

// running number for ids && should be UUID or smth
let runningId: number = 0;

// define a list of students
const students: Student[] = [];

const addStudent = (newStudent: Student) => {
    const { id, name, currentSubjects, finishedSubjects } = newStudent;
    students.push({ id, name, currentSubjects, finishedSubjects });
};

const getGradeForSubjects = (student: Student) => {
    return student.finishedSubjects.map(({ name, grade }) => {
        return `Student got ${grade} in course: ${name}`;
    });
};

const getStudentSubjects = (student: Student) => {
    return student.currentSubjects.map((name) => name);
};

const getAllStudentsFailedSubjects = (student: Student) => {
    return student.finishedSubjects.filter((sub) => sub.grade === "F");
};

const checkIfStudentHasCourseWorthTenPoints = (student: Student) => {
    return student.finishedSubjects.find((course) => course.studyPoints === 10);
};

const sumStudentsFinishedSubjectPoints = (student: Student): number => {
    return student.finishedSubjects.reduce(
        (sum, course) => sum + course.studyPoints,
        0
    );
};

// TESITNG

const subject1: Subject = {
    id: "ITF12345",
    name: "Software Engineering",
    studyPoints: 10,
};

const subject2: Subject = {
    id: "ITF54321",
    name: "Innføring i datasikkerhet",
    studyPoints: 5,
};

const subject3: Subject = {
    id: "ITF13524",
    name: "Webapplikasjoner",
    studyPoints: 10,
    grade: "A",
};

const subject4: Subject = {
    id: "ITF99999",
    name: "Non existing",
    studyPoints: 3,
    grade: "F",
};

const test1: Student = {
    id: 0,
    name: "frank",
    currentSubjects: [subject1, subject2],
    finishedSubjects: [subject3, subject4],
};

// Add a student to list of students
addStudent(test1);
console.log(students);

console.log();
// Get a students grades
const test1Grades = getGradeForSubjects(test1);
console.log(test1Grades);

console.log();
// Get all students subjects (current)
const test1CurrentSubjects = getStudentSubjects(test1);
console.log(test1CurrentSubjects);

console.log();
// Get all students failed subjects
const test1FailedSubjects = getAllStudentsFailedSubjects(test1);
console.log(test1FailedSubjects);

console.log();
// Check if student has a subject worth 10 points
const test1CourseTenPoints = checkIfStudentHasCourseWorthTenPoints(test1);
console.log(test1CourseTenPoints);

console.log();
// Get all students points summed up
const test1SummedPoints = sumStudentsFinishedSubjectPoints(test1);
console.log(test1SummedPoints);

// (function () {
//     console.log("this works");
// })();

console.log(" ");
console.log(" ");
console.log(" ");
const funct = <T>(arg: T) => {
    console.log(typeof arg);
};

const num1: number = 1;
funct(test1);
funct(num1);

enum Status {
    "ACTIVE",
    "INACTIVE",
    "PENDING",
}

const userStatus: Status = Status.ACTIVE;
