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

function characterAppearance(array, value) {
    var count = 0;
    array.forEach(function(letter) {
    if (letter === value) {
        return count++
    } 
    })
    return count;
}

var double = test_input.filter(function (instruction) {
    return characterAppearance(test_input, instruction) === 2
})[0]

// DO NOT RUN 

let count = 0,
    i = 0
    tmpCount = 0;
while (tmpCount != 2) 
{
    var instructions = test_input[i].split(" ");
    
    if(tmpCount === 2) {
    break;
    }

    if(test_input[i] === "acc +1") {
        tmpCount++
        console.log(test_input[i], "tmpCount: ", tmpCount)
    }

    if(instructions[0] = "nop" && tmpCount < 2) {
        i++
        console.log(test_input[i], "iteration: ", i)
    }

    if(instructions[0] = "acc" && tmpCount < 2) {
        count += Number(instructions[1])
        console.log(test_input[i], "iteration: ", i)
    }

    if(instructions[0] = "jmp" && tmpCount < 2) {
        i += Number(instructions[1])
        console.log(test_input[i], "iteration: ", i)
    }
    
    else if (tmpCount === 2) {
    break;
    }

}
count
