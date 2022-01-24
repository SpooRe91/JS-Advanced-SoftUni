class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static distance(obj1,obj2){
        return Math.sqrt(Math.pow(obj1.x-obj2.x,2) + Math.pow(obj1.y-obj2.y,2));
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
