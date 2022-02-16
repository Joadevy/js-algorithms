
// Obtaining info required by the parameter in the API
const getInfo = async(info) => {
    let request = await fetch("API/api.txt");
    let result = await request.json();
    // Return the data in a promise
    return result[info];
}


const createCards = async() => {
    let students, approved, failed;

    // Trying to get the information from the API
    try {
        students = await getInfo("amountofpeople");
        approved = await getInfo("approved");
        failed = await getInfo("failed");
    } catch (error) {
        console.log('Failed to connect with the API '  + error);
    }
        // Creating each card to show the info
        for (let i=0;i<3;i++) {
            let card = document.createElement("DIV");
            card.classList.add('card');
            card.id = i;
            document.querySelector(".card-container").appendChild(card);
        }

        // Adding data into the cards in order total  / approved / failed
        let cardOne = document.getElementById('0');
        cardOne.innerHTML = `Amount of <b>students</b>: ${students}`;
        let cardTwo = document.getElementById('1');
        cardTwo.innerHTML = `Amount of <b>approved</b>: ${approved}`;
        let cardThree = document.getElementById('2');
        cardThree.innerHTML = `Amount of <b>failed</b>: ${failed}`;
}

// Calling the function
createCards();






