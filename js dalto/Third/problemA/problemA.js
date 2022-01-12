class cellphone { // Defining the cellphone class with the attributes and methods.
    constructor(c,w,sr,cam,ram){
        this.color = c;
        this.weigth = w;
        this.screenRes = sr;
        this.camera = cam;
        this.ram = ram;
    }

    turnOn () {
        alert ('Turning On, please wait');
    }

    reset () {
        alert ('Reset-process iniciated');
    }

    takePhoto () {
        alert ('Taking a photo');
    }

    record () {
        alert ('Recording');
    }
}

// Instantianding the three standard cellphones:

const mobileOne = new cellphone("blue","150 grams","HD","32mp","3gb");
const mobileTwo = new cellphone ("gray","160 grams","HD","24 mp","4gb");
const mobileThree = new cellphone ("black","145 grams","HD","64 mp","3gb");

// Testing the standard methods.
mobileOne.turnOn ();
mobileOne.takePhoto ();
mobileOne.reset();

class cellphonePremium extends cellphone { // Defining the class for the cellphone premium, it inherits attributes for the cellphone and adds an extra cam.
    constructor(c,w,sr,cam,ram,extraCam) {
        super(c,w,sr,cam,ram)
        this.extraCamera = extraCam;
    }

    slowMotionRecording () {            // A new method for a premium function.
        alert ('Recording in slow motion mode');
    }

    facialRecognition () {              // A new method for a premium function.
        alert ('Validating the face');
    }
}

// Instantianding the two premium cellphones:

mobileOnePremium = new cellphonePremium ("black","140 grams","Full HD","64mp","6gb","32mp");
mobileTwoPremium = new cellphonePremium ("pink","145 grams","Full HD","48mp","8gb","16mp");

// Testing the standard (inhered) and premium methods.

mobileOnePremium.turnOn ();
mobileOnePremium.facialRecognition ();
mobileTwoPremium.reset ();


