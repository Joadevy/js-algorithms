/* The scripts consists in processing a list of numbers and displaying the max of those and the positions
it was entered.*/
        
        let num;
        let pos = 0;
        var max;
        var posMaximo;

        while (num != 0) {
            num = parseInt(prompt('Enter a number:',''));
            pos++; 
                if (pos == 1){
                    max = num;
                    posMaximo = pos;         
                }
                
                else {
                    if (num > max) {
                        max = num;
                        posMaximo = pos;
                    }
                }
        }
        
        document.write('The max value entered is: ',max);
        document.write("<br />");
        document.write ('The max value position was: ',posMaximo);
