const result = document.getElementById('result');
const buttons = document.querySelectorAll('.btn-num');

const add = document.getElementById('btn-plus');
const extract = document.getElementById('btn-minus');
const multiply = document.getElementById('btn-multiply');
const divide = document.getElementById('btn-divide');

const equals = document.getElementById('btn-equals');

let memory;
let innerMemory = 0;
let signMemory;
let operatorResult;

// Numbers on screen using numbers buttons
buttons.forEach((button, index) => {
    button.addEventListener('click', function(){
        let numba = 0;
        let stored;
        if (index != 9){
            stored = result.textContent += index+1;
            numba = parseInt(stored, 10);
            memory = numba;
            if (stored.length > 6) {
                buttons.forEach(button => button.disabled = true);
            }
        } else {
            stored = result.textContent += 0;
            numba = parseInt(stored, 10);
            memory = numba;
        }
        
    })
});


// Operators
function calculate(operator){
    innerMemory += memory;
    memory = 0;
    signMemory = operator;
    result.textContent = '';
    buttons.forEach(button => button.disabled = false);
}

add.addEventListener('click', function(){
    calculate('+');
})

extract.addEventListener('click', function(){
    calculate('-');
})

multiply.addEventListener('click', function(){
    calculate('*');
})

divide.addEventListener('click', function(){
    calculate('/');
})

equals.addEventListener('click', function(){
    if(signMemory === '+'){
        operatorResult = innerMemory + memory;
        result.textContent = innerMemory + memory;
        innerMemory = parseInt(operatorResult, 10);
        memory = 0;
    }
    else if(signMemory === '-'){
        operatorResult = innerMemory - memory;
        result.textContent = innerMemory - memory;
        innerMemory = parseInt(operatorResult, 10);
        memory = 0;
    }
    else if(signMemory === '*'){
        operatorResult = innerMemory * memory;
        result.textContent = innerMemory * memory;
        innerMemory = parseInt(operatorResult, 10);
        memory = 0;
    }
    else if(signMemory === '/'){
        operatorResult = innerMemory / memory;
        result.textContent = innerMemory / memory;
        innerMemory = parseInt(operatorResult, 10);
        memory = 0;
    }
});
