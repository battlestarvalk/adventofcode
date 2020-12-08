const day8_input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

const test_input = ['nop +0',
                    'acc +1',
                    'jmp +4',
                    'acc +3',
                    'jmp -3',
                    'acc -99',
                    'acc +1',
                    'jmp -4',
                    'acc +6']

// function characterAppearance(array, value) {
//     var count = 0;
//     array.forEach(function(letter) {
//     if (letter === value) {
//         return count++
//     } 
//     })
//     return count;
// }

// var double = day8_input.filter(function (instruction) {
//     return characterAppearance(day8_input, instruction) === 2
// })[0]

let count = 0,
    i = 0,
    duplicateFinder = 0,
    visited = [];

for(let i = 0; i < day8_input.length;) {
    var instructions = day8_input[i].split(" ");

    if(duplicateFinder === 2) {
        break
      console.log(count)
    }
    
//     if(day8_input[i] === double) {
//         duplicateFinder++
//     }
    for(let j = 0; j < (visited.length - 2); j++;) {
        if(i === visited[j]) {
            duplicateFinder++
        }
    }

    if (instructions[0] === "nop") {
        i++
        visited.push(i)
        console.log(count, "nop", i, duplicateFinder)
    }

    else if (instructions[0] === "acc") {
        count = count + Number(instructions[1])
        i++
        visited.push(i)
        console.log(count, "acc", i, Number(instructions[1]), duplicateFinder)
    }

    else if (instructions[0] === "jmp") {
        i += Number(instructions[1])
        visited.push(i)
        console.log(count, "jmp", i, Number(instructions[1]), duplicateFinder)
    }
    
}
count
