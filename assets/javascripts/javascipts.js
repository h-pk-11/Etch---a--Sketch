"use strict"
// initial setup
const container = document.querySelector('#container');

let r = document.querySelector(':root');

let rs = window.getComputedStyle(r);

let n = rs.getPropertyValue('--resolution');

for(let i = 1; i <= n*n; i++){
    const item = document.createElement('div');
    item.setAttribute('class',`item`);
    item.setAttribute('id',`${i}`);
    container.appendChild(item);
}

// pad-size

let btn_padSize = document.querySelector('#padSize');

btn_padSize.addEventListener('click',changeResolution);

function changeResolution(e){
    prompt()
}


