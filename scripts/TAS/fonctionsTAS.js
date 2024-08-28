/*
Dans ce fichier j'utiliserai les fonctions natives de js pour créer les fonctions :
setTimeout(() => {}, tempsEnMillisecondes); Qui permet d'executer des actions après un temps (en ms) donné
setInterval(() => {}, tempsEnMillisecondes); Qui permet d'execurer des actions à une intervalles (en ms) donné 
*/

function doActionTAS(tempsMs, action)
{
    setTimeout(() => {
        switch (action){
            case "JUMP":
                console.log("TAS JUMPED")
                break
            case "MOVE-RIGHT":
                console.log("TAS MOVED RIGHT")
                break
            case "MOVE-LEFT":
                console.log("TAS MOVED LEFT")
                break;
        }
            
    }, tempsMs)
}