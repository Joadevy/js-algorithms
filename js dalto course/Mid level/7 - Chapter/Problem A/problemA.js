// The scripts needs to show the user the PC resolution and then if they agree with it, they'll confirm the purchase or not.

const purchaseAlert = (trueFalse) => { // Compares the client decision, if it is true generates the order-number, if it is false, opens the amazon's laptop section.
    if (trueFalse == true){
        alert ('Order succesfully completed.');
        const orderNumber = Math.round(Math.random()*1000+30);
        document.write('Order proccessing. Your order-number is ' + orderNumber);
    } else {
        let decision = window.confirm('We hope you can find a better one, want to take a look at? ');
        if (decision == true) {
            window.open('https://www.amazon.com/s?k=laptop&i=computers-intl-ship&__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2LC8MNC94MFSK&sprefix=la%2Ccomputers-intl-ship%2C278&ref=nb_sb_noss_2');
        } else {
            document.write('Thanks for visiting us. Have a good day!');
        }
    }
} 

let decision =  window.confirm('Would you like to adquire it? It has a ' + window.screen.width + ' x ' + window.screen.height + ' res');
purchaseAlert(decision);