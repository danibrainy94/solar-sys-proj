const showCard = document.querySelectorAll("#info");
const clickArea = document.querySelectorAll("#clickArea");
// const clickRevert = document.getElementById("b-ground");

clickArea.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        console.log(e.currentTarget);
    })
})


// clickArea.addEventListener('click', displayCard);
// clickRevert.addEventListener('click', hideCard);
