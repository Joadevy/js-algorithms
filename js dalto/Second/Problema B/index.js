var students = [];
var amountStudents = parseInt(prompt('Enter the amount of students: ',''));


const loadStudent = (array,amount) => {
    for (let i=0;i<amount;i++) {
       array[i] = [prompt("Enter the name: "),0];
    }
}

const loadAttendance = (array,amount) => {
    for (let x=0;x<2;x++) {
        for (let i=0;i<amount;i++) {
            let yesNo = prompt(`Is ${array[i][0]} on class? (y/n): `,'');
                if ((yesNo == 'n') || (yesNo == 'no')) {
                    array[i][1]++;
                }
            }
    }
}

const finalStatus = (array,amount) => {
    for (let i=0;i<amount;i++) {
        if (array[i][1] > 1) {
            alert (`The student ${array[i][0]} is dissaproved`);
        }
    }
}

loadStudent(students,amountStudents);
loadAttendance(students,amountStudents);
finalStatus(students,amountStudents);
document.write(students);

