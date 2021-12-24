<script>
            var n1 = parseInt(prompt('Ingrese el primer numero',''));
            var n2 = parseInt(prompt('Ingrese el segundo numero',''));
            var mayor=0;
            var menor=0;

            if (n1 > n2){
                    mayor = n1;
                    menor = n2;
                }

                else {
                    mayor=n2;
                    menor=n1;
            }

            while (menor < mayor-1) {
                menor++;
                document.write(menor);
                document.write("<br />");
            }
</script>
