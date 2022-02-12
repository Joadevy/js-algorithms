const subjectContainerHTML = document.querySelector(".subject-container");

// This info is hipothetically on a server.
const subjects = [
    {name: "Physics 1",
    score: 8},
    {name: "Calculus 1 ",
    score: 7},
    {name: "Physics 2",
    score: 7},
    {name: "Linear Algebra",
    score: 9},
    {name: "Calculus 2",
    score: 8},
    {name: "Probability and Statistics",
    score: 10},
    {name: "Discrete Structures 1",
    score: 7},
    {name: "Phisics 3",
    score: 9},
    {name: "Programming 1",
    score: 9},
    {name: "Software Design 1",
    score: 8},
    {name: "Data bases",
    score: 7},
    {name: "Software Design 2",
    score: 8},
    {name: "Programming 2",
    score: 9}
]


// Prompts the 'server' for the object in the array[id].
const getSubject = (id) => {
    return new Promise((resolve,reject) => {
        if (subjects[id] != undefined) setTimeout(()=>{resolve(subjects[id])},Math.random()*500); // The setTimeout emulates the responde-time of the 'server'.
        else reject('There are no subject to display');
    })
}

/* Displays all the subjects in order (as there are in the object). Uses an async because the response-time of the server
change constatly(because it's simulated with Math.random) so does not allow to show it in the correct order without using
an async function.*/
const returnSubject = async() => {
    let arraySubjects = []
    for (let subject in subjects) {
        arraySubjects[subject] = getSubject(subject);
        arraySubjects[subject].then(subj => console.log(subj));
    }
}

returnSubject();
