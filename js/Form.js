class Form {
  constructor() {
    this.input =createInput("").attribute("placeholder","Enter Your Name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("assets/title.png");
    this.greeting =createElement("h2");//heading size
  }

  setElementPosition(){
    this.titleImg.position(120,60);
    this.input.position(width/2-110,height/2-80);
    this.playButton.position(width/2-90,height/2-20);
    this.greeting.position(width/2-300,height/2-100);
  }

  setElementstyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  
  display(){
this.setElementPosition();
this.setElementstyle();
  }
}
