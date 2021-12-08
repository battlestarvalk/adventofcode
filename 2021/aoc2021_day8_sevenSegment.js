/*test*/
input = document.querySelector("body > main > article > pre:nth-child(16) > code").textContent.split('\n')
//pt one
input = input.filter(x => !(/\|/.test(x)))

target = [7,4,2,3]
number = []
input.map(x => number.push(x.split(" ")))

//pt one only
number = number.join().split(",")

target_num = 0
for(var i=0; i<number.length; i++) {
    if(target.includes(number[i].length)) {
        target_num++
    }
}
target_num

/*part one*/

input = document.querySelector('pre').textContent.split('\n')
output = []
input.forEach(x => output.push(x.substring(61)))

number = []
output.map(x => number.push(x.split(" ")))
number = number.join().split(",")

target = [7,4,2,3]
target_num = 0
for(var i=0; i<number.length; i++) {
    if(target.includes(number[i].length)) {
        target_num++
    }
}
target_num

/*part two*/

input = document.querySelector("body > main > article:nth-child(6) > pre:nth-child(3) > code").textContent.split('\n')

target = [7,4,2,3]
number = []
id_key = input[0].split(" ").slice(0,-1)
output = input[1]

obj = {a: 0, b:0, c:0, d:0, e:0, f:0, g:0}

for(var i=0;i<id_key.length;i++) {
    for (var j = 0; j < id_key[i].length; j++) {
           obj[id_key[i][j]] = obj[id_key[i][j]] + String(id_key[i].length);
         }    
}

replacement_key = {}

for(const valString in obj) {
    if(obj[valString].length == 10) {
        replacement_key[valString] = "f"
    }

    if(obj[valString].length == 7) {
        replacement_key[valString] = "a"
    }

    if(obj[valString].length == 5) {
        replacement_key[valString] = "e"
    }

    if(obj[valString].length == 8) {
        if(/4/.test(obj[valString])) {
          replacement_key[valString] = "d"
        }
        else {
          replacement_key[valString] = "g"
        }
    }

    if(obj[valString].length == 9) {
        if(/4/.test(obj[valString])) {
          replacement_key[valString] = "c"
        }
        else {
          replacement_key[valString] = "b"
        }
    }
}
replacement_key

replacement = ""

for(var i=0;i<output.length;i++) {
    if(output[i] != " ") {
    replacement = replacement + output[i].replace(output.charAt(i), replacement_key[output.charAt(i)])
    }
    else {replacement = replacement + " "}
}
replacement

number = [replacement.split(" ")]

converted_number = []
for(var j=0; j<number.length;j++) {
    converted_number.push([])
    for(var i=0; i<number[j].length;i++) {

        if(target.includes(number[j][i].length)) {
            switch(number[j][i].length) {
                case 7:
                    converted_number[j].push(8);
                    break;
                case 4:
                    converted_number[j].push(4);
                    break;
                case 3:
                    converted_number[j].push(7);
                    break;
                case 2:
                    converted_number[j].push(1);
                    break;
        }
        }

        if(number[j][i].length == 5) {

            if(/a/.test(number[j][i])) {
                converted_number[j].push(5)
            }

            else if(/e/.test(number[j][i])) {
                converted_number[j].push(2)
            }

            else {
                converted_number[j].push(3) 
            }
        }

        if(number[j][i].length == 6) {

            if(/c/.test(number[j][i])) {
                converted_number[j].push(9)
            }

            else if(/e/.test(number[j][i])) {
                converted_number[j].push(6)
            }

            else {
                converted_number[j].push(0)
            }
        }
    }
}
converted_number
