var catimg1,mouseimg1,catimg2,mouseimg2
var bgImg,canvas
function preload() {
    //load the images here
    catimg1=loadAnimation("images/cat1.png");
    bgImg=loadAnimation("images/garden.png");
    mouseimg1=loadImage("images/mouse1.png")
    catimg2=loadAnimation("images/cat2.png","images/cat3.png")
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    catimg3=loadAnimation("images/cat4.png")
    mouseimg3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=createSprite(200,150,20,15);
    mouse.addAnimation("mouse",mouseimg1);
    cat=createSprite(250,200,20,15);
    cat.addAnimation("cat",catimg1);

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catimg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    } 
    drawSprites();
    }
    



function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
}
if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
}

}
