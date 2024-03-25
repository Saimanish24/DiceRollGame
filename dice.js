var d1=Math.floor(Math.random()*6)+1
var d2=Math.floor(Math.random()*6)+1
var dice1="./images/dice"+d1+".png";
var dice2="./images/dice"+d2+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",dice1);
var image2=document.querySelectorAll("img")[1].setAttribute("src",dice2);
if(d1>d2){
    document.querySelector("h1").innerHTML="player 1 wins";

}
else if(d1<d2){
    document.querySelector("h1").innerHTML="player 2 wins";

}
else{
    document.querySelector("h1").innerHTML="there is a draw";

}
// let a=document.querySelector("img").attributes;
// console.log(a)

// if(d1==1 || d2==1){
//     document.querySelector("img1").setAttribute("src","./images/dice1.png");
//     document.querySelector("img2").setAttribute("src","./images/dice1.png");
// }
// else if(d1==1 || d2==1){
//     document.querySelector("img1").setAttribute("src","./images/dice2.png");
//     document.querySelector("img2").setAttribute("src","./images/dice2.png");
// }
// else if(d1==1 || d2==1){
//     document.querySelector("img1").setAttribute("src","./images/dice3.png");
//     document.querySelector("img2").setAttribute("src","./images/dice3.png");
// }
// else if(d1==1 || d2==1){
//     document.querySelector("img1").setAttribute("src","./images/dice4.png");
//     document.querySelector("img2").setAttribute("src","./images/dice4.png");
// }
// else if(d1==1 || d2==1){
//     document.querySelector("img1").setAttribute("src","./images/dice5.png");
//     document.querySelector("img2").setAttribute("src","./images/dice5.png");
// }
// else{
//     document.querySelector("img1").setAttribute("src","./images/dice6.png");
//     document.querySelector("img2").setAttribute("src","./images/dice6.png");
// }