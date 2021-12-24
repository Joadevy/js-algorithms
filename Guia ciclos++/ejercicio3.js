<script>
            var cant_cam = 0;
            var max_encom = 0;
            var max_cam=0;
            let camion_actual=0;
            var peso_tot = 0;

            let camion = parseInt(prompt('Introduzca numero de camion: ',''));
            let peso = parseInt(prompt('Introduzca peso: ',''));
            peso_tot = peso;

            while ((peso>0) && (peso_tot <= 200)) {
                camion_actual=camion;
                cant_cam++;   
                peso_tot = 0;
                let encom=0;
                
                while ((camion_actual==camion) && (peso_tot <= 200)) {
                    peso_tot+=peso;
                    encom++;

                    camion = parseInt(prompt('Introduzca numero de camion: ',''));
                    peso = parseInt(prompt('Introduzca peso: ',''));
                }


                if (cant_cam==1) {
                        max_encom=encom;
                        max_cam=cant_cam;                    
                } else {
                    if (encom>max_encom){ 
                        max_encom=encom;
                        max_cam=cant_cam;
                    } 
                }

                document.write("<br />");
                document.write('El camion ',cant_cam,' transporta ', peso_tot,' kilogramos');
                document.write("<br />");
            }

        if (peso_tot>200) {
            document.write('El camion excedio el peso');
            document.write("<br />");
        }

        document.write("<br />");
        document.write('La cantidad de camiones que transportan peso son: ',cant_cam);
        document.write("<br />");
        document.write('El camion que transporta mas encomiendas es: ',max_cam,' con un total de: ',max_encom,' encomiendas');
</script>
