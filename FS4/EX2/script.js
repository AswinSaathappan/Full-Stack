const choices = ["rock","paper","scissor"];
let score = 0;

function playgame(userchoice){
    let computerchoice = choices[Math.floor(Math.random()*3)];

    document.getElementById("userchoice").innerHTML = userchoice;

    document.getElementById("computerchoice").innerHTML = computerchoice;

    let result = "";

    if(userchoice === computerchoice){
        result = "It's a tie!";
    }
    else if( (userchoice === "rock" && computerchoice === "scissor")|| 
             (userchoice === "paper" && computerchoice === "rock")||
             (userchoice === "scissor" && computerchoice === "paper"))
    {
        result = "You win!";
        score++;
    }
    else
    {
       result = "You Lose!";
       score--;
    }

    document.getElementById("result").innerHTML = result;

    document.getElementById("score").innerHTML = score;
}

    document.getElementById("reset").addEventListener("click",function(){
        score = 0;

        document.getElementById("score").innerHTML = score;

        document.getElementById("userchoice").innerHTML = "-"; 
        
        document.getElementById("computerchoice").innerHTML = "-";

        document.getElementById("result").innerHTML = ""

    });
