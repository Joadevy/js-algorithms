/* 
The script basically asks for two words and checks if the first one contains the second one. It uses arrays for simulate strings and needs to charge 
the words char by char. Then compares if there are matches letter by letter and displays the result. 
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

        function whereIs (lengthS, string,word){ // Searchs if there is a match for the first letter of the word and any position of the string, if there is, saves the position.
            for (i=0;i<lengthS;i++){
                if (string[i]==word[0]) {   
                    return i;
                } 
            }
            return 'n';
        }

        function isIn(lengthS,lengthW,word,string){ // If there was a match, it compares each position if there are matches after the first to the final letter of the word.
            let index = whereIs(lengthS,string,word);
            var j = 1;
            var match = false;

            if (index != 'n') {
                do {
                    if (word[j] == string[j+index]) {
                        match = true; 
                        j++;
                    } else {
                        match = false;
                    }
                } while ((match==true) && (j < lengthW)); 
            }      
            
            if (match == true) {
                    return 1;
                } else {
                    return 0;
                }
        }

        function askLength(){ // Asks for the length of the word'll enter.
            return l = parseInt(prompt('Enter the length of your word: ',''));
        }

        function shows(result) { // Displays the final result
            if (result==1){
                document.write("The word was in the string");
            } else {
                document.write("The word wasn't in the string");
            }
        }

        function main (){ // Contains the arrays and calls all the other functions.
            var string = [];
            var word = [];

            var lengthS = askLength();
            load (lengthS,string);
            var lengthW = askLength();
            load (lengthW,word);
            var r = isIn (lengthS, lengthW, word, string);
            shows(r);
        }

        main();