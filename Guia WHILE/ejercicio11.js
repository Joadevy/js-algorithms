<script>
        var cp = 0;
        var cn = 0;
        var cpares = 0;
        var cprimos = 0;    
        let num;

        while (num!=0){
            num = parseInt(prompt('Ingrese un numero: ',''));
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

        document.write('La cantidad de numeros positivos ingresados fue: ', cp);
        document.write("<br />");
        document.write('La cantidad de numeros negativos ingresados fue: ',cn);
        document.write("<br />");
        document.write ('La cantidad de numeros pares ingresados fue: ',cpares);
        document.write("<br />");
        document.write('La cantidad de numeros primos ingresados fue: ',cprimos);
</script>    
