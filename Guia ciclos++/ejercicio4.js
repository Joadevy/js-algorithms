<script>
        var cant_pers=0;
        var tot_rec=0;
        var menor_h = 0;
        var menor_paq =0;
        var menor_t = 0;
        let bg = false;

        let np = parseInt(prompt('Ingrese el numero de paquete: ',''));
        let p = parseInt(prompt('Ingrese cantidad de personas: ',''));
        let pp = parseInt(prompt('Ingrese el precio por persona: ',''));
        let ht = parseInt(prompt('Ingrese horas totales de actividades: ',''));
        let t = parseInt(prompt('Ingrese el tipo de actividad: ',''));
        
        while (np>0) {
            let tipo_actual=t;
            var cant_paq = 0;
            var mayor_paq = 0;
            var mayor_imp = 0;
            let bv = false;

            while (tipo_actual == t) {
                cant_pers+=p;
                tot_rec = (p*pp);

                if (bv==false){
                    bv = true;
                    mayor_imp=tot_rec;
                    mayor_paq = np;
                }

                if (bg == false) {
                    menos_h=ht;
                    menos_t=t;
                    menos_paq=np;
                    bg = true;
                } else {
                    if (menos_h > ht) {
                        menos_h=ht;
                        menos_t=t;
                        menos_paq=np;
                    }
                }

                cant_paq++

                if (tot_rec > mayor_imp){
                    mayor_imp = tot_rec;
                    mayor_paq = np;
                }

                document.write("<br />");
                document.write('El total recaudado del paquete ',np,' es: ', tot_rec,'. Pertenece a la actividad: ',tipo_actual);
                document.write("<br />");

                np = parseInt(prompt('Ingrese el numero de paquete: ',''));
                p = parseInt(prompt('Ingrese cantidad de personas: ',''));
                pp = parseInt(prompt('Ingrese el precio por persona: ',''));
                ht = parseInt(prompt('Ingrese horas totales de actividades: ',''));
                t = parseInt(prompt('Ingrese el tipo de actividad: ',''));
            }

            document.write('Datos de la actividad: ',tipo_actual);
            document.write("<br />");
            document.write('La cantidad de paquetes vendidos de la actividad ',tipo_actual,' fue ',cant_paq);
            document.write("<br />");
            document.write('El mayor importe de la actividad ',tipo_actual,' fue ',mayor_imp,' y corresponde al paquete ',mayor_paq);
            document.write("<br />");
        }

        document.write("<br />");
        document.write('El paquete con menos horas adquiridas fue ',menos_paq,' y se corresponde con la actividad ',menos_t,' registrando la cantidad de horas de ',menos_h);
        document.write("<br />");
        document.write('La cantidad de personas que compraron nuestros paquetes fueron ',cant_pers);
</script>
