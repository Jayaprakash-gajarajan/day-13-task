var a = document.createElement("div");
a.setAttribute("class", "column");
document.body.append(a);
var b = document.createElement("div");
b.setAttribute("class", "column");
document.body.append(b);
var c = document.createElement("div");
c.setAttribute("class", "column");
var d = document.createElement("div");
d.setAttribute("class", "row");
d.append(a, b, c);
document.body.append(d);

// function foo(tag, att, arr) {
//     var ele = document.createElement(tag);
//     ele.setAttribute(att, arr);
//     return ele;
// }
// let div0 = foo("div", "class", "row")
// let div1 = foo("div", "class", "column1");
// let div2 = foo("div", "class", "column2");
// let div3 = foo("div", "class", "column3");
// div0.append(div1, div2, div3);
// document.body.append(div0);

async function foo2() {
    let fish = await fetch("https://api.catboys.com/img");
    let fish1 = await fish.json();
    let d = document.querySelector(".column3")
    c.innerHTML = `<img src="${fish1.url}">`
    console.log(fish1.url);
}
async function foo() {
    let dog = await fetch("https://dog.ceo/api/breed/borzoi/images/random");
    let dog1 = await dog.json();
    a.innerHTML = `<img src="${dog1.message}">`
    //  console.log(dog1);
}
async function foo1() {
    let food = await fetch("https://foodish-api.herokuapp.com/api/");
    let food1 = await food.json();
    b.innerHTML = `<img src="${food1.image}">`
    //console.log(food1.image);
}
foo();
foo1();
foo2()