class App {
    constructor(n,aod,s,w){
        this.name = n;
        this.amountOfDownloads = aod;
        this.scoreReputation = s;
        this.weight = w;
        this.status = false;
    }

    open() {
        if (this.status == false){
            alert ('Loading App, please wait');
            this.status = true;
        } else {
            alert ('The app is already open!');
        }
    }

    close () {
        if (this.status != false) {
            alert ('App closed');
            this.status = false;
        } else {
            alert ('The app is not running');
        }
    }

    uninstall () {
        if (this.status == false) {
            let confirm = prompt ('Are you sure? (y/n)','');
            if ((confirm == 'y') || (confirm == 'Y')) {
                alert ('Succesfully uninstalled');
            }
        } else {
            alert ('Close the app before uninstall');
        }
    }

    showInfo () {
        return(`
        App: <b style = "color:blue;">${this.name}</b> <br>
        Amount of Downloads: <b>${this.amountOfDownloads}</b> <br>
        Score reputation: <b>${this.scoreReputation}</b> <br>
        Weight: <b>${this.weight}</b> <br>
        `)
    }
}

const fb = new App("Facebook",15000,"4.3 stars","200mb");
const tw = new App ("Twitter",12500,"4.8 stars","150mb");

//fb.open();
//fb.close();
//fb.uninstall();
document.write(`
<u style = "color:red;">APP LIST:</u> <br><br>
${fb.showInfo()} <br>
${tw.showInfo()} <br>
`);