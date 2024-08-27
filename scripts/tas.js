/*
Dans ce fichier j'utiliserai les fonctions natives de js :
setTimeout(() => {}, tempsEnMillisecondes); Qui permet d'executer des actions après un temps (en ms) donné
setIntervall(() => {}, tempsEnMillisecondes); Qui permet d'execurer des actions à une intervalles (en ms) donné 
*/

setTimeout(() => {
    console.log('2 secondes sont passées');
}, 2000);

setInterval(() => {
    console.log('1 seconde est passée');
}, 1000);