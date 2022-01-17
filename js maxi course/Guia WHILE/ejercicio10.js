/* The script requires a list of number and then shows the maximum of the negative numbers entered
and the minimum of the positive numbers entered*/
        
        var bp = false;
        var bn = false;
        var num;
        var minp;
        var maxn;

        while (num !=0){
            num = parseInt(prompt('Enter a number: ',''));

            if ((num>0) && (bp==false)) {
                minp = num;
                bp = true;
            }

            else {
                if ((num>0) && (bp!=false) && (num < minp)) { 
                    minp = num;
                }

                else {
                    if ((num<0) && (bn==false)) {
                        maxn = num;
                        bn = true;
                    }

                    else {
                        if ((num<0) && (bn!=false) && (num > maxn)){
                            maxn=num;
                        }
                    }
                }
            }
        }

        document.write('The maximum of the negative numbers entered was: ', maxn);
        document.write("<br />");
        document.write('The minimum of the positive numbers entered was: ', minp);
