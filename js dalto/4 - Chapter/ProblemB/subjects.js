/* The script is for solving the problem B. Its about an mini-system for subject managment in a school/college. The requirements were:
- Show the professor and students by entering a subjects name.
- Show the amount of courses a student has registered.
- Display the courses and their professors of a student.
*/

class Subject {
    constructor(name,prof,stud){
        this.subject = name;
        this.professor = prof;
        this.students = stud;
    }

    showStudents () {
        document.write(`<br> The students are: <br>`);
        this.students.filter (student => document.write(student + "<br>"));
    }

    showProfessor () {
        document.write(`The professor is: ${this.professor} <br>`);
    }

    showSubjectName () {
        document.write (`<u>${this.subject}</u> <br>`)
    }

    searchStudent (student) {
        if (this.students.includes(student) == true) {
            this.showSubjectName (); 
            this.showProfessor ();
            document.write(`<br>`);
        }
    }
}


const Chemistry = new Subject ("Chemistry","Pedro Sanchez",["Jorge","Ricardo","Cofla","Maria","Javier","Sofia","Julia","Agustina","Marcos"]);
const Phisics = new Subject ("Phisics","Paula Juarez",["Jorge","Ricardo","Cofla","Maria","Javier","Sofia","Julia","Agustina","Marcos"]);
const English = new Subject ("English","Ruben Maly",["Jorge","Ricardo","Maria","Javier","Sofia","Julia","Agustina","Marcos"]);

let Subjects = [Chemistry,Phisics,English]; // Saving all the subjects in an array.

// Functions for prompt data
const askForStudent = () => prompt ("Enter the student's name: ",'');
const askForSubject = () => prompt ("Enter the subject's name: ",'');

const searchSubject = () => { // Searchs for a subject and then shows the students and professor.
    let sub = askForSubject ();
    for (let subject in Subjects) {
        if(Subjects[subject].subject == sub) {
            Subjects[subject].showProfessor();
            Subjects[subject].showStudents();
        };
    }
}

const amountClasses = () => { // Asks for a students name and searchs looking for the number of classes that they are enrolled in.
    let cont = 0;
    let stud = askForStudent();
    for (let subject in Subjects) {
        for (let student in Subjects[subject].students )
            if (Subjects[subject].students[student] == stud) {
                cont++;
            }
    }
    return cont;
}

const showAmountClasses = () => {
    let amount = amountClasses ();
    document.write('The amount of courses that the student has registered is: ',amount);
}


// Function that works fine but isn't very readable.
/* const showClasses = () => { 
    let stud = askForStudent ();
    for (let subject in Subjects) {
        for (let student in Subjects[subject].students) {
            if (Subjects[subject].students[student] == stud) {
                Subjects[subject].showSubjectName();
                Subjects[subject].showProfessor();
            }
        }
    }
} */

const showClasses = () => { // The function asks for a student and shows the courses and their professors that the student has registered.
    let stud = askForStudent ();
    for (let subject in Subjects) {
        Subjects[subject].searchStudent(stud);
    }
}

const mainMenu = () => {
    let option = parseInt(prompt('Enter the option (1,2,3): ',''));
    switch (option) {
        case 1:
            searchSubject();
        break;

        case 2:
            showAmountClasses();
        break;

        case 3:
            showClasses();
        break;
    
        default:
            alert('This option is not valid, please try again');
        break;
    }
}

mainMenu ();

