<script>
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

        var num = parseInt(prompt('Ingrese numero de proveedor: ',''));
        let dia = parseInt(prompt('Ingrese dia de compra: ',''));
        let mes =  parseInt(prompt('Ingrese mes de compra: ',''));
        let tf = (prompt('Ingrese tipo de factura: ',''));
        let nprod = parseInt(prompt('Ingrese numero de producto: ',''));
        let cant  = parseInt(prompt('Ingrese cantidad adquirida: ',''));
        let pu= parseInt(prompt('Ingrese precio por unidad: ',''));

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

                num = parseInt(prompt('Ingrese numero de proveedor: ',''));
                dia = parseInt(prompt('Ingrese dia de compra: ',''));
                mes = parseInt(prompt('Ingrese mes de compra: ',''));
                tf = (prompt('Ingrese tipo de factura: ',''));
                nprod = parseInt(prompt('Ingrese numero de producto: ',''));
                cant  = parseInt(prompt('Ingrese cantidad adquirida: ',''));
                pu= parseInt(prompt('Ingrese precio por unidad: ',''));
            }

            document.write("<br />");
            document.write('La cantidad de compras realizadas al proovedor ',n_actual,' fueron ', compra);
            document.write("<br />");
            document.write('El monto maximo en una sola compra al  proveedor ',n_actual,' ha sido de ',monto_max);
            document.write("<br />"); 
        }

        document.write("<br />"); 
        document.write('Inversion anual en facturas de tipo A fue de ', cantA);
        document.write("<br />");
        document.write('Inversion anual en facturas de tipo B fue de ', cantB);
        document.write("<br />");
        document.write('Inversion anual en facturas de tipo C fue de ', cantC);
        document.write("<br />");
        document.write('La compra con menor monto de agosto tuvo un valor de ',menor_ag,' y correspondio al producto ',menor_ag_np);
        document.write("<br />");
        document.write('El numero de producto con mayor cantidad comprada en una sola compra fue ',np_max,' y se realizo al proveedor ',num_max);
</script>