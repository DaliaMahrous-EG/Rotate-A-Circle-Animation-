let mainCircle = document.getElementById(`mainCircle`)

function rndColors(max){
    let rd = [4 , 5 , 6, 3]
    let rgba = "rgba("+ Math.floor(Math.random() * max) + "," + Math.floor(Math.random() * max) + "," + Math.floor(Math.random() * max) + "," + rd[Math.floor(Math.random() * rd.length)] + ")"

    return rgba
}

window.onload = (e) =>{
    "use strict";
    let colors = rndColors(255)

    for(let i = 0; i < 30 ; i++){
        let child = document.createElement(`div`);
        child.style.transform = "rotateY(360deg / 30)" * `${i}`
        child.style.borderColor = colors;
        mainCircle.appendChild(child)

    }

}

function changeColor(){
    let x = rndColors(220)
    for(let i = 0 ; i < mainCircle.children.length; i++){
        mainCircle.children[i].style.borderColor = x
    }

}

setInterval(changeColor , 1000)