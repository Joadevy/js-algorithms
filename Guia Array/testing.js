/* This is a test-script only, I used the 'includes' and 'forEach' functions for first time. The script basically
prompts for a car-code and looks for it in the array 'codigoAutos', then asks if the user needs to add another element and then if the answer is 
'yes' pushes it.*/
        var codigoAutos = [1234,2235,7521,8592,7653,9090,1534,2175];
        var cod = parseInt(prompt('Enter the car-code: ',''));
        
        function buscarCodigo(cod) {
            return codigoAutos.includes(cod);
        }

        let I = buscarCodigo(cod);
        if (I == true){
            document.write('Indeed the element: ',cod,' is in the array!');
            document.write("<br />");
        }

        request();

        function request(){
            var q = prompt('Do you want to add a new car code? (y/n)','');
            if ( (q=='y') ||(q== 'yes') ){
                var newElement = parseInt(prompt('Enter the car code',''));
                codigoAutos.push(newElement);
                codigoAutos.forEach(item => {document.write(item); document.write("<br />");} );
            }
        }