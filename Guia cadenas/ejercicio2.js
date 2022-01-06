/* 
The script load a word char by char in an array simulating the string behavior. Then asks the user if needs to change
any letter in the word entered, If user enters 'y', it asks for a position and letter, replaces it and asks again.
Finally displays the final word version.
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

        function replace(pos,array) { // If the user enters 'y', it replaces the char in the position entered, and then calls itself again.
            decision = wantReplace();
                if (decision == 'y') {
                    let pos = parseInt(prompt('Enter the number-position do you want to replace: ',''));
                    let replacement = prompt('Enter your new char for the position ',pos,' in the word: ','');
                    array[pos-1] = replacement; 
                    replace(pos,array);
                }
        }

        function wantReplace (){ // Asks about a replace of a letter in the world.
            return d = prompt('Do you want to replace a char in the word entered? (y/n)','');
        }

        function display(array){ // Shows the contain of the final version of the word entered/replaced.
            document.write("Your word is: ");
            array.forEach(element => {
                document.write(element);
            });
        }

        function main (){ // Calls all the other functions
            var word = [];
            var length = parseInt(prompt('Enter the number of chars for your word: ','')); // Maybe it needs to be a function but not for this time :>

            load(length,word);
            replace(length,word);
            display(word);
        }

        main();