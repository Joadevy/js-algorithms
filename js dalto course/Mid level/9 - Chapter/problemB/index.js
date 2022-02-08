// Selecting the button
const button = document.querySelector(".confirm-button");

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
            <option value="1">First week</option>
            <option value="2">Second week</option>
        </select>
    </div>`
    document.querySelector('.grid-container').innerHTML += htmlCode;
}