
const button3 = document.getElementById('button3')

button3.onclick = () => buttonClick('button 3');

// button3.onclick = countClick;

const button4 = document.getElementById('button4')

button4.addEventListener('click', buttonClick);

button4.addEventListener('click', countClick);

// const parPippo = document.getElementById('par-pippo');

// parPippo.addEventListener('click', countClick);

const link = document.getElementById('link');

link.addEventListener('click', displayPar);

function buttonClick(string) {
    console.log(string);
}


let counter = 0;

function countClick(event) {
    counter = counter + 1;
    console.log(counter);
//     if (counter === 7) {
//         button4.removeEventListener('click', countClick)
//     }
    event.preventDefault();
    window.location = "http://google.com";
}


function displayPar(event) {
    let par = document.getElementById('hidden-par')
    par.style.display = 'block';
    event.preventDefault();

}