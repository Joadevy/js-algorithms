class cellphone { // Defining the cellphone class with the attributes and methods.
    constructor(c,w,sr,cam,ram){
        this.color = c;
        this.weigth = w;
        this.screenRes = sr;
        this.camera = cam;
        this.ram = ram;
        this.status = false;
    }

    turnOn () {
        if (this.status == false) {
            alert ('Turning On, please wait');
            this.status = true;
        } else {
            alert ('The cellphone is already on!');
        }
    }

    turnOff (){
        if (this.status == true) {
            alert ('Turning Off, please wait');
            this.status = false;
        } else {
            this.turnOn ();
        }
    }

    reset () {
        if (this.status == true) {
            alert ('Reset-process iniciated');
            this.turnOff ();
            this.turnOn();
        } else {
            alert (`The cellphone is off!`);        
        }
    }

    takePhoto () {
        alert (`Taking a photo with a ${this.screenRes} resolution`);
    }

    record () {
        alert (`Recording  with a ${this.screenRes} resolution`);
    }

    showInfo () {
        return `
        Color: <b>${this.color}</b> <br>
        Weigth: <b>${this.weigth}</b> <br>
        Screen Resolution: <b>${this.screenRes}</b> <br>
        Ram: <b>${this.ram}</b> <br>
        Camera Resolution: <b>${this.camera}</b> <br>
        `
    }
}

// Instantianding the three standard cellphones:

const mobileOne = new cellphone("blue","150 grams","HD","32mp","3gb");
const mobileTwo = new cellphone ("gray","160 grams","HD","24 mp","4gb");
const mobileThree = new cellphone ("black","145 grams","HD","64 mp","3gb");

// Testing the standard methods.

/*
mobileOne.turnOn ();
mobileOne.takePhoto ();
mobileOne.reset();
mobileOne.turnOn ();
*/


class cellphonePremium extends cellphone { // Defining the class for the cellphone premium, it inherits attributes for the cellphone and adds an extra cam.
    constructor(c,w,sr,cam,ram,extraCam) {
        super(c,w,sr,cam,ram)
        this.extraCamera = extraCam;
    }

    slowMotionRecording () {            // A new method for a premium function.
        alert (`Recording in slow motion mode with the extra cam in a resolution of ${this.extraCamera}`);
    }

    facialRecognition () {              // A new method for a premium function.
        alert ('Validating the face');
    }

    showInfoPremium (){ // A new method that uses the showInfo method adding the extra camera info (exclusive of premium mobiles)
        return this.showInfo() + `
        Extra camera resolution: <b>${this.extraCamera}</b> <br>
        `;
    }
}

// Instantianding the two premium cellphones:

mobileOnePremium = new cellphonePremium ("black","140 grams","Full HD","64mp","6gb","32mp");
mobileTwoPremium = new cellphonePremium ("pink","145 grams","Full HD","48mp","8gb","16mp");

// Testing the standard (inhered) and premium methods.

mobileOnePremium.turnOn ();
mobileOnePremium.facialRecognition ();
mobileTwoPremium.slowMotionRecording();
mobileTwoPremium.reset();

// Showing the standard mobiles specs
document.write(`
<u>Standard mobile phones:</u> <br>
${mobileOne.showInfo()} <br>
${mobileTwo.showInfo()} <br>
${mobileThree.showInfo()} <br>
`)
;

// Showing the standard premium specs
document.write(`
<u>Premium mobile phones:</u> <br>
${mobileOnePremium.showInfoPremium()} <br>
${mobileTwoPremium.showInfoPremium()} <br>
`)
;





