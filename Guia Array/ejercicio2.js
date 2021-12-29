/* Script that use an array of int values and find the maximum of this and the position
 that it was entered. */
        
        function pushing(leng) {  // Push an array with the length entered by the parameter 'leng'
            for (i=0;i<leng;i++) {
                    let number = parseInt(prompt('Enter a number: ',''));
                    name.push(number);
                }

            return name;
        }

        var name = [];
        var max = 0; // contains the max value in the array
        var pos = 0; // tracks the position of the max value
        let tam = parseInt(prompt('Enter arrays length: ',''));
            pushing(tam);
            for (x=0;x<tam;x++) {
                if (x==0){
                    max = name[x];
                    pos = x+1;
                } else {
                    if (name[x]>max) {
                        max = name[x];
                        pos = x+1;
                    }
                }
        }

        document.write('The max value in the array is: ', max);
        document.write("<br />");
        document.write('The position entered of the max value was: ', pos);
