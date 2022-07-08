//steps
//step1: create a new h1 element
//step2: give it some textContent
//step3: give it a class name of "header"
//step4: append it as a child of the div#root
const h1= document.createElement('h1')
h1.textContent="This is an imperative way to program "
h1.className="header"
document.getElementById("root").append(h1)