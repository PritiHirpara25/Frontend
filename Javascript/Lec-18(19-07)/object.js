/* Javascript Object */

// In JavaScript, almost "everything" is an object.
// ● Booleans can be objects (if defined with the new keyword)
// ● Numbers can be objects (if defined with the new keyword)
// ● Strings can be objects (if defined with the new keyword)
// ● Dates are always objects
// ● Maths are always objects
// ● Regular expressions are always objects
// ● Arrays are always objects
// ● Functions are always objects
// ● Objects are always objects
// All JavaScript values, except primitives, are objects.

// let data = new Object();
// console.log(typeof data)

// let data = {
//     name : "John",
//     age : 25,
//     hobbies : ['Music' , 'Dance'],
//     marks : {
//         maths : 25,
//         science : 28,
//         gujarati : 24
//     },
//     hello : () => ('Hello Guys...')
// }
// console.log(data)
// console.log(data.hello())
// console.log(data.hobbies[0])
// console.log(data.hobbies[1])
// console.log(data.marks.maths)
// console.log(data.marks.science)
// console.log(data.marks.gujarati)
// console.log(data['name'])
// console.log(data['marks'])
// console.log(data['marks']['maths'])
// console.log(data['marks']['science'])
// console.log(data['marks']['gujarati'])
// console.log(data['hobbies']['0'])
// console.log(data['hobbies']['1'])

// let a ='marks'
// console.log(data[a])

/* Add a new field */

// data.new = 'Howwwww'

/* delete field */

// delete data.marks
// console.log(data)


/* Javascript Object Methods */

/* Javascript Object.assign Method */

// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)

// let data1 = {
//     value1 : 'ObjectAssgin1'
// }

// let data2 = {
//     value2 : 'ObjectMethods'
// }

// let data = Object.assign(data1 , data2)

// console.log(data)
// console.log(data1)

/* Javascript Object.create() Method */

// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

// Object.create(proto)
// Object.create(proto, propertiesObject)

// let profile = {
//     firstName : "Priti Hirpara",
//     fullName : function() {
//         console.log("My name is `${this.firstName}`")
//     }
// }

// profile.fullName()

// let secondprofile = Object.create(profile)

// secondprofile.firstName = "Priti Hirpara"

// profile.fullName()

// console.log(profile);

// console.log(secondprofile);

// secondprofile.fullName();

/* Javascript Object.defineproperties() Method */

// The Object.defineProperties() static method defines new or modifies existing properties directly on an object, returning the object.

// Object.defineProperties(obj, props)

// let data1 = {};

// Object.defineProperties(data1 , {
//     property1:{
//         name : 'skillqode',
//         value : 500,
//     },
//     property2:{
//         value: 200,
//         name : 'darshan'
//     }
// })

// console.log(data1.property1)
// console.log(data1)

// Javascript Object.defineproperty() method

// The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

// Object.defineProperty(obj, prop, descriptor)

// let data1 = {};

// Object.defineProperty(data1 , 'property1',
//     {
//         value : 500,
//         writable : false
//     })

//     data1.property1 = 400
     
// console.log(data1.property1);

// console.log(data1)

/* Javascript Object.freeze method */

// The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

// Object.freeze(obj)
// Object.isFrozen(obj)

// let data = {
//     firstName : 'Rahul',
//     lastNAme : 'Mulani',
//     age : 25
// }

// console.log(data)

// data.firstName = 'Ravi'   // change Props

// console.log(data);

// data.address = 'Surat'   // Add Props

// console.log(data)

// let data1 = Object.freeze(data)  //frezze

// console.log(data1)

// DataTransfer.firstName = 'Rajan'  // not change Props

// console.log(data)

// data.gender = 'Male'    // not add Props

// console.log(data);

// delete data.firstName

// console.log(data);

// let data2 = Object.isFrozen(data)

// console.log(data2)

/* Javascript Object.seal() method */

// The Object.seal() static method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. seal() returns the same object that was passed in.

// Object.seal(obj)
// Object.isSealed(obj)

// let data = {
//     firstName : "Rahul",
//     lastName : "Mulani",
//     age : 25
// }

// console.log(data);

// data.firstName = 'Ravi'  // change Props

// console.log(data)

// data.address = 'Surat'  //add Props

// console.log(data)

// let data1 = Object.seal(data)

// console.log(data1)

// data.firstName = 'Ramesh'

// console.log(data)

// data.gender = 'Male'

// console.log(data);

// delete data.lastName

// console.log(data);

// let data2 = Object.isSealed(data)

// console.log(data2)

/* Javascript Object.entries() Method */

// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

// Object.entries(obj)

// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.

// Object.keys(obj)

// The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.

// Object.values(obj)

{
    // let data = {
    //     firstName : 'John',
    //     lastName : 'Doe',
    //     age : 20
    // }

    // for(let [key , value] of Object.entries(data)){
    //     console.log(`${key} = ${value}`);
    // }

    // console.log(Object.keys(data))
    // console.log(Object.values(data))
}

/* Javscript Object.getOwnPropertyNames() Method */

// The Object.getOwnPropertyNames() static method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

// Object.getOwnPropertyNames(obj)

// let data = {
//     firstName : 'John',
//     lastName : 'Doe',
//     age : 20
// }

// console.log(Object.getOwnPropertyNames(data));

/* Javascript Object.hasOwn() Method */

// The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.

// Object.hasOwn(obj, prop)

// let data = {
    // firstName : 'John',
    // lastName : 'Doe',
    // age : 20
// }

// console.log(Object.hasOwn(data , 'firstName'));

/* Javascript Object.is() method */

// The Object.is() static method determines whether two values are the same value.

// Object.is(value1, value2)

// console.log(Object.is('1',1));
// console.log(Object.is(NaN,NaN));
// console.log(Object.is({},{}));
// console.log(Object.is([],[]));
// console.log(Object.is({},[]));
// console.log(Object.is(undefined , undefined));