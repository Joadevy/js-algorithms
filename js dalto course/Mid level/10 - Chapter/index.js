// Getting the HTML elements.
const studentName = document.querySelector('.student');
const submitButton = document.getElementById("submit");
const score = document.getElementById("score");
const result = document.querySelector('.result');

// Tracks the students object for loading the score-test and getting a result one by one.
let student = 0;

// Adding the listener for the button.
submitButton.addEventListener('click', (e)=> {
        e.preventDefault();
        let valid = validateScore();
        if (valid == true) {
            result.textContent = ''; // Reset if there was an error message by a wrong char introduced instead a number.
            let averageScores = calculateAverage(student);
            if (averageScores >= 7) {
                alert(`${students[student].name} approves!`);
            } else {
                alert(`${students[student].name} disapproves!`);
            }
            student++; // Pass to the next student.
            score.value = ''; // Reset the initial value of the input.
            studentName.innerHTML = `Student's name: <span>${students[student].name}</span>`; // reset the name of the student displayed.
        } else {
            result.classList.add('red');
            result.textContent = 'You need to introduce a number!';
        }
})

// Validates if the score entered was a number.
const validateScore = () => {
    if (score.value/0 == Infinity) { // This cannot accept the score 0 because 0/0 != infinity (but also nobody gets a 0 in a test)
        return true;
    } else {
        return false;
    }
} 

// Calculates the average between the 2 practical works + the test-score entered.
const calculateAverage = (student) => {
    return((parseInt(score.value) + students[student]["scoreOne"]+ students[student]["scoreTwo"])/ 3); // Transform the score.value in an integer (like the professors do)
}

// Objets students contain the name and the score of the two past practical works.
let students = [{
    name: 'Horacio Rodriguez',
    scoreOne: 6,
    scoreTwo: 8,
}, {
    name: 'Micaela Firtz',
    scoreOne: 9,
    scoreTwo: 7,
},{
    name: 'Lisandro Romero',
    scoreOne: 4,
    scoreTwo: 8,
},{
    name: 'Victoria Campy',
    scoreOne: 7,
    scoreTwo: 5,
}, {
    name: 'Lucas Rizzo',
    scoreOne: 10,
    scoreTwo: 6,
}];

// Using try & catch for the first student displayed in DOM.
try { studentName.innerHTML = `Student's name: <span>${students[0].name}</span>`; }
catch (error) {
    console.log('Failed to load the student name, error info: ', error.info);
}


