function setup (){
    createCanvas (1200, 600);
    background(255, 155, 246);
    img = loadImage('pinkdonut.png');
    img2 = loadImage('homersimpson.png');
    img3 = loadImage('pacifier.png');
    img4 = loadImage('maggiesimpson.png');
}


function draw (){
    image(img2, 20, 80, 400, 520);
    image(img4, 980, 300, 210, 325);

    (img, 50, 50, img.width/3, img.height/3);
    (img2, 100, 100, img.width/5, img.height/5);
    (img3, 100, 100, img.width/5, img.height/5);
    (img4, 100, 100, img.width/4, img.height/4);

    if (mouseIsPressed) {
        image(img3, mouseX, mouseY, 80, 120);
        
        
    }
    else {
        image(img, mouseX, mouseY,100, 110);
    }
}