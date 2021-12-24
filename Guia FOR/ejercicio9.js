        var acum;
        var cant;
        cant = 0;
        acum = 0;
        var promedio;

        for (i=0; i<20; i++) {
            let edad = parseInt(prompt('Ingrese la edad',''));

            if (edad > 18) {
                cant++;
                acum+= edad;
            }
        }

        promedio = (acum / cant);
        document.write("El promedio de edades es:",promedio);