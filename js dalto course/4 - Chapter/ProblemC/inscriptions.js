/* 
The script is a mini-system for loading students in courses. They requirements were:
- Ask for a course and students name.
- Check if the course have more than 7 students.
- If the course have less than 7, push the new student into the course, if it not, alert this situation.
*/

class Subject {
    constructor(name,students) {
        this.name = name;
        this.amountOfStudents = students;
    }

    set (studentsName) {
            this.amountOfStudents.push(studentsName);
        }
    
    get () {
        return this.name;
    }
}

const Phisics = new Subject ("Phisics",['Pedro','Raul','Samanta','Nicolas','Maria','Sofia','Michael','Cofla','Lucia']);
const Art = new Subject ("Art",['Marta','Ricardo','Samanta','Mirko','Maria','Sebastian','Michael','Lucas','Lucia']);
const History = new Subject ("History",['Constanza','Jorge','Antonio','Marta','Sofia']);

var Subjects = [Phisics,Art,History]; // Array of the subjects

const askForSubject = () => prompt("Enter the name of subject: ",'');
const askForStudent = () => prompt ("Enter the students name: ",'');

const validInscription = (sub) => { // Checks if there are less than 7 student in the course "sub"
    for (let subj in Subjects) {
        if (Subjects[subj].name == sub) {
                if (Subjects[subj].amountOfStudents.length < 7) {
                    return true;
                } else {
                    return false;
                }
        }
    }
}

const loadInscription = (studentName,sub) => { // Pushes a new student in the "sub" course.
    for (let subject in Subjects) {
        if(Subjects[subject].name == sub) {
            Subjects[subject].set(studentName);
            alert ('Registered succesfull');
        }
    }
}

const showNewAmount = (sub) => { // Shows the students in the course entered (it doesn't matter if they have > 7 students)
    for (let subject of Subjects) {
        if (subject.name == sub) {
            document.write(`The students actually registered in the ${subject.name} course are ${subject.amountOfStudents}`);
        }
    }
}

const main = () => {
    let subject = askForSubject ();
    let studentName = askForStudent ();
    let valid = validInscription(subject);
    if (valid == true) {
        loadInscription(studentName,subject);
    } else if (valid == false) {
        alert ('This course is full');
    }
    else {
        alert ('Invalid subject');
    }
    showNewAmount(subject);
}

main ();
