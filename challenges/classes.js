// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {

    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }

}//CuboidMaker

const cuboid = new CuboidMaker(4, 5, 5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(length, width, height){
        super(length, width, height);
    }

    volumeCube(){
        return this.length * this.width * this.height;
    }//essentially could have used the same volume formula as CuboidMaker, but per the task's request, I created a new method for CubeMaker

    surfaceAreaCube(){
        return 6 * (this.length * this.length); //surface of an area is calculated as, SA = 6a^2, with a representing either the length, width, or height. By definition, the length, width, and height of a cube are all equal. In this scenario, I opted to just represent a with length.
    }
}//CubeMaker

//creating an example
const cube = new CubeMaker(5, 5, 5);

//testing
console.log(cube);
console.log(cube.volumeCube());
console.log(cube.surfaceAreaCube());