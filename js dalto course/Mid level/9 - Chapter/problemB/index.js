// Selecting the button
const button = document.querySelector(".confirm-button");

// Selecting the error-container
const errorMessageDiv = document.getElementById("error-container");

// Selecting the grid-container
const container = document.querySelector(".grid-container");

// Adding the listener for click to validate (and confirm) and execute changes in the week for the exam.
button.addEventListener("click", (e)=> {
    e.preventDefault();
    let valid = validate();
    if (valid != true) {
        let confirmation = confirm("Are you sure to establish these weeks?");
        if(confirmation == true) {
            errorMessageDiv.textContent = "";
            let elements = document.querySelectorAll(".week");
            let selectedWeeks = document.querySelectorAll(".selected-week");
            for (let element in elements) {
                let week = elements[element];
                week.innerHTML = selectedWeeks[element].value;
            }
            document.body.removeChild(button);
        }
    } else {
        errorMessageDiv.classList.add('showError');
        errorMessageDiv.textContent = "You need to select all the weeks!";
    }
})

// Validates if all the weeks-option are selected.
const validate = () => {
    let weeks = document.querySelectorAll(".selected-week");
    for (let week in weeks) {
        if (weeks[week].value == "") {
            return true
        }
    }
    return false;
}


// Creating an array with some objects that are students who will take final exams.
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

let htmlCode = "";
// Creating the structure that select the data of the 'students' object and adds each one as grid-items.
for (let student in students) {
   let data = students[student];
   let name = data["name"];
   let email = data["email"];
   let subject = data["subject"];
   htmlCode += `
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
}

// Assigning all the data to the DOM.
container.innerHTML = htmlCode;