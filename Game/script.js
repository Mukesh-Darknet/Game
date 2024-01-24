let userScore  = 0;
let compScore = 0;

const userScorePara  =document.querySelector("#user_score");
const compScorePara  =document.querySelector("#comp_score");


const genCompChoice = () =>{
    const options = ["rock" ,"paper", "scissor"];
    const index = Math.floor(Math.random() *3);
    return options[index];
    
};


const drawGame = ()=> {
    // console.log("Game is Draw");
    msg.innerText = "GAME DRAW. Play Again"
    msg.style.backgroundColor = " #081b31"
}


const showWinner = (userWin ,userchoice, CompChpoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        // console.log("You Win");
        msg.innerText = `YOU WIN!. Your ${userchoice} Beats ${CompChpoice}`
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText =compScore;
        console.log("you Loss");
        msg.innerText = `LOSE!  ${CompChpoice} Beats ${userchoice}`
        msg.style.backgroundColor = "red"
    }

}

const playGame = (userchoice)=>{
    console.log("User Choice = " , userchoice);
    const CompChpoice = genCompChoice();
    console.log("Computer choice  " ,CompChpoice);
    if(userchoice === CompChpoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice ==="rock"){
            // scissor or paper
            userWin = CompChpoice ==="paper" ? false : true;
        }
        else if(userchoice ==="paper"){
            // rock or scissor
            userWin = CompChpoice ==="scissor" ? false : true;

        }else{
            // rock or paper
            userWin = CompChpoice ==="rock" ? false : true;

        }
        showWinner(userWin,userchoice, CompChpoice)
    }
};

 const choices = document.querySelectorAll('.choice');

 const msg = document.querySelector('.msg');

 choices.forEach((choice) =>{
    // console.log(choice);
     choice.addEventListener('click' , () =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice)
    })

 })