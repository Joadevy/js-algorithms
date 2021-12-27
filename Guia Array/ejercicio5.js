 // The script charge a phrase char by char in an array and then replace all the 'a' letters for an 'e'
 
        var array = [];
        let tecla = prompt('Introduce a character: ','');

        while (tecla != '.'){
                array.push(tecla);
                tecla = prompt('Introduce a character: ','');
        }

        for (i=0;i<=array.length;i++) {
            if (array[i] == 'a') {
                array[i] = 'e';
            }
        }

        document.write(array);
