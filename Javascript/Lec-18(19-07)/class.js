/* Javascript Class */

class JSHello{
    constructor (name , age){
        this.name = name;
        this.age = age;
        this.gender = 'Male'
    }
    sayHello(){
        return `My name is ${this.name} and my age is ${this.age}, gender is ${this.gender}.`
    }
};

let abc = new JSHello('John Peter',25)
console.log(abc.sayHello())