const studentName = document.querySelector('.student');
const submitButton = document.getElementById("submit");
const score = document.getElementById("score");
const result = document.querySelector('.result');


submitButton.addEventListener('click', (e)=> {
    e.preventDefault();
    let valid = validateScore();
    if (valid == true) {
        result.textContent = ''; // *********** remove it then 
        let averageScores = calculateAverage();
    } else {
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

const calculateAverage = () => {

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
    name: 'Horacio Rodriguez',
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

for (let student in students) {
    studentName.innerHTML = `Student's name: <span>${students[student].name}</span>`; 
}
