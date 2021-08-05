//Create variables here
var dog, dogIMG, happydogIMG, database, foods, foodstock;
function preload()
{
	//load images here
  dogIMG = loadImage("images/dogIMG.png");
  happydogIMG = loadImage("images/happydogIMG.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodstock = database.ref("Food");
  foodstock.on("value", readstock);
  foodstock.set(20);

  dog = createSprite(250, 350, 10, 60);
  dog.addImage(dogIMG);
  dog.scale = 0.2;

  
}


function draw() {
  background("green");
  if(foods!== undefined){
    textSize(20);
    fill(255);
    text("note:press UP AROWW key to feed drago milk", 50, 50);
    text("food remaining: "+foods, 150, 150);

    if(keywentdown(UP_ARROW)){
      writestock(foods);
      dog.addImage(happydogIMG);
    }

   

    if(foods === 0){
      food = 20
    }

  

  drawSprites();
  //add styles here
  }
}

function writestock(x){
  if(x<=0){
    x = 0;
  }

  else{
    x = x-1;
  }
  database.ref("/").update({
    food:x
  });

}

function readstock(data){
   foods = data.val();
}




