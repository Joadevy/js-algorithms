/* The script requires a list of numbers and calculates for displaying the amount of prime numbers, even numbers, 
and positive and negative numbers entered.*/
        
        var cp = 0;
        var cn = 0;
        var cpares = 0;
        var cprimos = 0;    
        let num;

        while (num!=0){
            num = parseInt(prompt('Enter a number: ',''));
            let cant = 0;

            if (num>0) {
                cp++;
            }
            else {
                if (num<0) {
                    cn++;
                }
            }

            if ((num % 2 == 0) && (num!=0)) {
                cpares++;
            }

            for (i=1; i<=num; i++) {
                if (num % i == 0) {
                    cant++;
                }
            }

            if (cant == 2) {
                cprimos++;
            }
        }

        document.write('The amount of positive numbers entered is: ', cp);
        document.write("<br />");
        document.write('The amount of negative numbers entered is: ',cn);
        document.write("<br />");
        document.write ('The amount of even numbers entered is: ',cpares);
        document.write("<br />");
        document.write('The amount of prime numbers entered is: ',cprimos);  
