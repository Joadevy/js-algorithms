/*
The script prompts for different words char by char. For separating each word the user needs to introduce a dot-char '.'
Then for finish the program, the user needs to introduce the 'zzz' word (char by char). Basically the script loads the words in
an array and compares if the word is valid (different than 'zzz') and checks if the introduced word is longest than. Finally
shows the result and the amount of letters of the longest word introduced. 
*/

        function load(array) { // Loads an array for a word with < length digits char by char.
            var char = prompt('Enter a character: ');

            while (char != '.') {
                    array.push(char);
                    char = prompt('Enter a character: ');
            }
        }

        function count(array) { // Counts the elements of an array and returns it.
            var cont = 0;
            array.forEach(element => {
                cont++;
            });

            return cont;
        }

        function isValid (array){ // Checks if the word entered is different than 'zzz'
            if ((array[0]=='z') && (array[1]=='z') && (array[2]=='z')){
                return false;
            } else {
                return true;
            }
        }

        function copy(array) { // It copies the elements of an array in another and then empty it.
            return array.splice(0,array.length);
        }

        function show(array) { // Display each element of an array.
            array.forEach(element => {
                document.write(element);
            });
        }

        function isGreater (chars_max,word,wordLongest){ // Compares the word entered with the wordLongest for finding the longest and loads it in wordLongest.
            let wordChars = count(word);
                
                if (wordChars > chars_max) {
                    return wordLongest = copy(word);
                }
        }

        function process(valid,wordLongest,word) { // Processes the control variables for managment the different words entered.
            var flag = false;
            var chars_max = 0;

            while (valid == true) {
                if ((flag == false)&&(valid == true)) {
                    wordLongest = copy(word);
                    chars_max = count (wordLongest);
                    flag = true;

                } else {
                    if (flag != false) {
                        wordLongest = isGreater(chars_max,word,wordLongest);
                        chars_max = count(wordLongest);
                    }
                }

                load(word);
                valid = isValid(word);
            }
            return wordLongest;
        }

        function display(wordLongest){ // Receives the wordLongest and shows it + the amount of letters of it.
            alert('The zzz is the final string, thanks for using it :)');
            document.write('The longest word entered was: ');
            show(wordLongest);
            var char_max = count(wordLongest);
            document.write("<br />");
            document.write('The amount of char of the longest word is: ',char_max);
        }

        function main (){ // Invokes the different functions.
            var word = [];
            var wordLongest = [];

            load(word);
            var valid = isValid(word);
            wordLongest = process(valid,wordLongest,word);
            display(wordLongest);
        }

        main();