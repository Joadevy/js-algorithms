/* This is a script for register the class attendance. The script uses a matrix and firstly prompts for the amount of students,
then asks for the today-status (this process should be repeated for a month), then saves it in the matrix with the respective name. 
Finally alerts for the students who have more than 2 non-attendance because they are dissaproved. */

var students = [];
var amountStudents = parseInt(prompt('Enter the amount of students: ',''));

const loadStudent = (array,amount) => { // Loads the name and initialize the non-attendance in 0 for each student.
    for (let i=0;i<amount;i++) {
       array[i] = [prompt("Enter the name: "),0];
    }
}

const loadAttendance = (array,amount) => { // loads the class-attendance for each student.
    for (let x=0;x<5;x++) { // It consideres only 5 days of attendance registering.
        for (let i=0;i<amount;i++) {
            let yesNo = prompt(`Is ${array[i][0]} on class? (y/n): `,'');
                if ((yesNo == 'n') || (yesNo == 'no')) {
                    array[i][1]++;
                }
            }
    }
}

const finalStatus = (array,amount) => { // Shows the final-status of each student. If they have more than 2 non-attendance, they are dissaproved.
    for (let i=0;i<amount;i++) {
        if (array[i][1] > 2) {
            alert (`The student ${array[i][0]} is dissaproved`);
        }
    }
}

loadStudent(students,amountStudents);
loadAttendance(students,amountStudents);
finalStatus(students,amountStudents);

