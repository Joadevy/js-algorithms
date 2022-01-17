/* The script prompts for the length and a word letter by letter and loads it into an array so as to simulate a string.
Then inverts the word and shows the result.
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

        function invert(length,array){ // Inverts each letter of the entered word.
            let i = 0;
            let j = length;
            
            for (i=0;i<j;i++){
                let aux = array[i];
                    array [i] = array [j];
                    array [j] = aux;
                    j--;
            }
        }

        function askLength(){ // Asks for the length of the word'll enter.
            return l = parseInt(prompt('Enter the length of your word: ',''));
        }

        function shows(array){ // Shows each element of the array.
            array.forEach(element => {
                document.write(element);
            });
        }

        function main (){ // Calls the other functions
            var word = [''];
            length = askLength();

            load(length,word);
            invert (length,word);
            shows(word);
        }

        main();