// Team One


let teamOneShotCountElement = document.querySelector("#teamone-numshots")
let teamOneGoalCountElement = document.querySelector("#teamone-numhits")
let teamOneShootButtonElement = document.querySelector("#teamone-shoot")


// console.log (teamOneShotCountElement) to verify if code works.
// console.log (teamOneGoalCountElement)
// console.log (teamOneShootButtonElement)

// set variable =0
let teamOneShotCount = 0;
let teamOneGoalCount = 0;


teamOneShootButtonElement.addEventListener("click", function () {
    // alert("working")
    teamOneShotCount = teamOneShotCount + 1;
    teamOneShotCountElement.innerHTML = teamOneShotCount

    // if shot was successful increment goalcount by 1
    //after incrementing goalcount, set goal countelement.inner.html
    //equall to goalcount

    if (Math.random() < .25) {
        teamOneGoalCountElement.innerHTML = teamOneGoalCount
        teamOneGoalCount = teamOneGoalCount + 1;

    }


})

//Team 2

let teamTwoShotCountElement = document.querySelector("#teamtwo-numshots")
let teamTwoGoalCountElement = document.querySelector("#teamtwo-numhits")
let teamTwoShootButtonElement = document.querySelector("#teamtwo-shoot")


let teamTwoShotCount = 0;
let teamTwoGoalCount = 0;


teamTwoShootButtonElement.addEventListener("click", function () {

    teamTwoShotCount = teamTwoShotCount + 1;
    teamTwoShotCountElement.innerHTML = teamTwoShotCount



    if (Math.random() < .25) {
        teamTwoGoalCountElement.innerHTML = teamTwoGoalCount
        teamTwoGoalCount = teamTwoGoalCount + 1;
    }


})

// Resetbutton

let resetButtonCount = 0;


let resetCountElement = document.querySelector("#num-resets")

let resetButtonElement = document.querySelector("#reset")



resetButtonElement.addEventListener("click", function () {
    resetButtonCount = resetButtonCount + 1;
    resetCountElement.innerHTML = resetButtonCount
    teamTwoShotCount=0
    teamOneShotCount=0
    teamOneGoalCount=0
    teamTwoGoalCount=0
    teamOneShotCountElement.innerHTML = 0
    teamOneGoalCountElement.innerHTML = 0
    teamOneShootButtonElement.innerHTML=0
    teamTwoShotCountElement.innerHTML = 0
    teamTwoGoalCountElement.innerHTML = 0
    teamTwoShootButtonElement.innerHTML=0

})





