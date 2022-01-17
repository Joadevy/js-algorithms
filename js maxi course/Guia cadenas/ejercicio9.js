/*
The script prompts for two words char by char with the same length entered into arrays. Then it copies the second 
string into the first (concatenation) and finally shows it.
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

        function askLength(){ // Asks for the length of the word'll enter.
            return l = parseInt(prompt('Enter the length of your two words: ',''));
        }

        function copyString(strOne,strTwo) { // It copies the content of the second string introduced into the first one.
            strTwo.forEach(element => {
                strOne.push(element);
            });
        }

        function shows(array) { // Shows the final string with the copy of the second one at last.
            array.forEach(element => {
                document.write(element);
            });
        }

        function main(){ // Main function for management and calling the other functions.
            var stringCopy = [];
            var string = [];

            let length = askLength ();
            load(length,stringCopy);
            prompt('Now, the second word with length: ',length);
            load(length,string);
            copyString(stringCopy,string);
            shows(stringCopy);
        }

        main();