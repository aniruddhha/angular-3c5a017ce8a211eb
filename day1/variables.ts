//es6 -> javascript2015
var i = 10 // no scoping and value can be changed
let j = 20 // scoping and value can be changed 
const k = 30 // scoping and value cant be changed
const pi = 3.14

//es6 -> lambdas or arrows
const fnOld = function () {
    console.log('This is older representation')
}

const fnNew = () => console.log('This is new representation')

// significance of let over var
const nm: string = 'android'
if (true) {
    const nm: string = 'ios'
}
console.log(nm)

// data types in type script
const isOkay: boolean = true
const ver: number = 10
const make: string = 'abc'
const mixed: number | boolean = true
const fn: (() => void) = function () {

}
const obj: {} = { delay: 1 }
const anything: any = () => 10


