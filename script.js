let turn = "cross"
let turnDisplay = document.getElementById("turnSymbol")
let winnerDisplay = document.getElementById("WinnerText")
let last = ""
let isFinished = false

// STARTING TURN
if(turn=="cross"){
    turnDisplay.innerHTML = "X"
    turnDisplay.style.color = "rgb(255, 80, 89)"
} else {
    turnDisplay.innerHTML = "O"
    turnDisplay.style.color = "rgb(34, 34, 34)"
}

let insert = (e)=>{
    
    // CHECKING IF THE GAME IS FINISHED OR NOT
    if(!isFinished){
        // INSERTING
        if(e.innerHTML.trim() == ""){
            if(turn=="cross"){ 
                e.innerHTML = "X"
                e.style.color = "rgb(255, 80, 89)"
                turn = "circle"
            } else {
                e.innerHTML = "O"
                e.style.color = "rgb(34, 34, 34)"
                turn = "cross"
            }

            last = e.id

            
        } else {
            if(e.id==last){
                e.innerHTML = ""
                // Return to Previous Turn
                turn == "cross" ? turn="circle" : turn="cross"
            }
        }

        // CHECKING IF WE HAVE WINNER
        box_1 = document.getElementById("1").innerHTML
        box_2 = document.getElementById("2").innerHTML
        box_3 = document.getElementById("3").innerHTML
        box_4 = document.getElementById("4").innerHTML
        box_5 = document.getElementById("5").innerHTML
        box_6 = document.getElementById("6").innerHTML
        box_7 = document.getElementById("7").innerHTML
        box_8 = document.getElementById("8").innerHTML
        box_9 = document.getElementById("9").innerHTML

        if(
            (box_1=="X" && box_2=="X" && box_3=="X")
        || (box_4=="X" && box_5=="X" && box_6=="X")
        || (box_7=="X" && box_8=="X" && box_9=="X")
        || (box_1=="X" && box_4=="X" && box_7=="X")
        || (box_2=="X" && box_5=="X" && box_8=="X")
        || (box_3=="X" && box_6=="X" && box_9=="X")
        || (box_1=="X" && box_5=="X" && box_9=="X")
        || (box_3=="X" && box_5=="X" && box_7=="X")
        ){
            winnerDisplay.innerHTML = "X won!"
            winnerDisplay.style.color = "rgb(255, 80, 89)"
            isFinished = true

        } else if(
            (box_1=="O" && box_2=="O" && box_3=="O")
        || (box_4=="O" && box_5=="O" && box_6=="O")
        || (box_7=="O" && box_8=="O" && box_9=="O")
        || (box_1=="O" && box_4=="O" && box_7=="O")
        || (box_2=="O" && box_5=="O" && box_8=="O")
        || (box_3=="O" && box_6=="O" && box_9=="O")
        || (box_1=="O" && box_5=="O" && box_9=="O")
        || (box_3=="O" && box_5=="O" && box_7=="O")){
            winnerDisplay.innerHTML = "O won!"
            winnerDisplay.style.color = "rgb(34, 34, 34)"
            isFinished = true

        }

        // CHECKING TURN
        if(turn=="cross"){
            turnDisplay.innerHTML = "X"
            turnDisplay.style.color = "rgb(255, 80, 89)"
        } else {
            turnDisplay.innerHTML = "O"
            turnDisplay.style.color = "rgb(34, 34, 34)"
        }

        // CHECK IF DRAW
        if(box_1!="" && box_2!="" && box_3!="" 
        && box_4!="" && box_5!="" && box_6!=""
        && box_7!="" && box_8!="" && box_9!=""){
            winnerDisplay.innerHTML = "Draw!"
            winnerDisplay.style.color = "black"
        }


    } else {

    }
}


let restart = ()=>{
    // CLEARING BOXES
    document.getElementById("1").innerHTML = ""
    document.getElementById("2").innerHTML = ""
    document.getElementById("3").innerHTML = ""
    document.getElementById("4").innerHTML = ""
    document.getElementById("5").innerHTML = ""
    document.getElementById("6").innerHTML = ""
    document.getElementById("7").innerHTML = ""
    document.getElementById("8").innerHTML = ""
    document.getElementById("9").innerHTML = ""

    // Clearing Turn, Winner Screens & Setting Default values 
    turnDisplay.innerHTML = "X"
    turn = "cross"
    last = ""
    turnDisplay.style.color = "rgb(255, 80, 89)"
    winnerDisplay.innerHTML = "&nbsp;"

    // RE-ACTIVATING THE GAME
    isFinished = false

}