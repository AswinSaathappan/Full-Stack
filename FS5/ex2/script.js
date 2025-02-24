var result = document.getElementById("result");
const usernameregx = /^[a-zA-Z][a-zA-Z0-9_]{3,13}[a-zA-Z0-9]$/;
function validate(){
let username = document.getElementById("input").value;
console.log(username);
if(usernameregx.test(username))
{
    console.log("Valid username");
    result.innerHTML = "Valid username";
    result.style.color = "green"; 
}
else
{
    console.log("Invalid username");
    result.innerHTML = "Invalid username";
    result.style.color = "red";
}
}
