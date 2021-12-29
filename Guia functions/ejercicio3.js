/* Script that creates a function 'par' which receives an int number and returns 0/1 depending
if its an odd or even number. Then in the main function 'par' will invoked and used for comparing
5 numbers and it'll show the amount of even numbers entered.*/

function par(n1) {
    if (n1 % 2 == 0) {
        r = 1;
    } else {
        r = 0;
    }
    return r;
}

function main () {
    var pares = 0;
            for (let i=0; i < 5; i++) {
                let num = parseInt(prompt('Ingrese numero: ',''));
                let P = par(num);
                    if (P == 1) {
                        pares++;
                    }
            }

    document.write('La cantidad de pares ingresados fue: ',pares);
}