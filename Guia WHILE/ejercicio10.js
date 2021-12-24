<script>
        var bp = false;
        var bn = false;
        var num;
        var minp;
        var maxn;

        while (num !=0){
            num = parseInt(prompt('Ingrese un numero: ',''));

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

        document.write('El mayor de los negativos ingresados fue: ', maxn);
        document.write("<br />");
        document.write('El menor de los positivos ingresados fue: ', minp);
</script>
