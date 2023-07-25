var createdTime;
var clickedTime;
var reactionTime;
var coolingTime = 1000;
coolingTime = prompt("How much Cooling Time you want (in ms)");
function makebox()
{   setTimeout(function() {
    //Creating Box
    document.querySelector(".box").classList.add("boxreal");

    // Changing bg color
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + "," + g + "," + b + ")";
    document.querySelector(".box").style.background = color;

    // Changing shape
    var shape = Math.floor(Math.random() * 2);
    if (shape === 0) {
        document.querySelector(".box").classList.add("square");
        document.querySelector(".box").classList.remove("circle");
    } else {
        document.querySelector(".box").classList.add("circle");
        document.querySelector(".box").classList.remove("square");
    }
    console.log(shape);

    // Changing location
    var randtop = Math.floor(Math.random() * 440) + 5 + "px";
    var randleft = Math.floor(Math.random() * 1365) + 5 + "px";
    document.querySelector(".box").style.top = randtop;
    document.querySelector(".box").style.left = randleft;

    //Noting Starting Time
    createdTime = Date.now();
 },coolingTime)
}
document.querySelector(".box").addEventListener("click", function()
{
    clickedTime = Date.now();
    //remove box
    document.querySelector(".box").classList.remove("boxreal");
    reactionTime = (clickedTime-createdTime)/1000;
    document.querySelector(".printReactionTime").innerHTML="Your reaction time is "+reactionTime+" sec";
    makebox();
});
makebox();
