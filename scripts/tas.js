/*
Dans ce fichier j'utiliserai les fonctions natives de js :
setTimeout(() => {}, tempsEnMillisecondes); Qui permet d'executer des actions après un temps (en ms) donné
setIntervall(() => {}, tempsEnMillisecondes); Qui permet d'execurer des actions à une intervalles (en ms) donné 
*/

setTimeout(() => {
    TASJump = true
    console.log("TASJUMP = TRUE après 10s")
}, 10000)

setTimeout(() => {
    TASJump = false
    console.log("TASJUMP = FALSE après 15s")
}, 15000)