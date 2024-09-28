// document.getElementById('firstHeading').id
// 'firstHeading'

// document.getElementById('firstHeading').innerHTML
// '<span class="mw-page-title-main">JavaScript</span>'

// document.getElementById('firstHeading').className
// 'firstHeading mw-first-heading'

// document.getElementById('firstHeading').class
// undefined

// document.getElementById('firstHeading').classList
// DOMTokenList(2) ['firstHeading', 'mw-first-heading', value: 'firstHeading mw-first-heading']

// document.getElementById('firstHeading').innerHTML = 'PRITI'
// 'PRITI'

// document.getElementById('firstHeading')
{/* <h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​PRITI​</h1>​ */}

// document.getElementById('firstHeading').innerHTML = '<h1>Hello</h1>'
// '<h1>Hello</h1>'

// document.getElementById('firstHeading')
// <h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">
//     ​<h1>​Hello​</h1>
// ​</h1>​

// document.getElementById('firstHeading').getAttribute
// ƒ getAttribute() { [native code] }

// document.getElementById('firstHeading').getAttribute('id')
// 'firstHeading'

// document.getElementById('firstHeading').getAttribute('class')
// 'firstHeading mw-first-heading'

// document.getElementById('firstHeading')
// <h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">
//     ​<h1>​Hello​</h1>
// ​</h1>

// document.getElementById('firstHeading').style.color = 'white'
// 'white'

// document.getElementById('firstHeading').style.backgroundColor = 'green'
// 'green'

/* difference between innerText , textContent and innerHTML */

let add = document.getElementById('firstheading')
// add.innerText 
// add.innerContent = 'Hello'
// add.innerHTML = 'Hello'
console.log(add);

// document.getElementById('firstHeading').textContent
// 'Hello'

// document.getElementById('firstHeading').innerHTML
// '<h1>Hello</h1>'