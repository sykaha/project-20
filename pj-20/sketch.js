
var bgimage;
var cat1img
var cat2img
var cat4img
var mouse1img,mouse2img,mouse4img
function preload() {
    bgimage=loadImage("images/garden.png")
    cat1img=loadAnimation("images/cat1.png")
    cat2img=loadAnimation("images/cat2.png","images/cat3.png")
    cat4img=loadAnimation("images/cat4.png")
    mouse1img=loadAnimation("images/mouse1.png")
    mouse2img=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse4img=loadAnimation("images/mouse4.png") 
    //load the images here
}

function setup(){
    createCanvas(1000,800);
  cat=createSprite(870,600)
  cat.addAnimation("sleepingcat",cat1img)
cat.scale=0.2
mouse=createSprite(200,600)
mouse.addAnimation("standingmouse",mouse1img)
mouse.scale=0.15
    //create tom and jerry sprites here

}

function draw() {

    background(bgimage);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("catstanding",cat4img)
        cat.x=300
        cat.scale=0.2
        cat.changeAnimation("catstanding")   
        mouse.addAnimation("mousestanding",mouse4img)
        mouse.scale=0.15
        mouse.changeAnimation("mousestanding")
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-5
        cat.addAnimation("catrunning",cat2img)
        cat.changeAnimation("catrunning")
        mouse.addAnimation("mouseteasing",mouse2img)
        mouse.frameDelay=25
        mouse.changeAnimation("mouseteasing")
    }

  //For moving and changing animation write code here


}
