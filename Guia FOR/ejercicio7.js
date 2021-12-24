<script type="text/javascript">
        var mayor;
        var pos_mayor;
        for (i = 0; i < 5; i++) {
            let num = parseInt(prompt('Ingrese numero:',''));
                if (i == 0) { 
                    mayor = num;
                    pos_mayor = i+1;
                }

                else {
                    if (num > mayor) {
                        mayor = num;
                        pos_mayor = i+1;
                    }
                }
        }

        document.write("el mayor es:",mayor);
        document.write("<br />");
        document.write("la posicion es:",pos_mayor);
    </script>