const showCard = document.getElementById("info");
const clickArea = document.getElementById("clickArea");
// const clickRevert = document.getElementById("b-ground");

const visibleCard = showCard.classList;

function displayInfo () {
    visibleCard.classList.add("visibleCard");

}

clickArea.addEventListener('click', displayInfo);
// clickRevert.addEventListener('click', hideCard);
