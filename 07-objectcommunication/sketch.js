let bubbles =  [];
let unicorn;

function setup() {
    createCanvas(600, 400);
    for(let i = 0; i < 200; i++){
        let x = random(width);
        let y = random(height);
        let r = random(5, 20);
        bubbles[i] = new Bubble(x, y, r);
    }
    unicorn = new Bubble(200, 200, 20);
}

function draw() {
    background(0);

    // if(bubble1.intersects(bubble2)){
    //     background(200, 0, 100);
    // }


    for(let bubble of bubbles){
        bubble.show();
        bubble.move();
        let overlapping = false;
        for(let other of bubbles){
            if(bubble !== other && bubble.intersects(other)){
                overlapping = true;
            }
        }
        if(overlapping){
            bubble.changeColor(255);
        } else {
            bubble.changeColor(0);
        }

    }

}
