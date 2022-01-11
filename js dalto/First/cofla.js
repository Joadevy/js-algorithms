// A basic script only using the contents of the first chapter (only conditional sentences)

let montoCofla = prompt('Ingrese el monto de Cofla: ','');
let vueltoCofla;

if ((montoCofla >= 0.6) && (montoCofla <1)) {
    vueltoCofla = montoCofla - 0.6;
    alert('Alcanza para el palito de agua');
} else if((montoCofla >= 1) && (montoCofla <1.6)) {
    vueltoCofla = montoCofla - 1;
    alert('Alcanza para el palito de crema');
} else if((montoCofla >=1.6) && (montoCofla <1.7)) {
    vueltoCofla = montoCofla - 1.6;
    alert('Alcanza para el tricolor');
}
else if((montoCofla >= 1.7) && (montoCofla <1.8)) {
    vueltoCofla = montoCofla - 1.7;
    alert('Alcanza para el bombon suizo');
} else if((montoCofla >= 1.8) && (montoCofla <2.9)) {
    vueltoCofla = montoCofla - 1.7;
    alert('Alcanza para el cono grande');
} else if (montoCofla >= 2.9){
    vueltoCofla = montoCofla - 2.9;
    alert('Alcanza para potecito o un cuarto');
} else {
    alert ('No alcanza para nada');
}

alert ("El vuelto es de " + vueltoCofla);

