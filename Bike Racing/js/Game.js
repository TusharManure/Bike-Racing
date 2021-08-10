class Game {
  constructor(){
    this.meassage = createElement('h2');
    this.msg = createElement("h2");
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();

    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }

      form = new Form()
      form.display();
    }


    // Bikes Sprites
    bike1 = createSprite(100,50);
    bike2 = createSprite(300,50);
    bike3 = createSprite(500,50);
    bike4 = createSprite(700,50);
    bikes = [bike1, bike2, bike3, bike4];

    

    // Bikes Images Loaded
    bike1.addImage("Bike1",bimg1);
    bike2.addImage("Bike2",bimg2);
    bike3.addImage("Bike3",bimg3);
    bike4.addImage("Bike4",bimg4);
  }


// Play Division
  play(){
    form.hide();
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      var index = 0;
      var x;
      var y=25;

      for(var plr in allPlayers){
        index = index + 1 ;
        x = displayHeight - allPlayers[plr].distance;;
        y = y + 160;
        bikes[index-1].x = x;
        bikes[index-1].y = y;

        if (index === player.index){
          bikes[index - 1].shapeColor = "red";
          camera.position.x = bikes[index-1].x;
          camera.position.y = displayHeight/2;
        }
      }

    }

   

    //Player Will Go Front Side
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }

    // Player Will Go Back Side
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance =10
      player.update();
    }

    // Roads For Bikes
    road1=createSprite(0,257,1000000,10);
    road2=createSprite(0,423,1000000,10);
    road3=createSprite(0,574,1000000,10);
    road4=createSprite(0,740,1000000,10);
    
    // Game Ending
    if (player.distance<=-2860){
      gameState=2;
      gameo= createSprite(800,350);
      gameo.addImage("Game over",gameoimg);
      this.meassage.html("Game By Tushar Manure.")
      this.meassage.position(displayWidth/2-80, displayHeight/4);
      this.msg.html("Thanks For Playing.")
      this.msg.position(displayWidth/2-70, 300);
      game.update(1);
            
    }

    //Sprites Are Visible/drawed
    drawSprites();
  }
  end(){
    console.log("Game Ended Thanks For Playing")
  }
}