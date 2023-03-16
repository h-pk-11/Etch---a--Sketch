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

// change resolution

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



