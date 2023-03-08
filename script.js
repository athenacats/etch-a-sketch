const div = document.createElement('div')
div.classList.add('container')
document.body.appendChild(div)

//this creates the button
const button = document.createElement('button')
button.classList.add('button')
document.body.insertBefore(button, div)
button.innerText = 'Press This To Set Your Field Size'
button.onclick = function () {

    /* if user inputs number x, 
    document.createElement(rowx) appended to div
    document.createElement(colx)appended to rowx */

    //ask for prompt and convert it to number, if not a number, reload the screen//
    let userInput = prompt('Pick a number')
    let colRow = parseInt(userInput);
    //console.log(Number.isInteger(colRow))

    if (Number.isInteger(colRow) === true && colRow <= 100) {
        for (i = 0; i < colRow; i++) {
            const row = document.createElement('div')
            row.classList.add('row');
            for (j = 0; j < colRow; j++) {
                const col = document.createElement('div')
                col.classList.add('col');
                row.appendChild(col)
            }
            div.appendChild(row) 
        }
    }else if (Number.isInteger(colRow) === true && colRow > 100) {
        alert('Please choose a number less than 100')
        window.location.reload();  
    
    }else {
        alert('That is not a number')
        window.location.reload();   
    }
}

//create a loop that creates rows and columns

/*for (i = 0; i < colRow; i++) {
    const row = document.createElement('div')
    row.classList.add('row');
    for (j = 0; j < colRow; j++) {
        const col = document.createElement('div')
        col.classList.add('col');
        row.appendChild(col)
    }
    div.appendChild(row) 
}*/














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
