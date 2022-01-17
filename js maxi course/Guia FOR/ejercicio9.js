/* The scrip requests 20 ages and then calculates and displays the average of ages>18. */
        
        var acum;
        var cant;
        cant = 0;
        acum = 0;
        var promedio;

        for (i=0; i<20; i++) {
            let edad = parseInt(prompt('Enter the age',''));

            if (edad > 18) {
                cant++;
                acum+= edad;
            }
        }

        promedio = (acum / cant);
        document.write("The average of ages is: ",promedio);