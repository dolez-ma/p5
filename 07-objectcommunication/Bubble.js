class Bubble {
    constructor(x, y, r = 50) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    changeColor(bright) {
        this.brightness = bright;
    }

    contains(px, py){
        let distance = dist(px, py, this.x, this.y);
        return distance < this.r;
    }

    move(){
        this.x += random(-2, 2);
        this.y += random(-2, 2);
    }

    show(){
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
    }

    intersects(other){
        let d = dist(this.x, this.y, other.x, other.y);
        return d < this.r + other.r;
    }
}