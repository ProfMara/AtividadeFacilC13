var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var obs, obs1, obs2, obs3, obs4, obs5, obs6;


function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadAnimation("trex_collided.png");

    groundImage = loadImage("ground2.png");

    cloudImage = loadImage("cloud.png");

    obs1 = loadImage("obstacle1.png");
    obs2 = loadImage("obstacle1.png");
    obs3 = loadImage("obstacle1.png");
    obs4 = loadImage("obstacle1.png");
    obs5 = loadImage("obstacle1.png");
    obs6 = loadImage("obstacle1.png");

}

function setup() {
    createCanvas(600, 200);



    trex = createSprite(50, 160, 20, 50);
    trex.addAnimation("running", trex_running);
    // trex.addAnimation("collided",trex_collided)
    trex.scale = 0.5;

    ground = createSprite(200, 180, 400, 20);
    ground.addImage("ground", groundImage);
    ground.x = ground.width / 2;
    ground.velocityX = -4;

    invisibleGround = createSprite(200, 190, 400, 10);
    invisibleGround.visible = false;


}

function draw() {
    background(0);



    if (keyDown("space") && trex.y >= 100) {
        trex.velocityY = -10;
    }

    trex.velocityY = trex.velocityY + 0.8

    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }

    trex.collide(invisibleGround);

    //gerar as nuvens
    spawnClouds();

    gerarObs();

    drawSprites();
}

function spawnClouds() {
    //escreva o código aqui para gerar as nuvens
    if (frameCount % 60 === 0) {
        cloud = createSprite(600, 100, 40, 10);
        cloud.addImage(cloudImage)
        cloud.y = Math.round(random(10, 60))
        cloud.scale = 0.4;
        cloud.velocityX = -3;

        //ajuste a profundidade
        cloud.depth = trex.depth
        trex.depth = trex.depth + 1;

    }
}


function gerarObs() {

    obs = createSprite(600, 165, 70, 20);
    obs.velocityX = -5;


}