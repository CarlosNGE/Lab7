import { cueTimer } from "./modules/cuepoints";

document.addEventListener("DOMContentLoaded", init)
var myCues;
function init() {

    // create a playlist of functions to call at certain moments in the video.
   myCues = [
        
        { seconds: 4, callback: func1 },
    
    ];

    // setup the cuepoint timer
    cueTimer.setup("vid", myCues);

    // create shortcut variables
    const showHide = document.getElementById("show-hide");
}



function func1() {
    document.querySelector(".show");
       
}