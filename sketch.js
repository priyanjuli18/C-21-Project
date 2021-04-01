var canvas;
var music;
var pinkSurface, blueSurface, greenSurface, yellowSurface;
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    pinkSurface = createSprite(770, 570, 10, 40);
    pinkSurface.shapeColor = "pink";

    blueSurface = createSprite(750, 570, 10, 40);
    blueSurface.shapeColor = "blue";

    yellowSurface = createSprite(730, 570, 10, 40);
    yellowSurface.shapeColor = "yellow";

    greenSurface = createSprite(710, 570, 10, 40);
    greenSurface.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(460, 400, 20, 20);
    box.shapeColor = "white";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    


    //add condition to check if box touching surface and make it bounce
}
