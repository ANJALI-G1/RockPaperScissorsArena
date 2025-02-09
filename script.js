let userScore=0;
let compScore=0;
const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}

const drawGame=()=>{
    console.log("game was drawn");
    msg.innerText="Game is drawn";
    msg.style.backgroundColor="blue";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you won");
        msg.innerText=`you won !! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lost !!  ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    //generate choices
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice==compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice=="scissor"?false:true;
        }
        else{
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}
choice.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        // console.log("choice was clicked");
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
})