/* The script uses bubble sort for order a list of number that've been entered. Also brings the
position of each number was pushed.
The algorithm is based on two arrays, the first for collecting and order the list of numbers and 
the second for the tracking the enter position. */

        var array = [];
        var position = [];
        var number = parseInt(prompt('Enter a number (0 for exit): ',''));

        while (number != 0) {
            array.push(number);
            number = parseInt(prompt('Enter a number (0 for exit): ',''));
        }

        for (i=0;i<array.length;i++) {
            position[i]=i+1;
        }

        do {
            var nochanges = false;
            for(i=0;i<array.length-1;i++){
                if(array[i] < array[i+1]){
                    nochanges = true;
                    let aux = array[i];
                    array[i] = array[i+1];
                    array[i+1] = aux;
                    aux = position[i];
                    position[i]=position[i+1];
                    position[i+1]=aux;
                 }
            }
        } while (nochanges == true);


        for (i=0;i<array.length;i++) {
            document.write('The value ', array[i],' was entered in ', position[i], ' position');
            document.write("<br />");
        }