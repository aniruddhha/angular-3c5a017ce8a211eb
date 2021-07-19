// typescript & es6
// OOP - inheritance, polymorphism, abstraction, encapsulation
// Classes and Objects -> Object Oriented Programming
var Animal = /** @class */ (function () {
    function Animal() {
        this.legs = 4;
    }
    Animal.prototype.run = function () {
        this.legs = this.legs + 1;
        console.log('Running ' + this.legs);
    };
    return Animal;
}());
var an = new Animal(); // new = memory allocation operator = allocates memory on the runtime, for data of type Animal  
an.run(); // Animal() = constructor = assign default values to state at the time of memory allocation
