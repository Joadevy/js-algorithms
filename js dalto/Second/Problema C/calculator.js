/* The script simulates the behavior of a calculator. It's for the sum,substract,product and division operations.
Uses an array for saving the numbers, type-operation and result and then manages all from it.*/

var numbers = [];

const sum = (n1,n2) => (n1+n2); 
const substraction = (n1,n2) => (n1-n2);
const product = (n1,n2) => (n1*n2);
const division = (n1,n2) => {
    if (n2 != 0) {
        return (n1 / n2);
    } else {
        alert ('The division between a number and 0 is not defined');
    }
}

const loadNumbers = (array) => {
    for (i=0;i<2;i++) {
        array[i] = parseInt(prompt(`Enter your ${i+1} number: `,''));
    }
}

const loadOperation = array => array [2] = prompt('Enter your operation type symbol (+,-,/,*): ','');

const callOperation = array => {
    switch (array[2]) {
        case '+':
            array[4] = sum(array[0],array[1]);
        break;
        
        case '-':
            array[4] = substraction(array[0],array[1]);
        break;

        case '*':
            array[4] = product(array[0],array[1]);
        break;

        case '/':
            array[4] = division(array[0],array[1]);
        break;

        default:
            alert('Invalid symbol');
        break;
    }
}

const showResult = array => alert(`The result for the operation entered is ${array[4]}`);

const main = () => {
    loadNumbers(numbers);
    loadOperation(numbers);
    callOperation(numbers);
    showResult(numbers);
}

main ();