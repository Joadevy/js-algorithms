/* Script for tracking the amount of sales using article numbers (only 1-15). 
Then the script have options to show the articles with no sales, the best selling item 
and an option to show any sell-amount by entering an article number. */

          var ventas = [];
          var max = 0;
          var max_art = 0;
          var art = parseInt(prompt('Enter article number: ',''));
          var cv = parseInt(prompt('Enter amount of sales: ',''));
          let acum =0;
          
          for (i=0;i<15;i++){
                ventas[i]=0;
              }

          while (art != 0) {
              ventas[art-1] += cv;
              art = parseInt(prompt('Enter article number: ',''));  
              cv = parseInt(prompt('Enter amount of sales: ',''));           
          }

        for (i=0;i<15;i++){
            if (i==0) {
                max = ventas[0];
                max_art = 1;
            } else {
                if (ventas[i] > max) {
                    max = ventas[i];
                    max_art=i+1;
                   }
                }
            }

            for (i=0; i<15;i++){
                if (ventas[i]==0) {
                    document.write('Article:',i+1,' has no registered sales');
                    document.write("<br />");
                }
            }

            var q = prompt('Do you need to show any amount of sales about an article number? (y/n)','');
            if((q=='y') || (q == 'yes')) {
                cv = parseInt(prompt('Enter an article number: ',''));
                document.write("<br />");
                document.write('The amount of sales of ',cv,' is ', ventas[cv-1]);
                document.write("<br />");
            }

            document.write("<br />");
            document.write('The max registered sales of an article is for article ',max_art,' with the amount of ',max);