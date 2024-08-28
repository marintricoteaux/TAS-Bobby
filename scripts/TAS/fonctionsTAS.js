/*
Dans ce fichier j'utiliserai les fonctions natives de js pour créer la fonction :
setTimeout(() => {}, tempsEnMillisecondes); Qui permet d'executer des actions après un temps (en ms) donné
setInterval(() => {}, tempsEnMillisecondes); Qui permet d'execurer des actions à une intervalles (en ms) donné 
*/

function doActionTAS(dateMs, duree, action)
{
    setTimeout(() => {
        switch (action){
            case "JUMP":
                console.log("TAS JUMPED")
                TASJump = true
                break
            case "MOVE-RIGHT":
                console.log("TAS MOVED RIGHT")
                TASMoveRight = true
                break
            case "MOVE-LEFT":
                console.log("TAS MOVED LEFT")
                TASMoveLeft = true
                break;
        }      
    }, dateMs)
    setTimeout(() => {
        switch (action){
            case "JUMP":
                console.log("TAS NOT JUMPING")
                TASJump = false
                break
            case "MOVE-RIGHT":
                console.log("TAS NOT MOVING")
                TASMoveRight = false
                break
            case "MOVE-LEFT":
                console.log("TAS NOT MOVING")
                TASMoveLeft = false
                break;
        }      
    }, dateMs + duree)
}