function submitQuiz() {
    let score = 0;

    
    let q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "true") {
        score += 1;
    }

    
    let q2correctans = ["true", "true"];
    let q2selected = document.querySelectorAll('input[name="q2"]:checked');
    let q2values = Array.from(q2selected).map(input => input.value);

    
    if (JSON.stringify(q2values.sort()) === JSON.stringify(q2correctans.sort())) {
        score += 1;
    }


    let q3ans = document.getElementById("q3").value.trim();
    if (q3ans.toLowerCase() === "hello world") {
        score += 1;
    }

    document.getElementById("result").innerHTML = `Your score: ${score}/3`;
}
