var brush,brushImg;
var bus,busAni;
var toothpaste,toothpasteImg;
var comb,combImg;
var perfume,perfumeImg;
var bag,bagImg;
var food,foodImg;
var money,moneyImg;
var uniform,uniformImg;
var uniBoy,uniBoyImg
var boy,boyImg;
var bgImg;

function preload() {

    bgImg = loadImage("images/bg.jpg");
    boyImg = loadImage("images/boy.png");

    brushImg = loadImage("images/brush.png");
    toothpasteImg = loadImage("images/toothpaste.png");
    combImg = loadImage("images/comb.png");
    perfumeImg = loadImage("images/perfume.png");
    bagImg = loadImage("images/backpack.png");
    foodImg = loadImage("images/food.png");
    moneyImg = loadImage("images/money.png")
    uniformImg = loadImage("images/uniform.png")
    uniBoyImg = loadImage("images/uniforrm(boy).jpg")

    busAni = loadAnimation("images/bus1.png","images/bus2.png","images/bus3.png","images/bus4.png");
}

function setup(){
    var canvas = createCanvas(1200,600);

    boy = createSprite(750,400,20,20);
    boy.addImage("BOY",boyImg)
    boy.scale=0.3;

    uniBoy = createSprite(900,550,40,40)
    uniBoy.addImage("UNIBOY",uniBoyImg)
    uniBoy.scale= 0.1;

    brush = createSprite(100,550,40,40)
    brush.addImage("BRUSH",brushImg)
    brush.scale= 0.1;

    toothpaste = createSprite(200,550,40,40)
    toothpaste.addImage("TOOTHPASTE",toothpasteImg)
    toothpaste.scale= 0.2;

    comb = createSprite(300,550,40,40)
    comb.addImage("COMB",combImg)
    comb.scale= 0.1;

    perfume = createSprite(400,550,40,40)
    perfume.addImage("PER",perfumeImg)
    perfume.scale= 0.1;

    bag = createSprite(500,550,40,40)
    bag.addImage("BAG",bagImg)
    bag.scale= 0.2;

    food = createSprite(600,560,40,40)
    food.addImage("FOOD",foodImg)
    food.scale= 0.4;

    money = createSprite(700,570,40,40)
    money.addImage("MONEY",moneyImg)
    money.scale= 0.2;

    uniform = createSprite(800,550,40,40)
    uniform.addImage("UNI",uniformImg)
    uniform.scale= 0.4;

    bus = createSprite(200,400,20,20)
    bus.addAnimation("BUS",busAni)
    bus.scale=0.5;
}

function draw(){
 background(bgImg);
    showTime();

    drawSprites()
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    //document.getElementById("MyClockDisplay").innerText = time;
    //document.getElementById("MyClockDisplay").textContent = time;
    fill ("white");
    textSize (30);
    text(time,1000,50)
    setTimeout(showTime, 1000);
    
}


