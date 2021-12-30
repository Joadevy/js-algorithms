/* The script prompts two numbers and then shows the numbers between those two.*/

            var n1 = parseInt(prompt('Enter the first number',''));
            var n2 = parseInt(prompt('Enter the second number',''));
            var mayor=0;
            var menor=0;

            if (n1 > n2){
                    mayor = n1;
                    menor = n2;
                }

                else {
                    mayor=n2;
                    menor=n1;
            }

            while (menor < mayor-1) {
                menor++;
                document.write(menor);
                document.write("<br />");
            }
