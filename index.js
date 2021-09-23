// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(newDiameter){
        this.radius = newDiameter / 2;
    }

    get circumference(){
        let diam = this.radius * 2;
        let pi = Math.PI;
        return diam * pi
    }

    set circumference(newCircumference){
        let newDiameter = newCircumference / Math.PI
        this.radius = newDiameter / 2
    }

    get area(){
        let sqradius = this.radius * this.radius;
        let pi = Math.PI;
        return sqradius * pi
    }

    set area(newArea){
        let newSqradius = newArea / Math.PI;
        this.radius = Math.sqrt(newSqradius)
    }
}