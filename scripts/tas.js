/*
Dans ce fichier j'utiliserai les fonctions natives de js :
setTimeout(() => {}, tempsEnMillisecondes); Qui permet d'executer des actions après un temps (en ms) donné
setInterval(() => {}, tempsEnMillisecondes); Qui permet d'execurer des actions à une intervalles (en ms) donné 
*/

setInterval(() => {
    TASJump = true
    console.log("5sec : TASJUMP = TRUE")
}, 5000)

setInterval(() => {
    TASJump = false
    console.log("5.1sec : TASJUMP = FALSE")
}, 5100)