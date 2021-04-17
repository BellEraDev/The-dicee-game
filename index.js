let randomNumber1 = Math.ceil(Math.random() * 6)
let randomNumber2 = Math.ceil(Math.random() * 6)
if (randomNumber1 > randomNumber2) {
 document.querySelector("div > h1").innerHTML = " 🚩Player1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("div > h1").innerHTML = "Player2 Wins! 🚩"
} else {
  document.querySelector("div > h1").innerHTML = "Draw!"
}
document.querySelector(".img1").src = `./images/dice${randomNumber1}.png`
document.querySelector(".img2").src = `./images/dice${randomNumber2}.png`