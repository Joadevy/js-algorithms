const studentName = document.querySelector('.student');
const submitButton = document.getElementById("submit");
const score = document.getElementById("score");
const result = document.querySelector('.result');
let student = 0;


submitButton.addEventListener('click', (e)=> {
        e.preventDefault();
        let valid = validateScore();
        if (valid == true) {
             // *********** remove it then 
            let averageScores = calculateAverage(student);
            if (averageScores >= 7) {
                result.classList.remove('red');
                result.classList.add('green');
                result.innerHTML = `${students[student].name} <span>approves!</span>`;
            } else {
                result.classList.remove('green');
                result.classList.add('red');
                result.innerHTML = `${students[student].name} <span>disapproves!</span>`;
            }
            student++;
            score.value = '';
            studentName.innerHTML = `Student's name: <span>${students[student].name}</span>`;
        } else {
            result.classList.remove('green');
            result.classList.add('red');
            result.textContent = 'You need to introduce a number!';
        }
})

const validateScore = () => {
    if (score.value/0 == Infinity) { // This cannot accept the score 0 because 0/0 != infinity (but also nobody gets a 0 in a test)
        return true;
    } else {
        return false;
    }
} 

const calculateAverage = (student) => {
    return((parseInt(score.value) + students[student]["scoreOne"]+ students[student]["scoreTwo"])/ 3); // Transform the score.value in an integer (like the professors do)
}

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

studentName.innerHTML = `Student's name: <span>${students[0].name}</span>`;


