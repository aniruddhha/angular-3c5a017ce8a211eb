// typescript & es6
// OOP - inheritance, polymorphism, abstraction, encapsulation
// Classes and Objects -> Object Oriented Programming

class Animal {
    // -- general terms --
    // features, properties 
    // its patterns

    // -- programming --
    // state - variables
    // behavour - functions

    legs: number // state

    constructor() {
        this.legs = 4
    }

    run() { // behaviour -> act on state
        this.legs = this.legs + 1
        console.log('Running ' + this.legs)
    }
}

const an = new Animal() // new = memory allocation operator = allocates memory on the runtime, for data of type Animal  
an.run()                        // Animal() = constructor = assign default values to state at the time of memory allocation
