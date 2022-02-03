const container = document.querySelector(".container");


function generateKey(name,model,price){ // Returns an array with the data of the key.
    img = "<img src='genericKey.png'>";
    name = `<h2>Key ${name}</h2>`;
    model = `<h3>Model ${model}</h3>`;
    price = `<p>Price: <b>${price}</b></p>`;
        return [img,name,model,price];
}

let documentFragment =  ;

for(let i=0; i<20;i++) {
    let div = document.createElement("DIV");
    div.classList.add(`item-${i}`,`flex-item`);
    let modelRandom = Math.random()*1000;
        modelRandom = Math.round(modelRandom);
    let priceRandom = Math.random()*10+30;
        priceRandom = Math.round(priceRandom);
    const key = generateKey(i+1,modelRandom,priceRandom);
    div.innerHTML = key[0] + key[1] + key[2] + key[3];

}