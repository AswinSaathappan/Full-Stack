function game()
{
    const target = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;
    let correctguess = false;

    while(!correctguess)
    {
        const myguess = parseInt(prompt("Guess a number 1-10:"));
        attempts++;
        if(isNaN(myguess) || myguess < 1 || myguess > 10)
        {
            console.log("Invalid input. Please enter a number between 1 and 10.");
        }
        else if(myguess < target)
        {
            console.log("Too Low");
        }
        else if(myguess >  target)
        {
            console.log("Too High");
        }
        else{
            correctguess = true;
            console.log(`Correct! You took ${attempts}.`);
        }
    }
}

game();