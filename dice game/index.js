var c=Math.random();
var randomnumber=(Math.floor(c*6)+1);
var randomnumber1="./images/"+"dice"+randomnumber+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomnumber1);
var c2=Math.floor(Math.random()*6+1)
var randomnumber2="./images/"+"dice"+c2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomnumber2);
if(randomnumber>c2){
    document.querySelector("h1").innerHTML="Player1 wins"
}
else if(c2>randomnumber){
    document.querySelector("h1").innerHTML="player2 wins"
}
else{
    document.querySelector("h1").innerHTML="Game got draw"
}