var randomDiceNumber1 = Math.ceil(Math.random()*6);
if (randomDiceNumber1 === 1){
    document.querySelector(".img1").setAttribute('src','images/dice1.png');
}
if (randomDiceNumber1 === 2){
    document.querySelector(".img1").setAttribute('src','images/dice2.png');
}
if (randomDiceNumber1 === 3){
    document.querySelector(".img1").setAttribute('src','images/dice3.png');
}
if (randomDiceNumber1 === 4){
    document.querySelector(".img1").setAttribute('src','images/dice4.png');
}
if (randomDiceNumber1 === 5){
    document.querySelector(".img1").setAttribute('src','images/dice5.png');
}
if (randomDiceNumber1 === 6){
    document.querySelector(".img1").setAttribute('src','images/dice6.png');
}
var randomDiceNumber2 = Math.ceil(Math.random()*6);
if (randomDiceNumber2 === 1){
    document.querySelector(".img2").setAttribute('src','images/dice1.png')
}
if (randomDiceNumber2 === 2){
    document.querySelector(".img2").setAttribute('src','images/dice2.png')
}
if (randomDiceNumber2 === 3){
    document.querySelector(".img2").setAttribute('src','images/dice3.png')
}
if (randomDiceNumber2 === 4){
    document.querySelector(".img2").setAttribute('src','images/dice4.png')
}
if (randomDiceNumber2 === 5){
    document.querySelector(".img2").setAttribute('src','images/dice5.png')
}
if (randomDiceNumber2 === 6){
    document.querySelector(".img2").setAttribute('src','images/dice6.png')
}
if (randomDiceNumber1 === randomDiceNumber2){
    document.querySelector("h1").textContent = "Draw";
}
if (randomDiceNumber1 > randomDiceNumber2){
    document.querySelector("h1").textContent = "Number One Wins";
}
if (randomDiceNumber1 < randomDiceNumber2){
    document.querySelector("h1").textContent = "Number two Wins";
}

