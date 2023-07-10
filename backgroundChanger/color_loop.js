// arry for holding hex values
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// button gets the first thing with the btn attribute
const btn = document.getElementById('btn');
// returns first element of matching desendant node 
const color =document.querySelector(".color");

// listens for button clicks

// testBool = false;

let testBool = false;
function toggle() {
    testBool = !testBool;
}
// console.log(testBool);
btn.addEventListener("click", function( ) {
    // log
    console.log(testBool);
    while (testBool = true) {

        // console.log("While" + testBool);
        hexColor = "#";
        for (i=0; i<6; i++){
            // console.log("for" + testBool);
            hexColor += hex[getRandomNum()]
        }
        color.textContent=hexColor;
        document.body.style.backgroundColor= hexColor;

        //stops loop (Sets to false but doesn't stop loop?) might need to drag script from color_show.html
        // boolStop= coin();
        // console.log(boolStop)
        // if(boolStop%2 == 0){
        
        //     testBool=false;
        //     console.log(testBool)
        // }
        btn.addEventListener("click", function( ) {
            testBool == false;
        });
    }
});
// console.log(testBool);
function getRandomNum(){
    return Math.floor(Math.random()*hex.length);
}

function toggle() {
    testBool = !testBool;
}

function coin(){
    return Math.floor(Math.random()*10);
}