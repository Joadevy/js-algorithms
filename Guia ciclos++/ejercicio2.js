
        var zona = parseInt(prompt('Ingrese la zona de consumo: ',''));     
        let NC = parseInt(prompt('Ingrese el numero de cliente:',''));
        var KC = parseInt(prompt('Ingrese kilovatios consumidos: ',''));
        var zona_actual=0;

        while (zona!=0) {
            zona_actual = zona;
            var CUZ =0;
            var TFZ=0;

            while (zona_actual == zona) {
                CUZ++;
                if (KC<=100){
                    TFZ =(KC*0.1);
                }
                else {
                    if ((KC>100) && (KC<=200)){
                        TFZ += 10+((KC-100)*0.12);
                    }

                    else {
                        TFZ += 22+((KC-200)*0.15);
                    }
                }
                
                zona = parseInt(prompt('Ingrese la zona de consumo: ','')); 
                NC = parseInt(prompt('Ingrese el numero de cliente:',''));
                KC = parseInt(prompt('Ingrese kilovatios consumidos: ',''));
            }
            document.write("<br />");
            document.write('Zona: ',zona_actual);
            document.write("<br />");
            document.write('Cantidad de usuarios de la zona: ', CUZ);
            document.write("<br />");
            document.write('Total facturado en la zona: ',TFZ);
            document.write("<br />");
        }