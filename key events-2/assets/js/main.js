var ball = document.getElementById("ball")
var topLeft = document.getElementById("1")
var up = document.getElementById("2")
var topRight = document.getElementById("3")
var left = document.getElementById("4")
var middle = document.getElementById("5")
var right = document.getElementById("6")
var bottomLeft = document.getElementById("7")
var down = document.getElementById("8")
var bottomRight = document.getElementById("9")


topLeft.onclick = function(){
    document.getElementById("ball").style.transform += "translateY(-5px)";
    document.getElementById("ball").style.transform += "translateX(-5px)";
}
up.onclick = function(){
    document.getElementById("ball").style.transform += "translateY(-5px)";
}
topRight.onclick = function(){
    document.getElementById("ball").style.transform += "translateY(-5px)";
    document.getElementById("ball").style.transform += "translateX(5px)";
}
left.onclick = function(){
    document.getElementById("ball").style.transform += "translateX(-5px)";
}
right.onclick = function(){
    document.getElementById("ball").style.transform += "translateX(5px)";
}
bottomLeft.onclick = function(){
    document.getElementById("ball").style.transform += "translateY(5px)";
    document.getElementById("ball").style.transform += "translateX(-5px)";
}
down.onclick = function(){
    document.getElementById("ball").style.transform += "translateY(5px)";
}
bottomRight.onclick = function(){
    document.getElementById("ball").style.transform += "translateY(5px)";
    document.getElementById("ball").style.transform += "translateX(5px)";
}

document.querySelector("body").onkeydown = function(e){
    if(e.key == "ArrowUp"){
        document.getElementById("ball").style.transform += "translateY(-5px)";
    }
    else if(e.key == "ArrowLeft"){
        document.getElementById("ball").style.transform += "translateX(-5px)";
    }
    else if(e.key == "ArrowRight"){
        document.getElementById("ball").style.transform += "translateX(5px)";
    }
    else if(e.key == "ArrowDown"){
        document.getElementById("ball").style.transform += "translateY(5px)";
    }
}