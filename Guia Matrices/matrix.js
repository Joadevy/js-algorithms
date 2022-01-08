// This is a little script for testing a little with matrices in js.

var matrix = [ // Defining a matrix with some elements pre-loaded.
    [1,2],
    [3,4],
    [5,6],
];

function charge(matrix){ // Function for pushing the matrix with some new rows.
    for (i=0;i<5;i++){
        matrix.push([i,i+2]);
    }
}

function forEach(array) { // Function for list all elements.
    array.forEach(element => {
        console.log(element);
    });
}

function main() {
    charge(matrix);
    forEach(matrix);
    console.log(matrix[3][0]);
}

main ();
