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
        }
    }
}


const Chemistry = new Subject ("Chemistry","Pedro Sanchez",["Jorge","Ricardo","Cofla","Maria","Javier","Sofia","Julia","Agustina","Marcos"]);
const Phisics = new Subject ("Phisics","Paula Juarez",["Jorge","Ricardo","Cofla","Maria","Javier","Sofia","Julia","Agustina","Marcos"]);
const English = new Subject ("English","Ruben Maly",["Jorge","Ricardo","Maria","Javier","Sofia","Julia","Agustina","Marcos"]);

let Subjects = [Chemistry,Phisics,English]; // Saving all the subjects in an array.

const searchSubject = () => { // Searchs for a subject and then shows the students and professor.
    let sub = prompt ('Enter the subject for search: ','');
    for (let subject in Subjects) {
        if(Subjects[subject].subject == sub) {
            Subjects[subject].showProfessor();
            Subjects[subject].showStudents();
        };
    }
}

const amountClasses = () => { // Asks for a students name and searchs looking for the number of classes that they are enrolled in.
    let cont = 0;
    let stud = prompt ("Enter the student's name: ",'');
    for (let subject in Subjects) {
        for (let student in Subjects[subject].students )
        if (Subjects[subject].students[student] == stud) {
            cont++;
        }
    }
    return cont;
}

// searchSubject ();
let contador = amountClasses ();
document.write(contador);

