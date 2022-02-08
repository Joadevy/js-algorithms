// Selecting the button
const button = document.querySelector(".confirm-button");

// Selecting the error-container
const errorMessageDiv = document.getElementById("error-container");

// Adding the listener for click to execute changes in the week for the exam.
button.addEventListener("click", (e)=> {
    e.preventDefault();
    let valid = validate();
    if (valid != true) {
        errorMessageDiv.classList.remove('showError');
        let elements = document.querySelectorAll(".week");
        let selectedWeeks = document.querySelectorAll(".selected-week");
        for (let element in elements) {
            let week = elements[element];
            week.innerHTML = selectedWeeks[element].value;
            errorMessageDiv.textContent = "You need to select all the weeks!";
        }
    } else {
        errorMessageDiv.classList.add('showError');
        errorMessageDiv.textContent = "You need to select all the weeks!";
    }
})

const validate = () => {
    let weeks = document.querySelectorAll(".selected-week");
    for (let week in weeks) {
        if (weeks[week].value == "") {
            return true
        }
    }
    return false;
}


// Creating an array with some objects.
let students = [{
    name: "Hector Herrera",
    email: "HectorHerrera123@hotmail.com",
    subject:"Logic",
},{
    name: "Laura Gomez",
    email: "gomezlaura@gmail.com",
    subject:"Phisics 1",
},{
    name: "Jaqueline Diaz",
    email: "jaquematediaz@hotmail.com",
    subject:"Logic",
},{
    name: "Pablo Dominguez",
    email: "pablitoElmejor@gmail.com",
    subject:"Maths",
}]

for (let student in students) {
   let data = students[student];
   let name = data["name"];
   let email = data["email"];
   let subject = data["subject"];
   let htmlCode = `
   <div class="grid-item name">${name}</div>
   <div class="grid-item mail">${email}</div>
   <div class="grid-item subject">${subject}</div>
   <div class="grid-item week">
        <select class="selected-week" name="" id="">
            <option value="" disabled selected>Select week</option>
            <option value="1st week">First week</option>
            <option value="2nd week">Second week</option>
        </select>
    </div>`
    document.querySelector('.grid-container').innerHTML += htmlCode;
}