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

            if(/g/.test(number[j][i])) {
                converted_number[j].push(2)
            }

            if(/a/.test(number[j][i])) {
                converted_number[j].push(3)
            }

            if(/e/.test(number[j][i])) {
                converted_number[j].push(5)
            }
        }

        if(number[j][i].length == 6) {

            if(/f/.test(number[j][i])) {
                if(/g/.test(number[j][i])) {
                    converted_number[j].push(6)
                }

                if(/a/.test(number[j][i])) {
                    converted_number[j].push(9)
                }
            }

            else {converted_number[j].push(0)}
        }
    }
}
converted_number
