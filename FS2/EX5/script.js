let a = prompt("Enter temperature in celcius:");
function convert()
{
    const celcius = Number(a);
    console.log(a);
    const farenheit = (celcius * (9/5)) +32;
    const result = document.getElementById("result");
    result.innerHTML = "Celcius:"+ celcius + " Farenheit:" + farenheit;
}
