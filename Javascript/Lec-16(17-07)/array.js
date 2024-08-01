/* Javascript array.flat() Method */

// flat()
// flat(depth)

// let data = [10,20,30,40,50,[60,70]]
// console.log(data.flat());

// let data = [10,20,[30,40,[50,[60,70]]]]
// console.log(data.flat());

// let data = [10,20,[30,40,[50,[60,70]]]]
// console.log(data.flat(2));

// let data = [10,20,[30,40,[50,[60,70]]]]
// console.log(data.flat(Infinity));

/* Javascript flatMap() Method */

// let data = [10,20,30,40,50]
// console.log(data.flatMap((ele)=>ele*2))

/* Javascript array.foreach() Method */

// let data = [10,20,30,40,50,60,70]
// let total = 0;
// data.forEach((ele)=>{
//     total += ele;
// });
// console.log(total);

/* Javascript array.map() Method */

// let data = [10,20,30,40,50,60,70]
// let newData = data.map((ele)=>{
//     return ele*2
// });
// console.log(newData);

/* Javascript array.filter() Method */

// let data = [10,20,30,40,50,60,70]
// data = data.filter((ele)=>ele>=30)
// console.log(data)

/* Javascript array.find() Method */

// let data = [10,20,30,40,50,60,70]
// data = data.find((ele)=>ele<30)
// console.log(data)

/* Javascript array.findIndex () Method */

// let data = [10,20,30,40,50,60,70]
// data = data.findIndex((ele)=>ele>50)
// console.log(data)

/* Javascript array.findLastIndex () Method */

// let data = [10,20,30,40,50,60,70]
// data = data.findLastIndex((ele)=>ele<50)
// console.log(data)

/* Javascript array.findLast () Method */

// let data = [10,20,30,40,50,60,70]
// data = data.findLast((ele)=>ele<50)
// console.log(data)

/* Javascript array.every() Method */

// let data = [10,20,30,40,50,60,70]
// data = data.every((ele)=>ele<80)
// console.log(data)

/* Javascript array.some() Method */

// let data = [10,20,30,40,50,60,70]
// data = data.some((ele)=>ele<70)
// console.log(data)

/* Javascript array.reduce() Method */

// let data = [10,20,30,40,50,60,70]
// data = data.reduce((total,ele)=>total+=ele,50)
// console.log(data)

/* Javascript array.reduceRight() Method */

// let data = [10,20,30,40,50,60,70]
// data = data.reduceRight((total,ele)=>total+=(ele/10),50)
// console.log(data)

/* Javascript array.entries() Method */

// let data = [10,20,30,40,50,60,70]
// let a = data.entries()
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)

/* Javascript array.copywithin() Method */

// let data = [10,20,30,40,50,60,70]
// console.log(data.copyWithin(3,0))
// console.log(data.copyWithin(3,0,2))