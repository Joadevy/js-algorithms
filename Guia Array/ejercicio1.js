/* Script that firstly requests 5 int values and stores them in an array. Then it shows the sum 
of all values. Note: it needs to use 2 loops (one for pushing and the other for showing)
*/
       var summation=0;
        let array = [];

        for (let index = 0; index < 5; index++) {
            let number = parseInt(prompt('Enter a number: ',''));
            array.push(number);
        }

        for (let y= 0; y < 5; y++) {
            summation += array[y];
        }

        document.write('The arrays summatory is equal to: ',summation);
