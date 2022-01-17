// The script receives the amount of numbers and then the numbers to push it into an array. After that checked if are repeated numbers in the array.

        var array = [];
        var brep = false;
        let laps = 0;

        let leng = parseInt(prompt('Enter amount of numbers: ',''));
        for (i=0;i<leng;i++){
            let num = parseInt(prompt('Enter a number: ',''));
            array.push(num);
        }

        while ((brep == false) && (laps<leng)) {
            for (x=laps;x<leng-1;x++){
                if (array[laps] == array[x+1]) {
                    brep=true;
                }
            }
            laps++;
        }

        if (brep != false) {
            document.write('There are repeated numbers')
        } else  {
            document.write('There are not repeated numbers')
        }
