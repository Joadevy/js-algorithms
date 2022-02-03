const container = document.querySelector(".container");


function generateKey(name,model,price){ // Returns an array with the data of the key.
    img = "<img src='genericKey.png'>";
    name = `<h2>${name}</h2>`;
    model = `<h3>${model}</h3>`;
    price = `<p>Price: <b>${price}</b></p>`;
        return [img,name,model,price];
}

for(let i=0; i<20;i++) {
    let random = Math.random()*10+30;
    random = Math.round(random);
    const key = generateKey(`Key ${i+1}`, `Model y${i+5}`,`${random}`);
    container.innerHTML += key[0] + key[1] + key[2] + key[3];
}