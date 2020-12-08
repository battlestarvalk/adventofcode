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

function breakLoop (inputArray) {
  let count = 0,
      i = 0,
      duplicateFinder = 0,
      visited = [];

  for(let i = 0; i < inputArray.length;) {
      var instructions = inputArray[i].split(" ");

      if(duplicateFinder === 1 || i === inputArray.length) {
          break
      }

      if(visited.includes(i)) {
          duplicateFinder++
      }

      else if (instructions[0] === "nop") {
          visited.push(i)
          i++
//           console.log(count, "nop", i, duplicateFinder)
      }

      else if (instructions[0] === "acc") {
          count = count + Number(instructions[1])
          visited.push(i)
          i++
//           console.log(count, "acc", i, duplicateFinder)
      }

      else if (instructions[0] === "jmp") {
          visited.push(i)
          i += Number(instructions[1])
//           console.log(count, "jmp", i, duplicateFinder)
      }

  }
  return count
}

breakLoop(day8_input)
