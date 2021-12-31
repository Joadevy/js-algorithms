/* The script requests 10 numbers and calculates prime numbers. If there is none it shows an alert, otherwise it displays
the maximum prime found.*/
        
        var maxprimo = 0;
        var contPrimo = 0;
        var control = false;

        for (i=0; i<10;i++) {
            let num = parseInt(prompt('Enter a number: ',''));
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
                    if (num > maxprimo) {
                        maxprimo = num;
                    }
                }
            }
        }

        if (contPrimo==0) {
                document.write('There is none prime numbers in the list entered');
        }   

        else {
            document.write('The maximum prime number found is: ',maxprimo);
        }
