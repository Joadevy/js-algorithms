        /* The script consists of requesting a list of numbers and showing the smallest and the second-smallest 
        with their own positions that have been entered */
        
        var menor;
        var smenor;
        var posm=0;
        var possm=0;
        let pos = 0;
        let num;

        while(num !=0){
            num = parseInt(prompt('Enter a number: ',''));
            pos++;

            if (pos==1){
                menor=num;
                smenor=num;
                posm=pos;
            }

            else {
                if (num < menor) {
                    smenor = menor;
                    possm = posm;
                    menor = num;
                    posm = pos;
                }
            }
        }

        document.write('The smallest number entered was: ', menor);
        document.write ('The smallests position was: ', posm);
        document.write("<br />");
        document.write('The second-smallest number entered was: ', smenor);
        document.write('The second-smallests position was: ',possm);
