const ingresoPersona = () => {
    var flag = false;
    var edadPersona = parseInt(prompt('Ingrese edad: ',''));
    var horaIngreso = parseInt(prompt('Ingrese hora de ingreso: ',''));

    while(edadPersona != 0) {
        var valid = controlPersonas(edadPersona);
        document.write(flag);
        let f = controlIngreso(horaIngreso,valid,flag); // Here I used flag = controlIngreso but the arrow function returns undefined when the condition wont happen.
        if (f == true) { // This is awful but it's a temporarly solution because of my bad handling of the returns of an arrow function.
            flag = true;
        }
        edadPersona = parseInt(prompt('Ingrese edad: ',''));
        horaIngreso = parseInt(prompt('Ingrese hora de ingreso: ',''));
    }
}

const controlPersonas = edad =>{
    if (edad >=18) {
        alert('Autorizado');
        return true;
    } else {
        alert ('Acceso denegado');
        return false;
    }
}

const controlIngreso = (hora,valid,flag) => {
    if ((flag == false) && (valid == true) && (hora >= 2)) {
        alert ('Pasa gratis!');
        return true;
    }
}

ingresoPersona();