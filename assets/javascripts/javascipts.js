"use strict"

// delete old resolution

function deleteOldResolution(){
    const r = document.querySelector(':root');
    const rs = getComputedStyle(r);
    const n = Number(rs.getPropertyValue('--resolution'));

    for(let i = 1; i<= n*n; i++){
        let item = document.getElementById(`${i}`);
        container.removeChild(item);
    }
}

// change resolution (clear the old grid and add a new one)

const container = document.querySelector('#container');
const root = document.documentElement;

function changeResolution(){
    deleteOldResolution();
    const n = this.value;
    root.style.setProperty('--resolution', n);

    for(let i = 1; i <= n*n; i++){
        const item = document.createElement('div');
        item.setAttribute('class',`item`);
        item.setAttribute('id',`${i}`);
        container.appendChild(item);
    }
}

// pad-size 

const sliderValue = document.querySelector('.sliderValue');
const slider = document.querySelector('input[type=range]');

function setSlider(){
    const maxVal = slider.max;
    const minVal = slider.min;

    //calculate the percentage
    const newVal = Number((slider.value - minVal)*100/(maxVal - minVal));

    //calculate position of sliderValue div
    const newPosition = 8 - (newVal * 0.16);

    //update value on .sliderValue
    sliderValue.innerHTML = `<span>${slider.value}</span>`;
    sliderValue.style.left = `calc(${newVal}% + (${newPosition}px))`;

     // remove highlighted buttons
     removeActiveButton();
}

// (initial)
document.addEventListener('DOMContentLoaded',setSlider);
const r = document.querySelector(':root');
const rs = getComputedStyle(r);
const n = Number(rs.getPropertyValue('--resolution'));

for(let i = 1; i <= n*n; i++){
    const item = document.createElement('div');
    item.setAttribute('class',`item`);
    item.setAttribute('id',`${i}`);
    container.appendChild(item);
}

slider.addEventListener('input', setSlider);
slider.addEventListener('input', changeResolution);

// drawing
// 0. setup mouse conditions

let trigger = false;

document.addEventListener('mousedown',()=>{
    trigger = true;
});

document.addEventListener('mouseup',()=>{
    trigger = false;
});

//0.1 clone function

function replaceSelf(node) {
    let clone = node.cloneNode(true);
    node.replaceWith(clone);
  
    return clone;
}

//0.2 remove active button

function removeActiveButton(){
    const activeBtn = document.querySelector('.active');
    if(activeBtn){
        activeBtn.classList.remove('active');
    }
}

//1. black button
function changeBlack(){
    if(trigger == true){
        this.style['background-color'] = 'black'; 
    }  
}

const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', ()=>{

    removeActiveButton();
    blackBtn.classList.add('active');

    let items = document.querySelectorAll('#container .item');

    items.forEach(
        (item)=>{
            replaceSelf(item);
        }
    );

    let newItems = document.querySelectorAll('#container .item');

    newItems.forEach(
        (item)=>{
            item.addEventListener('mousemove', changeBlack);
        }
    );
});

//2. red button
function changeRed(){
    if(trigger == true){
        this.style['background-color'] = 'red'; 
    }  
}

const redBtn = document.querySelector('#red');
redBtn.addEventListener('click', ()=>{

    removeActiveButton();
    redBtn.classList.add('active');

    let items = document.querySelectorAll('#container .item');

    items.forEach(
        (item)=>{
            replaceSelf(item);
        }
    );

    let newItems = document.querySelectorAll('#container .item');

    newItems.forEach(
        (item)=>{
            item.addEventListener('mousemove', changeRed);
        }
    );
});

//3. random-color button
function changeRandomColor(){

    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
   
    if(trigger == true){
        this.style['background-color'] = `rgb(${red},${green},${blue})`; 
    }  
}

const randomBtn = document.querySelector('#random');
randomBtn.addEventListener('click', ()=>{

    removeActiveButton();
    randomBtn.classList.add('active');

    let items = document.querySelectorAll('#container .item');

    items.forEach(
        (item)=>{
            replaceSelf(item);
        }
    );

    let newItems = document.querySelectorAll('#container .item');

    newItems.forEach(
        (item)=>{
            item.addEventListener('mousemove', changeRandomColor);
        }
    );
});

//4. erase button (change white)
function changeWhite(){
    if(trigger == true){
        this.style['background-color'] = 'white'; 
    }  
}

const eraseBtn = document.querySelector('#erase');
eraseBtn.addEventListener('click', ()=>{

    removeActiveButton();
    eraseBtn.classList.add('active');

    let items = document.querySelectorAll('#container .item');

    items.forEach(
        (item)=>{
            replaceSelf(item);
        }
    );

    let newItems = document.querySelectorAll('#container .item');

    newItems.forEach(
        (item)=>{
            item.addEventListener('mousemove', changeWhite);
        }
    );
});

// 5. clear-all button

const clearAllBtn = document.querySelector('#clearAll');
clearAllBtn.addEventListener('click', ()=>{

    removeActiveButton();
    clearAllBtn.classList.add('active');

    let items = document.querySelectorAll('#container .item');

    items.forEach(
        (item)=>{
            item.style['background-color'] = 'white'; 
        }
    );
});