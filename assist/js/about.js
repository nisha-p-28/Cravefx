//ourteam start
var body = document.getElementById('body');
var team = document.getElementById('ourteam');
var image = document.getElementById('image');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function movebanner(event) {
    var mouseXposition = event.clientX;
    var mouseYposition = event.clientY;
    
    // Separate calculations for X and Y
    var calculateX = mouseXposition / (windowWidth / 3);
    var calculateY = mouseYposition / (windowHeight /3);
    
    // Apply both X and Y translations correctly
    image.style.transform = "translate(-" + calculateX.toString() + "%,-" + calculateY.toString() + "%)";
}

// Listen to mousemove event
body.addEventListener('mousemove', movebanner);


