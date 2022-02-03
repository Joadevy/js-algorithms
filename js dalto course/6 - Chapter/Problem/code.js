const container = document.querySelector(".container");

function generateKey(name,model,price){ // Returns an array with the data of the key.
    img = "<img src='src/genericKey.png' class='key-img'>";
    name = `<h2>Key ${name}</h2>`;
    model = `<h3>Model ${model}</h3>`;
    price = `<p>Price: <b>${price}</b></p>`;
        return [img,name,model,price];
}

let documentFragment = document.createDocumentFragment();

for(let i=1; i<=20;i++) {
    let div = document.createElement("DIV");
    div.classList.add(`item-${i}`,`flex-item`);
    let modelRandom = Math.round(Math.random()*1000);
    let priceRandom = Math.round(Math.random()*10+30);
    const key = generateKey(i,modelRandom,priceRandom);
    div.tabIndex = i;
    div.innerHTML = key[0] + key[1] + key[2] + key[3];
    documentFragment.appendChild(div);
}

container.appendChild(documentFragment);