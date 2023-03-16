"use strict"
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
}

document.addEventListener('DOMContentLoaded',setSlider);

slider.addEventListener('input', setSlider);


// const container = document.querySelector('#container');

// const inputBtn = document.querySelector('.slider');

// inputBtn.addEventListener ('mouseup', changeResolution);

// let root = document.documentElement;

// function changeResolution(){
//     root.style.setProperty('--resolution', n);
    
// }

// for(let i = 1; i <= n*n; i++){
//     const item = document.createElement('div');
//     item.setAttribute('class',`item`);
//     item.setAttribute('id',`${i}`);
//     container.appendChild(item);
// }

// pad-size



