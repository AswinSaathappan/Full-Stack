

function analyze()
{
    let wordcount = 0;
    let isword = false;
    let lettercount = 0;
    let count_spaces = 0;
    let count_without_spaces = 0;
    let ucount = 0;
    let lcount = 0;
    let numcount = 0;
    let str = document.getElementById("input").value;
    console.log(str);
    let words = str.trim().split(/\s+/); 
    console.log(words);
    let wcount = words.length; 
    let lword = words.reduce((a, b) => (a.length > b.length ? a : b), "");

   for(let i=0;i<str.length;i++)
   {
    const char = str[i];
    count_spaces++;
    if(char!==' ' && char!=='\t' && char!=='\n')
    {
        count_without_spaces++;
        isword = true;
    }
    else if(isword)
    {
        wordcount++;
        isword = false;
    }

    if (/[a-zA-Z]/.test(char)) {
        lettercount++;
        if(char === char.toUpperCase())
        {
            ucount++;
        }
        else{
            lcount++;
        }
    }

    if(/[0-9]/.test(char))
    {
        numcount++;
    }
    
    
    }
    if(isword)
    {
      wordcount++;
 
    }
    console.log(`Word count: ${wordcount}`);
    console.log(`Letter count: ${lettercount}`);
    console.log(`Character count (with spaces): ${count_spaces}`);
    console.log(`Character count (without spaces): ${count_without_spaces}`);
    console.log(`Uppercase letter count: ${ucount}`);
    console.log(`Lowercase letter count: ${lcount}`);
    console.log(`Number count: ${numcount}`);
   console.log(`Longest word: ${lword}`);

    let display = `
        Word count: ${wordcount}<br>
        Letter count: ${lettercount}<br>
        Character count (with spaces): ${count_spaces}<br>
        Character count (without spaces): ${count_without_spaces}<br>
        Uppercase letter count: ${ucount}<br>
        Lowercase letter count: ${lcount}<br>
        Number count: ${numcount}<br>
        Longest word: ${lword}
    `;
    document.getElementById("result").innerHTML = display;
}

function clearTXT() {
    document.getElementById("input").value = '';
    document.getElementById("result").innerHTML = '';
    console.clear();
}


