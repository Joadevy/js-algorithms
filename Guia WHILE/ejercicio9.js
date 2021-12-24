<script>
        var Menor;
        var smenor;
        var posm=0;
        var possm=0;
        let pos = 0;
        let num;

        while(num !=0){
            num = parseInt(prompt('Ingrese un numero: ',''));
            pos++;

            if (pos==1){
                menor=num;
                smenor=num;
                posm=pos;
            }

            else {
                if (num < menor) {
                    smenor = menor;
                    possm = posm;
                    menor = num;
                    posm = pos;
                }
            }
        }

        document.write('El menor numero ingresado fue: ', menor);
        document.write ('La posicion del menor ingresado fue: ', posm);
        document.write("<br />");
        document.write('El segundo menor numero ingresado fue:', smenor);
        document.write('La posicion del segundo menor numero ingresado fue: ',possm);
</script>
