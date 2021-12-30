/* That file contains some functions will be used in ejercicio7 */
function par(n1) {
    if (n1 % 2 == 0) {
        r = 1;
    } else {
        r = 0;
    }
    return r;
}

const primo = (n1) => {
    let cant = 0;
    let r=0;
    
    for (i=1; i<=n1;i++){
        if (n1 % i == 0) {
            cant++;            
        }
    }

    if (cant == 2) {
        r=1;        
    }

    return r;
}




