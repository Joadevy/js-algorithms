/* The script prompts for 5 numbers and displays the maximum of them and the position they have been entered. */        
        
        var mayor;
        var pos_mayor;
        for (i = 0; i < 5; i++) {
            let num = parseInt(prompt('Enter a number:',''));
                if (i == 0) { 
                    mayor = num;
                    pos_mayor = i+1;
                }

                else {
                    if (num > mayor) {
                        mayor = num;
                        pos_mayor = i+1;
                    }
                }
        }

        document.write("The highest number is: ",mayor);
        document.write("<br />");
        document.write("The highest number's position entered was: ",pos_mayor);