/* This is a script for manage the purchases made in different suppliers in the last year. For each buy they register the data 
of (supplier number, day, month, commercial invoice type 'A,B or C', product number, amount purchased, price per unit.
Then they require:
1- Max-amount registered in one purchase per supplier and supplier-number.
2- Total invested in a year for each invoice type.
3- Purchase with min-amount registered in August with their number product.
4- Amount of purchases for each supplier.
5- Product number with max-amount in a purchase and the supplier from that it was purchased.*/
        
        let ba = false;
        let bp = false;
        var monto =0;
        let cant_max=0;
        var np_max =0;
        var num_max=0;
        var menor_ag = 0;
        var menor_ag_np = 0;
        var monto_max=0;
        var cantA = 0;
        var cantB = 0;
        var cantC = 0;

        var num = parseInt(prompt('Enter the supplier number: ',''));
        let dia = parseInt(prompt('Enter the day of purchase: ',''));
        let mes =  parseInt(prompt('Enter the month of purchase: ',''));
        let tf = (prompt('Enter the invoice type: ',''));
        let nprod = parseInt(prompt('Enter product number: ',''));
        let cant  = parseInt(prompt('Enter amount adquired: ',''));
        let pu= parseInt(prompt('Enter unit price: ',''));

        while (num!=0) {
            let n_actual=num;
            let bc = false;
            var compra = 0;

            while (n_actual  == num) {
                monto = (cant*pu);

                if (bc==false) {
                    monto_max = monto;
                    bc = true;
                } else {
                    if (monto_max < monto) {
                        monto_max=monto;
                    }
                }

                switch (tf) {
                    case 'a':
                        cantA += monto;
                        break;  

                    case 'b':
                        cantB+=monto;
                        break;

                    case 'c': 
                        cantC+=monto;
                        break;

                    default:
                        break;
                }

                if ((mes==8) && (ba==false)) {      
                    menor_ag=monto;
                    menor_ag_np=nprod;
                    ba == true;                    
                } else {
                    if ((mes==8) && (menor_ag > monto)) {
                        menor_ag = monto;
                        menor_ag_np = nprod;                        
                    }
                }

                compra++;

                if (bp==false) {
                    bp = true;
                    np_max=nprod;
                    num_max = num;
                    cant_max = cant;
                } else {
                    if (cant > cant_max) {
                        cant_max = cant;
                        np_max = nprod;
                        num_max = num;
                    }
                }

                num = parseInt(prompt('Enter the supplier number: ',''));
                dia = parseInt(prompt('Enter the day of purchase: ',''));
                mes =  parseInt(prompt('Enter the month of purchase: ',''));
                tf = (prompt('Enter the invoice type: ',''));
                nprod = parseInt(prompt('Enter product number: ',''));
                cant  = parseInt(prompt('Enter amount adquired: ',''));
                pu= parseInt(prompt('Enter unit price: ',''));
            }

            document.write("<br />");
            document.write('The amount of purchases made in the supplier ',n_actual,' were ', compra);
            document.write("<br />");
            document.write('The max-amount in a purchase from the supplier ',n_actual,' has been of ',monto_max);
            document.write("<br />"); 
        }

        document.write("<br />"); 
        document.write('Annual investment in invoice type A was of ', cantA);
        document.write("<br />");
        document.write('Annual investment in invoice type B was of ', cantB);
        document.write("<br />");
        document.write('Annual investment in invoice type C was of ', cantC);
        document.write("<br />");
        document.write('The min-amount purchase in August was a value of ',menor_ag,' and corresponded to ',menor_ag_np);
        document.write("<br />");
        document.write('The product number with max-amount in a purchase was ',np_max,' and it has been made in the supplier ',num_max);