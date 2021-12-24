        var maxprimo = 0;
        var contPrimo = 0;
        var control = false;

        for (i=0; i<10;i++) {
            let num = parseInt(prompt('Ingrese un numero:',''));
            let cant = 0; 

            for (x=1; x<=num;x++) {
                if (num % x == 0) {
                    cant++;
                }
            }

            if (cant == 2) {
                contPrimo++;

                if (control==false) {
                    control = true;
                    maxprimo = num;
                }

                else {
                    if (num > MaxPrimo) {
                        maxprimo = num;
                    }
                }
            }
        }

        if (contPrimo==0) {
                document.write('Ningun numero primo fue ingresado');
        }   

        else {
            document.write('El mayor de los primos ingresados es:',maxprimo);
        }
