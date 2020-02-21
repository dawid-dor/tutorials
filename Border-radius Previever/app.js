// Variables

const topLeft = document.getElementById('border-top-left');
const topRight = document.getElementById('border-top-right');
const botLeft = document.getElementById('border-bottom-left');
const botRight = document.getElementById('border-bottom-right');

const container = document.querySelector('.container');
const box = document.querySelector('.output');
let copyContent = {};


// Copy the CSS Code


const setCopyContent = edge => {
    let type = 'border-'+edge;
    copyContent = {
        border: '10px white solid',
        [type]: '30%'};
}
const copyCSS = border => {
    let text = document.createElement("textarea");
    document.body.appendChild(text);

    switch(border){
        case 'top-left':
        setCopyContent('top-left');
        text.value = JSON.stringify(copyContent);
        text.select();
        document.execCommand("copy");
        text.parentElement.removeChild(text);

        case 'top-right':
        setCopyContent('top-right');
        text.value = JSON.stringify(copyContent);
        text.select();
        document.execCommand("copy");
        text.parentElement.removeChild(text);

        case 'bottom-left':
        setCopyContent('bottom-left');
        text.value = JSON.stringify(copyContent);
        text.select();
        document.execCommand("copy");
        text.parentElement.removeChild(text);

        case 'bottom-right':
        setCopyContent('bottom-right');
        text.value = JSON.stringify(copyContent);
        text.select();
        document.execCommand("copy");
        text.parentElement.removeChild(text);
    }
}

const showAlert = () => {
    let alert = document.createElement('h3');
    let alertContent = document.createTextNode('CSS Code copied to the clipboard!');
    alert.appendChild(alertContent);
    alert.classList.add('alert');
    container.appendChild(alert);

    function removeAlert(){
        alert.parentElement.removeChild(alert);
    }

    setTimeout(removeAlert, 1000);
    
}

// Event Listeners
topLeft.addEventListener('click', () => {
    box.classList.toggle('border-top-left');
    showAlert();
    copyCSS('top-left');
});

topRight.addEventListener('click', () => {
    box.classList.toggle('border-top-right');
    showAlert();
    copyCSS('top-right');
});

botLeft.addEventListener('click', () => {
    box.classList.toggle('border-bottom-left');
    showAlert();
    copyCSS('bottom-left');
});

botRight.addEventListener('click', () => {
    box.classList.toggle('border-bottom-right');
    showAlert();
    copyCSS('bottom-right');
});

