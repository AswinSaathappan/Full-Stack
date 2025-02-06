function agechecker(){
    let age = prompt("Enter your age:");
    if(isNaN(age) || age.trim() === ""){
      console.log("Pleae enter a valid number");
      return;
    }

    age=Number(age);
    if(age<0)
    {
        console.log("Please enter a valid age");
    }
    else{
        const result = age>=18 ? "You are an adult" : "You are a minor";
        console.log(result);
    }
}

agechecker();