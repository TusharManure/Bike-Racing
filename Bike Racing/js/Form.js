class Form {

  constructor() {
    //Elements
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.msg = createElement('h2');
  }

  // Hide Function
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.msg.hide();
  }

  // Display
  display(){
    var title = createElement('h2')
    title.html("Multiplayer Bike Racing");
    title.position(displayWidth/2-50, 0);

    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-30, displayHeight/4);
      this.msg.html("Please Wait Other Player Are Still Joining 🤚🤚⏱")
      this.msg.position(550, 300);
    });

  }
}
