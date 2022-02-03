/* The script loads in the DOM 20 models of a product (keys in this case) and then saves the product-model clicked
by the user so as to send this data to the server. */

const container = document.querySelector(".container"); // Select the HTML div element with the class .container

function generateKey(name,model,price){ // Returns an array with the HTML data of the key.
    img = "<img src='src/genericKey.png' class='key-img'>";
    name = `<h2>Key ${name}</h2>`;
    model = `<h3>Model ${model}</h3>`;
    price = `<p>Price: <b>${price}</b></p>`;
        return [img,name,model,price];
}

let documentFragment = document.createDocumentFragment(); // Creates the fragments for load all the keys.

const changeHidden = (number) => { // Establishes the model-number in tue value attribute of .keyData element.
    document.querySelector(".keyData").value = number; 
}

for(let i=1; i<=20;i++) { // Prepares and loads all of the 20 keys with data for each one.
    let div = document.createElement("DIV"); // create a new element div.
    div.classList.add(`item-${i}`,`flex-item`); // Add two classes
    let modelRandom = Math.round(Math.random()*1000); // Generates a random number between 0-1000 and rounds it.
    let priceRandom = Math.round(Math.random()*10+30); // Generates a random number between 30-40 and rounds it.
    const key = generateKey(i,modelRandom,priceRandom);
    div.addEventListener("click", () => changeHidden(modelRandom)); // Calls the changeHidden when clicks a div.
    div.tabIndex = i; // Put tabindex
    div.innerHTML = key[0] + key[1] + key[2] + key[3]; // Uses this notation because key it's an array and only uses the first 3 cells.
    documentFragment.appendChild(div); // adds each child-div into the fragment.
}

container.appendChild(documentFragment); // Load the child-fragment into the container.