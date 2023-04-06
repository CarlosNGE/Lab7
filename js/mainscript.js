import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", init)
var myCues;
function init() {

    // create a playlist of functions to call at certain moments in the video.
   myCues = [
        
        { seconds: 4, callback: func1 },
    
    ];

    // setup the cuepoint timer
    cueTimer.setup("vid", myCues);

    
}



function func1() {
    let display = document.querySelector(".show");
    display.classList.add(".show");

     console.log(display);
}