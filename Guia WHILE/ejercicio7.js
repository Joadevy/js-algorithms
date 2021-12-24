<script>
        let num;
        let pos = 0;
        var max;
        var posMaximo;

        while (num != 0) {
            num = parseInt(prompt('Ingresa un numero:',''));
            pos++; 
                if (pos == 1){
                    max = num;
                    posMaximo = pos;         
                }
                
                else {
                    if (num > max) {
                        max = num;
                        posMaximo = pos;
                    }
                }
        }
        
        document.write('El maximo valor es: ',max);
        document.write("<br />");
        document.write ('La posicion de ingreso del valor maximo fue: ',posMaximo);
</script>
