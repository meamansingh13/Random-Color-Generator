let btn= document.querySelector("button");

btn.addEventListener("click", function(){
    let h3=document.querySelector("h3");
    let randomColour= getColor();
    h3.innerText=randomColour;

    let div=document.querySelector("div");
    div.style.backgroundColor=randomColour;

    console.log("color updated");
});

function getColor(){
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let red=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}