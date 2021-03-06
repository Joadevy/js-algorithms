/*
This is a little program for a car-rent company. The company has 5 agencies in 3 locations and 20 cars for rent.
*/
        // Block with cars information: this represent a register of related information linked by the car number that is on the array'codigos'.
        var codigos = [1234,2235,7521,8592,7653,9090,1534,2175,1025,1875,8575,4321,5789,3456,8765,5555,8888,6544,5554,9899]; // Array with car codes, each code is for one different car.
        var categorias = [2,5,1,3,4,5,10,8,1,2,3,4,5,10,7,6,1,4,7,8]; // Categories of each car of 'codigos' (1-10)
        var ppkm = [1.5,4,1,2.2,3.5,4,5,4.25,1,1.5,2.2,3.5,4,5,4.15,4.05,1,3.5,4.15,4.25]; // Price per kilometer depending on the category of the car.
        var agencia = [1,5,4,3,2,3,5,1,5,4,2,1,3,2,2,3,5,2,1,4]; // Number of each agency (1-5)
        var ubicacion = [1,2,2,3,1]; // Location of the agencies are in only 3 distrites (1-3)

        // Block with arrays of processing. They are all initialized in 0 and ready for acumullate info to be provided by the user.
        var recaud = [0,0,0]; // Array for acumulate the total collected in the 3 locations of the different rental agencies.
        var cantAlquileres = [0,0,0,0,0]; // Array to count total rentals.
        var autosPA = [0,0,0,0,0]; // Array for controlling the cars per rental agency.
        var catMA = [0,0,0,0,0,0,0,0,0,0]; // Array for acumulate the amount of categories per rented car.
        var clientes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // Array for acumulate payments for 20 clients.

        main();

        function main() {
            carga(); // Classifies and loads the 'autosPA' array.
            proceso(); // Requests the data and manages it.
            listado_clientes(); // Shows the client list and their total payments.
            rec_per_ubic(); // Shows the total collected in each location (1-3)
            muestra_autosPA(); // Shows the amount of cars for rent in each agency (1-5)
            muestra_catMA(); // Shows the most rented category
            muestra_agMA(); // Displays the agencies with less than 2 rents.
        }

        function carga() {
            agencia.forEach(item => {var num = item; autos_PA(num);});
        }    

        function autos_PA(num) {
                switch(num) {
                    case 1:
                        autosPA[0]++;
                    break;

                    case 2: 
                        autosPA[1]++;
                    break;

                    case 3:
                        autosPA[2]++;
                    break;

                    case 4:
                        autosPA[3]++;
                    break;
                    
                    case 5:
                        autosPA[4]++;
                    break;
                    
                    default:
                    break;
                }
        }

        function proceso(){
            var cod = parseInt(prompt('Enter the car code: ',''));
            var nc = parseInt(prompt('Enter the number client: ',''));
            let day = parseInt(prompt('Enter the rental-start date ',''));
            var kmr = parseInt(prompt('Enter the kilometers traleved: ',''));

            while (nc != 0) {
                var index = buscar(cod);
                var costo = calculocosto(kmr,index);
                acum_ubicaciones(costo,index);
                acum_categorias(index);
                acum_clientes(costo,nc);
                acum_agencias(index);
                    cod = parseInt(prompt('Enter the car code: ',''));
                    nc = parseInt(prompt('Enter the number client: ',''));
                    day = parseInt(prompt('Enter the rental-start date ',''));
                    kmr = parseInt(prompt('Enter the kilometers traleved: ',''));
            }
        }

        function buscar(c){
            let encontrado = false;
            let i = 0;

            while ((encontrado == false) && (i<codigos.length)) {
                if (codigos[i] == c) {
                    encontrado = true;
                    var r = i;
                }
                else {
                    i++;
                }
            }
            return r;
        }

        function calculocosto(kmr,index) {
            P = (kmr * ppkm[index]);
            return P;
        }

        function acum_ubicaciones(c,i) {
            let ub = buscar_ub(i);
            recaud[ub-1]+=c;
        }

        function buscar_ub(i) {
                return ubicacion[agencia[i]-1];
        }

        function acum_categorias(i){
            switch (categorias[i]) {
                case 1:
                    catMA[0]++;
                break;

                case 2:
                    catMA[1]++;
                break;

                case 3:
                    catMA[2]++;
                break;

                case 4:
                    catMA[3]++;
                break;

                case 5:
                    catMA[4]++;
                break;

                case 6:
                    catMA[5]++;
                break;

                case 7:
                    catMA[6]++;
                break;

                case 8:
                    catMA[7]++;
                break;

                case 9:
                    catMA[8]++;
                break;

                case 10:
                    catMA[9]++;
                break;
            }
        }

        function acum_clientes(c,nc){
            clientes[nc-1]+=c;
        }

        function acum_agencias(i){
            switch (agencia[i]) {
                case 1:
                    cantAlquileres[0]++;
                break;

                case 2:
                    cantAlquileres[1]++;
                break;

                case 3:
                    cantAlquileres[2]++;
                break;

                case 4:
                    cantAlquileres[3]++;
                break;

                case 5:
                    cantAlquileres[4]++;
                break;
            }
        }

        function listado_clientes(){
            for (i=0;i<clientes.length;i++){
                document.write('The client number ',i+1,' realized payments for a total value of ',clientes[i]);
                document.write("<br />");
            }
            document.write("<br />");
        }

        function rec_per_ubic(){
            for (i=0;i<recaud.length;i++){
                document.write('The location of agencies: ',i+1,' acumulated payments for a value of ',recaud[i]);
                document.write("<br />");
            }
            document.write("<br />");
        }
        
        function muestra_autosPA() {
            for (i=0;i<autosPA.length;i++){
                document.write('The amount of cars in the agency ',i+1,' is ',autosPA[i]);
                document.write("<br />");
            }
            document.write("<br />");
        }
        
        function muestra_catMA () {
            var max = 0;
            var maxc = 0;

            for (i=0;i<catMA.length;i++){
                if (i==0) {
                    max = catMA[0];
                    maxc = i+1;
                }
                else {
                    if (catMA[i]>max) {
                        max = catMA[i];
                        maxc = i+1;
                    }
                }
            }
            document.write('The most rented category was: ',maxc,' with the amount of ',max,' rents.');
            document.write("<br />");
        }
        
        function muestra_agMA() {
            document.write("<br />");
            for (i=0;i<cantAlquileres.length;i++){
                if (cantAlquileres[i]<2) {
                    document.write('The agency ',i+1,' realized less than 2 rents');
                document.write("<br />");
                }
            }
            document.write("<br />");
        }