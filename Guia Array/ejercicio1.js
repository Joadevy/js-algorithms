        var sumatory=0;
        let array = [];

        for (let index = 0; index < 5; index++) {
            let number = parseInt(prompt('Enter a number: ',''));
            array.push(number);
        }

        for (let y= 0; y < 5; y++) {
            sumatory += array[y];
        }

        document.write('The arrays summatory is equal to: ',sumatory);
