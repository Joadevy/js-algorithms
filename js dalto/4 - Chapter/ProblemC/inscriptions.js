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

const validInscription = (sub) => {
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

const loadInscription = (studentName,sub) => {
    for (let subject in Subjects) {
        if(Subjects[subject].name == sub) {
            alert(subject);
            Subjects[subject].set(studentName);
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
    let show = Subjects[2].amountOfStudents;
    document.write(show);
}

main ();
