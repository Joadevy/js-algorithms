/* The main goal of this script is making the managment easier of one big list of users in a electricity company.
It needs to enter a set of data (zone-clientNumber-KilowattConsumed) and then processes this information by zone and returns
a list with (Zone - Amount of users in the zone - Total collected in the zone). The algorithm uses a technique
called 'control cut-off' and consists in using loops combinated and the variable "zona_actual" for 
controlling the variable 'zone', if this 'zone' changes, the control cut-off will activate and start a new register
for a new 'zona_actual'.*/


        var zona = parseInt(prompt('Enter the consumption zone: ',''));     
        let NC = parseInt(prompt('Enter the client number: ',''));
        var KC = parseInt(prompt('Enter kilowatt consumed: ',''));
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
                
                zona = parseInt(prompt('Enter the consumption zone: ','')); 
                NC = parseInt(prompt('Enter the client number: ',''));
                KC = parseInt(prompt('Enter kilowatt consumed: ',''));
            }
            document.write("<br />");
            document.write('Zone: ',zona_actual);
            document.write("<br />");
            document.write('Amount of users in the zone: ', CUZ);
            document.write("<br />");
            document.write('Total collected in the zone: ',TFZ);
            document.write("<br />");
        }