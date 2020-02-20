const input = document.getElementById('input');
const output = document.getElementById('output');
const btn = document.getElementById('btn');


btn.addEventListener('click', e => {
    
    // Spaghetti variables
    let binary = input.value;
    let end = binary.length-1;
    let decimal = 0;
    let itUp = 0;
    let itDown = end;

    // Check for non binary numbers
    let err = false;
    let toArr = binary.split("");
    for(let i = 0; i < toArr.length; i++){
        if (toArr[i] == '0' || toArr[i] == '1') continue;
        else{
            err = true;
            break;
        }
    }
    // If binary number doesn't have a number greater than 1, do this
    if (!err) {
      while (itUp !== end + 1) {
        decimal += binary[itUp] * Math.pow(2, itDown);
        itUp++;
        itDown--;
      }
      output.value = decimal;
      input.value = null;
    } else {
        alert('You have entered number other than 0 or 1. Please re-enter');
        input.value = null;
        output.value = null;
    }

    e.preventDefault();
    
});



