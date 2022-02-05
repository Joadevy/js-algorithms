/* The script prompts for the status of a student and shows if approves or not.
The requirements for approve are:
- Three exams with average score  >= 7.
- 3 of 4 practical works approves with score >= 7. 
- Amount of assistance >= 90.
All the alerts/info are showing in console. */

var scores= [];
var practicalWorks = [];

    aprrovesOrNot = (assistance) => {
        let notes = 0;
        let pws = 0;

        scores.forEach(element => {
           notes += element; 
        });
        practicalWorks.filter(element => { // Acummulates the practical works approved.
            if (element >= 7) {
                pws++;
            } 
        });

        let prom = (notes / 3); // Calculate the average among the 3 exams. It needs to be >= 7

        if ((prom>=7) && (pws>=3) && (assistance >=90)) {
            return true;
        } else {
            return false;
        }
    }

const showResult = (name,result) => { // prints in the console if the student approve or not.
    if (result == true) {
            console.log(`%cStudent ${name} approved`,"color:green;");
    } else {
            console.log(`%cStudent ${name} desapproved`,"color:red;");
    }
}

const loadStudentScores = () => { // Manages the score tests/practical works for the student.
        console.groupCollapsed('Tests')
        console.info('Loading test-scores')
    for (i=0;i<3;i++) {
        let note = parseInt(prompt(`Enter the test-score ${i+1}: `,'' ));
            console.count('test-score')
            console.info(`  %cScore: `+ note,"color:cyan;")
        scores.push(note);
    }
        console.countReset('test-score')
        console.groupEnd('Tests')

        console.groupCollapsed('Practical works')
        console.info('Loading practical works scores')
    for (i=0;i<4;i++) {
            console.count('practical-work')
        let practicalWork = parseInt(prompt(`Enter the practical-work score ${i+1}: `,'' ));
            console.info(`  %cScore: `+ practicalWork,"color:cyan;")
        practicalWorks.push(practicalWork);
    }
        console.countReset('practical-work')
        console.groupEnd('Practical works')

}

const main = () => {
    let name = prompt ('Enter the student name','');
    let assistance = parseInt(prompt('Enter the amount of assistance: ',''));
    loadStudentScores ();
    let result = aprrovesOrNot (assistance);
    showResult (name,result);
}

main();