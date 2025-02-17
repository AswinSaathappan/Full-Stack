let radius=document.getElementById("radius")
function Calculate()
{
    const PI = 3.14159;
    const area = PI * radius.value * radius.value;
    const circumference = 2 * PI * radius.value;
    const result = document.getElementById("result");
    result.innerHTML = "Area:" + area + "<br>" + "Circumference:" + circumference;
}