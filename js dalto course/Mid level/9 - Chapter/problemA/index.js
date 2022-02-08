// Accessing to the value of the inputs name,subject and mail
const name = document.getElementById("name");
const subject = document.getElementById("subject");
const mail = document.getElementById("email");
// Accesing to submit and result elements.
const button = document.getElementById("submit");
const result = document.querySelector(".result");

const validate = () => {
    let error = [];
    error [0] = false;
    // Validates the names length
    if (name.value.length < 5) {
        error [0] = true;
        error[1] = "The name can't contain less than 5 chars";
    } 
    else if (name.value.length > 40) {
        error [0] = true;
        error[1] = "The name can't contain more than 40 chars";
    }

    // Validates the emails length and if it contains '@' and '.'
    else if ((mail.value.length < 5) || 
            (mail.value.length > 40) || 
            (mail.value.indexOf("@") == -1) ||
            (mail.value.indexOf(".") == -1)) {
        error [0] = true;
        error[1] = "The email is invalid";
    }

    // Validates the subject length
    else if ((subject.value.length < 4) || (subject.value.length > 40)) {
        error [0] = true;
        error[1] = "The subject doesn't exist";
    }

    return error;
}

button.addEventListener("click",(e)=>{
    e.preventDefault(); // Avoid sending data
    let error = validate();
        if (error[0] == true) {
            result.textContent = error[1]; // Shows an error-message
            result.classList.add('red');
            result.classList.remove('greem');
        } else {
            result.classList.add('green');
            result.classList.remove('red');
            let inscriptioNumber = Math.round(Math.random()*10000); // Generates a random inscription number.
            result.textContent = `Inscription succesfully submitted, your IN is: ${inscriptioNumber}`; // Shows info to the user
        }
})


