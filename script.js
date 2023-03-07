const div = document.createElement('div')
div.classList.add('container')
document.body.appendChild(div)

const row1 = document.createElement('div')
row1.classList.add('row1');
div. appendChild(row1)

const col1 = document.createElement('div')
col1.classList.add('col1');
row1. appendChild(col1)

/* if user inputs number x, 
document.createElement(rowx) appended to div
document.createElement(colx)appended to rowx */

let userInput = prompt('Pick a number')
let colRow = parseInt(userInput);
console.log(Number.isInteger(colRow))

if (Number.isInteger(colRow) === true) {
    console.log(colRow)
}else {
    alert('That is not a number')
    window.location.reload();
    
}












/*const row1 = document.createElement('div')
row1.classList.add('row1');
div. appendChild(row1)

const col1 = document.createElement('div')
col1.classList.add('col1');
row1. appendChild(col1)

const col2 = document.createElement('div')
col2.classList.add('col2');
row1. appendChild(col2)

const col3 = document.createElement('div')
col3.classList.add('col3');
row1. appendChild(col3)

const col4 = document.createElement('div')
col4.classList.add('col4');
row1. appendChild(col4)

const row2 = document.createElement('div')
row2.classList.add('row2');
div. appendChild(row2)*/
