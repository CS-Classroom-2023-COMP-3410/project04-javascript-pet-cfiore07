
let hunger = parseInt(localStorage.getItem("hunger")) || 100;
let happiness = parseInt(localStorage.getItem("happiness")) || 100;
let energy = parseInt(localStorage.getItem("energy")) || 100;
let tintAmount = parseFloat(localStorage.getItem("tintAmount")) || 0;


let pet = document.getElementsByClassName("pet")[0];

let hungerBar = document.getElementById("hunger");
let happinessBar = document.getElementById("happiness");
let energyBar = document.getElementById("energy");

let feedButton = document.getElementById("feedButton");
let playButton = document.getElementById("playButton");
let sleepButton = document.getElementById("sleepButton");

hungerBar.innerText = "Hunger: " + hunger + "%";
happinessBar.innerText = "Happiness: " + happiness + "%";
energyBar.innerText = "Energy: " + energy + "%";

function tint(tintAmount){
    const tintColor = `rgba(255, 0, 0, ${tintAmount})`;
    pet.style.backgroundImage = `linear-gradient(${tintColor}, ${tintColor}), url(https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/07-06/small+white+fluffy+dog+smiling+at+the+camera+in+close-up-min.jpg)`;  
}
setInterval(function() {
    if (hunger > 50 && energy > 50){
        happiness += 2;
        localStorage.setItem("happiness", happiness);
    }
}, 500);

setInterval(function() {
    hunger = parseInt(localStorage.getItem("hunger")) || 0;
    happiness = parseInt(localStorage.getItem("happiness")) || 0;
    energy = parseInt(localStorage.getItem("energy")) || 0;
    tintAmount = parseFloat(localStorage.getItem("tintAmount")) || 0;

    hunger -= 10;
    localStorage.setItem("hunger", hunger);

    energy -= 5;
    localStorage.setItem("energy", energy);

    if (hunger < 50 || energy < 20) {
            happiness -= 10;
            localStorage.setItem("happiness", happiness);
            if (happiness < 50){
                tintAmount += 0.1;
                localStorage.setItem("tintAmount", tintAmount);
                tint(tintAmount);
            }
    }
    else{
        tintAmount -= 0.2;
        localStorage.setItem("tintAmount", tintAmount);
        tint(tintAmount);
    }
    if (hunger < 0) {
        hunger = 0;
        localStorage.setItem("hunger", hunger);
    }
    if (hunger > 100) {
        hunger = 100;
        localStorage.setItem("hunger", hunger);
    }
    if (happiness < 0) {
        happiness = 0;
        localStorage.setItem("happiness", happiness);
    }
    if (happiness > 100) {
        happiness = 100;
        localStorage.setItem("happiness", happiness);
    }
    if (energy < 0) {
        energy = 0;
        localStorage.setItem("energy", energy);
    }
    if (energy > 100) {
        energy = 100;
        localStorage.setItem("energy", energy);
    }

    hungerBar.innerText = "Hunger: "+ hunger + "%";
    happinessBar.innerText = "Happiness: "+ happiness + "%";
    energyBar.innerText = "Energy: "+ energy + "%";
}, 7000);

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

feedButton.addEventListener("click", function() {
    if (hunger < 91) {
        hunger += 10;
        localStorage.setItem("hunger", hunger);
        hungerBar.innerText = "Hunger: "+ hunger + "%";
    } else {
        alert("it is full");
    }
});

playButton.addEventListener("click", function() {
    if (happiness < 96) {
        happiness += 5;
        localStorage.setItem("happiness", happiness);
        happinessBar.innerText = "Happiness: "+ happiness + "%";
    } else {
        alert("it is happy");
    }
});

sleepButton.addEventListener("click", function() {
    if (energy < 91) {
        energy += 5;
        localStorage.setItem("energy", energy);
        energyBar.innerText = "Energy: "+ energy + "%";
    } else {
        alert("it is not tired");
    }
});