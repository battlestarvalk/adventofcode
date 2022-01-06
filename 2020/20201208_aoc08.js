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


//pt 2

const input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

// use find errors to determine if failure/success
function findErrors (inputArray) {
  let count = 0,
      i = 0,
      duplicateFinder = 0,
      visited = [];

  for(let i = 0; i < inputArray.length;) {
      var instructions = inputArray[i].split(" "),
          action = instructions[0],
          actionVal = Number(instructions[1]);

      if(duplicateFinder == 1) {
          return 'looping';
          break;
      }

      if(i == inputArray.length-1) {
          if (action == "acc") {
              count += actionVal
          }    
          console.log(count);
          return 'success';
          break;
      }

      if(visited.includes(i)) {
          duplicateFinder++
      }

      else if (action == "nop") {
          visited.push(i)
          i++
      }

      else if (action == "acc") {
          count += actionVal
          visited.push(i)
          i++
      }

      else if (action == "jmp") {
          visited.push(i)
          i += actionVal
      }

  }
  
}

new_inputs = []
for(var i=0; i<input.length; i++) {
    var instructions = input[i].split(" "),
          action = instructions[0],
          actionVal = instructions[1],
          tmp_input = input.slice();

    if(action == 'nop') {
        tmp_input[i] = 'jmp ' + actionVal
        new_inputs.push([i, tmp_input])
    }

    if(action == 'jmp') {
        tmp_input[i] = 'nop ' + actionVal
        new_inputs.push([i, tmp_input])
    }

}


for(var i=0; i<new_inputs.length;i++) {

    if(findErrors(new_inputs[i][1]) == 'success') {
        break;
    }

}
