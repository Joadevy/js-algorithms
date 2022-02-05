/* The script simulates the behavior of a calculator. It's for the sum,substract,product,division, cube and square root and power operations.
Uses an array for saving the numbers, type-operation and result and then manages all from it. 
*/

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
    if ((array == '+') || (array[2]== '-') || (array[2]=='*') || (array[2]=='/')) {
        for (i=0;i<2;i++) {
            array[i] = parseInt(prompt(`Enter your ${i+1} number: `,''));
        } 
    } else if ((array[2]== 2)||(array[2]== 3)){
        array [0] = parseInt (prompt('Enter your number: ',''));
    } else if (array[2]=='p') {
        array[0] = parseInt(prompt(`Enter your base number: `,''));
        array[1] = parseInt(prompt(`Enter your exponent number: `,''));
    } else {
        alert('Invalid symbol');
    }
}

const loadOperation = array => array [2] = prompt('Enter your operation type symbol (+,-,/,*,2(sqrt),3(cbrt),p(pow)): ','');

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

        case '2':
            array[4] = Math.sqrt(array[0]);
        break;

        case '3':
            array[4] = Math.cbrt(array[0]);
        break;

        case 'p':
            array[4] = Math.pow(array[0],array[1]);
        break;

        default:
            array [4] = "invalid";
        break;
    }
}

const showResult = array => {
    if (array[4]!= "invalid") {
        alert(`The result for the operation entered is ${array[4]}`);
    }
}

const main = () => {
    loadOperation(numbers);
    loadNumbers(numbers);
    callOperation(numbers);
    showResult(numbers);
}

main ();