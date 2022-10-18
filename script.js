console.log(randomPersonData);

/* const button = document.getElementById('btn');

button.addEventListener("click", function(){
    console.log("clicked");
    const countryList = randomPersonData.map ((person) => {
        return person.region;
    })
    console.log(countryList);
    const addToDom = person => {
        randomPersonData.forEach(person => {
            //const li = document.createElement("li");
            //li.innerHTML = "country";
            //return li;
            const buttonClick = document.getElementById('btn');
            const listItem = document.createElement('li');
            buttonClick.append(listItem);
        })
    }
}) */

// OPDRACHT CAPRICORN

// toon voornaam, achternaam en foto

const isAWomanOver30 = randomPersonData.filter ((person) => {
    return person.gender === "female";
}) .filter((person) => {
    return person.age > 30;
})
console.log(isAWomanOver30);

/*const isOver30 = randomPersonData.filter ((person) => {
    return person.age > 30;
})
console.log(isOver30); // hoe deze koppelen aan de isWoman..... */


// geboren tussen 22 december en 19 januari. Hoe? How can I filter between 2 dates JS

// sorteren op voornaam randomPersonData.sort(sortByFirstName)? const sortByFirstName = person => person.name(sort);
// sortByFirstName();

// toon voornaam, achternaam en foto -> 1 of 3 functies maken?? Met create element li of innerhtml en waarom?

const showPeople = (isAWomanOver30) => {
    isAWomanOver30.forEach(person =>{
        const newLi = document.createElement("li");
        const newImg = document.createElement("img");
        newLi.appendChild(person.name, person.surname);
        newImg.src = person.photo;
    })
}

showPeople();

const button = document.getElementById('btn');

button.addEventListener ("click", function(){
    console.log("clicked");
    // hier de functie voor het tonen van de naam en foto oproepen?
})