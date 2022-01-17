        /* That script consist in a function that receives a number and returns 1 if the number entered
        was prime or 0 if it wasn't. Then the function main requests a list of numbers and returns the average only
        for the prime numbers entered.*/
        
        const primo = (n1) => {
            let cant = 0;
            let r=0;
            
            for (i=1; i<=n1;i++){
                if (n1 % i == 0) {
                    cant++;            
                }
            }

            if (cant == 2) {
                r=1;        
            }

            return r;
        }

        function main () {
            var cantpr = 0;
            var acumpr = 0;

            let  num = parseInt(prompt('Enter a number: ',''));
            while (num !=0) {
                var p = primo(num);

                if (p == 1) {
                    cantpr++;
                    acumpr+=num;                
                }
            
                num = parseInt(prompt('Enter a number: ',''));
            }

            p = (acumpr / cantpr);
            document.write('Average of prime numbers: ',p);
        }