function preload(){
    titleimg = loadImage("father's-day-1.png");
   
  
}
function setup(){
  createCanvas(displayWidth-37,displayHeight-200);


   frameRate(35);
   form = new Form();
}

function draw(){
background("orange");


var titlephoto = createSprite(displayWidth/4-120,displayHeight/2-230);
titlephoto.addImage(titleimg);

title = createElement('h1');
title.html("FATHER'S DAY QUOTES AND QUESTION");
title.position(displayWidth/2 - 165,5);

form.display();


quote1 = createElement('h1');
quote1.html("“Dad Is A son’s first hero, a daughter’s first love.”")
quote1.position(displayWidth/2-400,displayHeight/2+140);

quote2 = createElement('h1');
quote2.html("“One father is more than a hundred schoolmasters.”")
quote2.position(displayWidth/2-400,displayHeight/2+70);

quote3 = createElement('h1');
quote3.html("“A father doesn’t tell you that he loves you. He shows you.”")
quote3.position(displayWidth/2-400,displayHeight/2+100);


 questions();
drawSprites();
fill(255);
textSize(30);
text("*This is for my dad*",950,100);
text("*my father is my real superHero*",870,150);
}


function questions(){
ques1 = createElement('h1');
ques1.html("1.Who Is Hero for your life?");
ques1.position(450,50);

ques2 = createElement('h1');
ques2.html("2.What Will the gift that you want to suprise your dad?");
ques2.position(450,160);

ques3 = createElement('h1');
ques3.html("3.On which day we celebrate fathers day every year?");
ques3.position(450,260);

ques4 = createElement('h1');
ques4.html("4.the first Observance of fathers day held in which day?");
ques4.position(450,350);


}
function hide(){
  ques1.hide();
}