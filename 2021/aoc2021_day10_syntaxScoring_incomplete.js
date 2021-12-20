/*NOT WORKING*/
input_full = document.querySelector("body > main > article > pre:nth-child(12) > code").innerText.split("\n").join('').split('')
input = document.querySelector("body > main > article > pre:nth-child(12) > code").innerText.split("\n")

line2_test = input[2].split('')

pairs = {
"(":")",
"[":"]",
"{":"}",
"<":">"
}

function groupings (array) {
    expected_string = []

    for(var i=0;i<array.length;i++) {
        //console.log(i, "start", array[i], expected_string)
        if(pairs[array[i]]) {
            expected_string.push(pairs[array[i]])
        }
        else if(expected_string.indexOf(array[i]) == -1) {
            console.log("mismatch", array[i]);
            }
        else {
            expected_string.splice(expected_string.indexOf(array[i]), 1)
        }
    }
}
