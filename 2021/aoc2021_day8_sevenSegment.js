/*test*/
input = document.querySelector("body > main > article > pre:nth-child(16) > code").textContent.split('\n')
input = input.filter(x => !(/\|/.test(x)))

number = []
input.map(x => number.push(x.split(" ")))
number = number.join().split(",")

target = [7,4,2,3]
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
