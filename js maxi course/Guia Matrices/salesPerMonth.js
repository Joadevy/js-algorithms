/* This is a little script for handling with matrices. Its related for saves the collected sales for a number
of products (that the user enteres) in the months of the year
*/

        function main(){ // Defines the matrix with an array with 12 arrays for each month of year.
            var salesPerMonth = [ [],[],[],[],[],[],[],[],[],[],[],[] ];
            var amountProducts = askAmount();
            initializeMatrix(salesPerMonth,amountProducts);
            loadMatrix(salesPerMonth,amountProducts);
            show(salesPerMonth,amountProducts);
        }

        function askAmount (){ // Asks about the number of products
            return parseInt(prompt('Enter the amount of products do you have: ',''));
        }

        function initializeMatrix(sales,amount){ // Inicialize with 0 all the celds of the matrix.
            for (m=0;m<12;m++){
                for(s=0;s<amount;s++)  {
                    sales[m][s]= 0;
                }
            }
        }

        function show(array,amount) { // Shows each celd of the matrix in a table row = months / column = amount of sales per each product.
            for (m=0;m<12;m++){
                showNameMonth(m);
                document.write("<br />");
                for(s=0;s<amount;s++)  {
                 document.write(array[m][s]);
                 document.write(' ');
                }
                document.write("<br />");
            }
        }

        function showNameMonth(month) { // Shows the name of month for each row.
            switch (month) {
                case 0:
                    document.write('January: ');
                break;

                case 1:
                    document.write('February: ');
                break;

                case 2:
                    document.write('March: ');
                break;

                case 3:
                    document.write('April: ');
                break;

                case 4:
                    document.write('May: ');
                break;

                case 5:
                    document.write('June: ');
                break;

                case 6:
                    document.write('July: ');
                break;

                case 7:
                    document.write('August: ');
                break;

                case 8:
                    document.write('September: ');
                break;

                case 9:
                    document.write('October: ');
                    break;
        
                case 10:
                    document.write('November: ');
                break;

                case 11:
                    document.write('December: ');
                break;

                default:
                    break;
            }
        }

        function loadMatrix(sales,amount) { // This function asks for the values and loads into the matrix after valitates some things.
            var month = parseInt(prompt('Enter the number of month: ',''));
            var collected = parseInt(prompt('Enter the collected for the month: ',''));
            var product = parseInt(prompt('Enter the product-number:',''));

            while ((month>0) && (month<13) && (collected >= 0) && (product <= amount)) {
                sales[month-1][product-1] += collected;

                month = parseInt(prompt('Enter the number of month: ',''));
                collected = parseInt(prompt('Enter the amount for the month: ',''));
                product = parseInt(prompt('Enter the product-number:',''));
            }
        }
 
        main();