// Algorithm that save values in an array and then return if it are in-order or not.

        var v = [];
        let orden = true;
        let leng = parseInt(prompt('Enter the arrays length: ',''));
        let x = 0;

        for (i=0;i<leng;i++){
            let number = parseInt(prompt('Enter a number: ',''));
            v.push (number);
        }

        while ((orden==true) && (x<leng-1)) {
            if (v[x] < v[x+1]) {
                x++;
            } else {
                orden = false;
            }
        }

        if (orden == true) {
            document.write('The array is in-order');
        } else {
            document.write('The array is not in-order');
        }