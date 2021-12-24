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