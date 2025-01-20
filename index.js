let homePoint1 = document.getElementById("1-h")
let homePoint2 = document.getElementById("2-h")
let homePoint3 = document.getElementById("3-h")
let guestPoint1 = document.getElementById("1-g")
let guestPoint2 = document.getElementById("2-g")
let guestPoint3 = document.getElementById("3-g")
let homeScore = document.getElementById("score-home")
let guestScore = document.getElementById("score-guest")
let clearHome = document.getElementById("clear-home")
let clearGuest = document.getElementById("clear-guest")
let resultHome = 0
let resultGuest = 0

homePoint1.addEventListener("click", function() {
    resultHome += 1  
    homeScore.textContent = resultHome 
} )

homePoint2.addEventListener("click", function() {
    resultHome += 2
    homeScore.textContent = resultHome    
} )

homePoint3.addEventListener("click", function() {
    resultHome += 3
    homeScore.textContent = resultHome    
} )

guestPoint1.addEventListener("click", function() {
    resultGuest += 1
    guestScore.textContent = resultGuest
} )

guestPoint2.addEventListener("click", function() {
    resultGuest += 2
    guestScore.textContent = resultGuest    
} )

guestPoint3.addEventListener("click", function() {
    resultGuest += 3
    guestScore.textContent = resultGuest    
} )

//clear buttons

clearHome.addEventListener("click", function() {
    resultHome = 0
    homeScore.textContent = resultHome    
} )

clearGuest.addEventListener("click", function() {
    resultGuest = 0
    guestScore.textContent = resultGuest    
} )

