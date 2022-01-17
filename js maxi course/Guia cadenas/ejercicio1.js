/* 
The script prompts for a word char by char and then loads them into an array simulating a string.
The word must be < 15 characters. Finally the script shows the amount of 'a' in the entered word.
*/

        function load(length,array) { // Loads an array for a word with < length digits char by char.
            let i = 0;

            while (i<length) {
                var char = prompt('Enter a character: ');
                if (char != '.') {
                    array.push(char);
                } else {
                    i = length;
                }
                i++;
            }
        }

        function countA (length,array) { // Counts the amount of A in the array.
            let i = 0;
            var cont = 0;

            while ((array[i]!='\0') && (i<length)) { // The != '\0' is not necesary in js because arrays don't need the specified length, It's useful in C++.
                if (array[i] == 'a') {
                    cont++;                 
                }

                i++;
            }

            return cont;
        }

        function showcountA(amount){ // Shows the text for the function with the amount related.
            document.write('The amount of A in the word entered is: ',amount);
        }

        function main(){ // Calls the entire program
            var word = [];

            load (15,word);
            var amountA = countA (15,word);
            showcountA(amountA);
        }

        main();