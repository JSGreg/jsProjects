// arry for holding basic colour types
const colorsArr = ["orange", "blue", "rgba(13, 152, 30)", "#FFFFFF" ];

// button gets the first thing with the btn attribute
const btn = document.getElementById('btn');
// returns first element of matching desendant node 
const color =document.querySelector(".color");

// listens for button clicks
btn.addEventListener("click", function( ) {
    // log
    console.log(document.body);
    // random num 0-3
    const randomNumber = getRandomNum();
    console.log(randomNumber)

    document.body.style.backgroundColor = colorsArr[randomNumber];
    color.textContent = colorsArr[randomNumber];
});

function getRandomNum(){
    return Math.floor(Math.random()*colorsArr.length);
}