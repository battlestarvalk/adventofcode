input_full = document.querySelector("body > main > article > pre:nth-child(12) > code").innerText.split("\n").join('').split('')
input = document.querySelector("body > main > article > pre:nth-child(12) > code").innerText.split("\n")

line2_test = input[2].split('')

pairs = {
"(":")",
"[":"]",
"{":"}",
"<":">"
}

expected_string = []

for(var i=0;i<line2_test.length;i++) {
    //console.log(i, "start", expected_string)
    if(pairs[line2_test[i]]) {
        expected_string.push(pairs[line2_test[i]])
    }
    else if(expected_string.indexOf(line2_test[i]) == -1) {
        console.log("mismatch", line2_test[i]); 
        break;
        }
    else {
        expected_string.splice(expected_string.indexOf(line2_test[i]), 1)
        //console.log("mismatch", line2_test[i])
    }
    //console.log(i, "end", expected_string)
}

expected_string
