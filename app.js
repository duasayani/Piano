//target all buttons

let key1 = document.getElementById("key1");
let key2 = document.getElementById("key2");
let key3 = document.getElementById("key3");
let key4 = document.getElementById("key4");
let key5 = document.getElementById("key5");
let key6 = document.getElementById("key6");
let key7 = document.getElementById("key7");
let key8 = document.getElementById("key8");

//create variables for add music
let sound1 = new Audio ("sound 1.mp3");
let sound2 = new Audio ("sound 2.mp3");
let sound3 = new Audio ("sound 3.mp3");
let sound4 = new Audio ("sound 4.mp3");
let sound5 = new Audio ("sound 5.mp3");
let sound6 = new Audio ("sound 6.mp3");
let sound7 = new Audio ("sound 7.mp3");
let sound8 = new Audio ("sound 8.mp3");

key1.addEventListener("click" , ()=>{
    sound1.currentTime=0;
    sound1.play();
})

key2.addEventListener("click" , ()=>{
    sound2.currentTime=0;
    sound2.play();
})

key3.addEventListener("click" , ()=>{
    sound3.currentTime=0;
    sound3.play();  
})

key4.addEventListener("click" , ()=>{
    sound4.currentTime=0;
    sound4.play();
})

key5.addEventListener("click" , ()=>{
    sound5.currentTime=0;
    sound5.play();
})

key6.addEventListener("click" , ()=>{
    sound6.currentTime=0;
    sound6.play();
})

key7.addEventListener("click" , ()=>{
    sound7.currentTime=0;
    sound7.play();
})

key8.addEventListener("click" , ()=>{
    sound8.currentTime=0;
    sound8.play();
})
