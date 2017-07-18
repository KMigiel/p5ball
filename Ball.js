function Ball() {
    this.radius = 25;
    this.x = 100;
    this.y = 100;
    this.velx = random(1,3);
    this.vely = random(1,5);
    
    this.display = function(){
        if(this.x > width - this.radius || this.x < this.radius){
            this.velx = -this.velx;
        }
        if(this.y > height - this.radius || this.y < this.radius){
            this.vely = -this.vely;
        }
        this.x += this.velx;
        this.y += this.vely;
        ellipse(this.x,this.y,this.radius*2,this.radius*2);
    }
}