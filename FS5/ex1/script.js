function parse(){

let email = document.getElementById("email").value;
console.log(email);
var emailArr = email.split("@");
console.log(emailArr);

var name = emailArr[0].toString();
console.log(name);

var domainP = emailArr[1].toString();
console.log(domainP);


var domainP = domainP.split(".");
console.log(domainP);

var domain = domainP[0].toString();
console.log(domain);

var extension = domainP[1].toString();
console.log(extension);

parseemail(name,domain,extension);
}


let username = "";
let display ="";


function parseemail(name,domain,extension)
{
    if( name.length > 5)
    {
       username = name.slice(0,3) + "..." + name.slice(name.length - 3);
       console.log(username);
       display += `Username:${username} <br>`;
    }
    else
    {
        username = name;
        console.log(username);
        display += `Username:${username} <br>`;
    }
        display += `Domain name: ${domain} <br>`;
        display += `Extension: ${extension}`;
        console.log(display);
        document.getElementById("result").innerHTML = display;
}



