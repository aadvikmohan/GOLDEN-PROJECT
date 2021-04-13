var bridge,bridgeImage;
var back,backgroundImage;
var gargoyleImage1,gargoyleImage2,gargoyleImage3,gargoyleImage4,gargoyleImage5;
var gargoyle, gargoyleWalking;
var knightImage1,knightImage2,knightImage3,knightImage4,knightImage5,knightImage6,knightImage7;
var knight, knightRunning;
var invisibleGround;


function preload()
{
  
  backgroundImage = loadImage("Images/Background1.PNG");
  gargoyleWalking = loadAnimation("Images/GargoyleImages/Walk1.png","Images/GargoyleImages/Walk2.png","Images/GargoyleImages/Walk3.png","Images/GargoyleImages/Walk4.png","Images/GargoyleImages/Walk5.png");
  knightRunning = loadAnimation("Images/KnightImages/Run1.png","Images/KnightImages/Run2.png","Images/KnightImages/Run3.png","Images/KnightImages/Run4.png","Images/KnightImages/Run5.png");
}

function setup()
{
  createCanvas(750,500);
  
  back = createSprite(520,150,750,500);
  back.addImage(backgroundImage);
  back.scale = 1.3;
  back.velocityX = -2;
  
  //gargoyle = createSprite(200,200);
  //gargoyle.addAnimation("gargoyleWalking",gargoyleWalking);
  //gargoyle.velocityX = 2;

  knight= createSprite(100,330);
  knight.addAnimation("knightRunning",knightRunning);
  
  invisibleGround = createSprite(375,420,750,20);
  invisibleGround.visible = false;
}

function draw()
{
  background("white");
  
  if(back.x < 270)
  {
    back.x = 520;
  }

  if(keyIsDown("SPACE"))
  {
    knight.velocityY = -10;
  }
  knight.velocityY = knight.velocityY + 0.8;

  knight.collide(invisibleGround);

  drawSprites();
}