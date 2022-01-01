/* The objective of this script is the managment of the list of the packages sold in the last vacation season. It has a register for each sale with data of
(package number, amount of people included, price per person, total hours in activities, adventure type) and needs to display:
1- Amount of packages sold for each adventure type.
2- Total amount of users in the season.
3- Total collected for sale.
4- Sale with increased collection.
5- The package number and adventure type with less hours registered. */
        
        var cant_pers=0;
        var tot_rec=0;
        var menor_h = 0;
        var menor_paq =0;
        var menor_t = 0;
        let bg = false;

        let np = parseInt(prompt('Enter the package number: ',''));
        let p = parseInt(prompt('Enter the amount of people: ',''));
        let pp = parseInt(prompt('Enter price per person: ',''));
        let ht = parseInt(prompt('Enter total activity hours: ',''));
        let t = parseInt(prompt('Enter activity type: ',''));
        
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
                    menor_h=ht;
                    menor_t=t;
                    menor_paq=np;
                    bg = true;
                } else {
                    if (menor_h > ht) {
                        menor_h=ht;
                        menor_t=t;
                        menor_paq=np;
                    }
                }

                cant_paq++

                if (tot_rec > mayor_imp){
                    mayor_imp = tot_rec;
                    mayor_paq = np;
                }

                document.write("<br />");
                document.write('Total collected for the package ',np,' is: ', tot_rec,'. It belongs to: ',tipo_actual);
                document.write("<br />");

                np = parseInt(prompt('Enter the package number: ',''));
                p = parseInt(prompt('Enter the amount of people: ',''));
                pp = parseInt(prompt('Enter price per person: ',''));
                ht = parseInt(prompt('Enter total activity hours: ',''));
                t = parseInt(prompt('Enter activity type: ',''));
            }

            document.write('Data for the activity ',tipo_actual);
            document.write("<br />");
            document.write('The amount of packages sold in the activity ',tipo_actual,' was ',cant_paq);
            document.write("<br />");
            document.write('The increased collection of activity ',tipo_actual,' was ',mayor_imp,' and belongs to ',mayor_paq);
            document.write("<br />");
        }

        document.write("<br />");
        document.write('The package with less hours was ',menor_paq,' and belongs to the activity ',menor_t,' registering the amount of hours of ',menor_h);
        document.write("<br />");
        document.write('The amount of people that have purchased our packages were ',cant_pers);
