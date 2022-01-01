/* This is a program for the managment of a 'shipping company' that uses trucks for shipments. It uses data of truck-number and weigth of the package loaded. 
They need to group trucks with a max weight of 200kg. 
The goal of this is to determinate: 
1- List with truck-number and total weight (after being loaded), 
2- The truck-number with max amount of packages loaded, 
3- The amount of loaded trucks. */
            
            var cant_cam = 0;
            var max_encom = 0;
            var max_cam=0;
            let camion_actual=0;
            var peso_tot = 0;

            let camion = parseInt(prompt('Enter the truck number: ',''));
            let peso = parseInt(prompt('Enter the package weight: ',''));
            peso_tot = peso;

            while ((peso>0) && (peso_tot <= 200)) {
                camion_actual=camion;
                cant_cam++;   
                peso_tot = 0;
                let encom=0;
                
                while ((camion_actual==camion) && (peso_tot <= 200)) {
                    peso_tot+=peso;
                    encom++;

                    camion = parseInt(prompt('Enter the truck number: ',''));
                    peso = parseInt(prompt('Enter the package weight: ',''));
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
                document.write('The truck ',cant_cam,' transports ', peso_tot,' kilograms');
                document.write("<br />");
            }

        if (peso_tot>200) {
            document.write('The truck exceeds the max-weight');
            document.write("<br />");
        }

        document.write("<br />");
        document.write('The amount of transporting-trucks are: ',cant_cam);
        document.write("<br />");
        document.write('The truck with more packages loaded is: ',max_cam,' with a total of: ',max_encom,' packages');
