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

let count = 0,
    i = 0,
    duplicateFinder = 0,
    visited = [];

for(let i = 0; i < day8_input.length;) {
    var instructions = day8_input[i].split(" ");

    if(duplicateFinder === 1) {
      if(instructions[0] === "acc") {
        count = count - Number(instructions[1])
          }
        break
      console.log(count)
    }
    
    for(let j = 0; j < (visited.length - 1); j++) {
        if(i === visited[j]) {
            duplicateFinder++
        }
    }

    if (instructions[0] === "nop") {
        visited.push(i)
        i++
        console.log(count, "nop", duplicateFinder)
    }

    else if (instructions[0] === "acc") {
        count = count + Number(instructions[1])
        visited.push(i)
        i++
        console.log(count, "acc", duplicateFinder)
    }

    else if (instructions[0] === "jmp") {
        visited.push(i)
        i += Number(instructions[1])
        console.log(count, "jmp", duplicateFinder)
    }

}
count
