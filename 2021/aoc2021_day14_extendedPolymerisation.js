input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

function polymerisation (array, steps) {
//prep string
  start_string = array[0]

//prep rules
  rules = {}
  tmp_input = array.slice(2)

  for(var i=0;i<tmp_input.length;i++) {
      tmp = tmp_input[i].split(' -> ')
      //rules[tmp[0]] = [tmp[1], 0]
      rules[tmp[0]] = [tmp[1], 0, 0]
  }

  for(var j=0;j<start_string.length-1;j++) {
      rules[start_string.substr(j, 2)][1]++
  }

//steps as defined in function
step = steps

//on each step, determine number of new pairs (in rules[pair][1]) and then reset (rules[pair][0])
for(var i=0;i<step;i++) {
  //step
  for(pair in rules) {
      tmp_val = rules[pair][1]
      tmp_char = rules[pair][0]
      first_pair = pair.substr(0,1) + tmp_char
      second_pair = tmp_char + pair.substr(1,2)

      rules[first_pair][2] += tmp_val
      rules[second_pair][2] += tmp_val
      rules[pair][1] -= tmp_val

  }

  //reset
  for(reset in rules) {
      rules[reset].splice(1,1)
      rules[reset].push(0)
  }
}

//final character of original string won't be caught in next for loop, so add it now
final_char = start_string.charAt(start_string.length-1)
letters = {}
letters[final_char] = 1

//determine how many of each letter is appearing
for(firstLt in rules) {
    first_letter = firstLt.substring(0,1)

        if(letters.hasOwnProperty(first_letter))
            { letters[first_letter] += rules[firstLt][1] }
        else {
            letters[first_letter] = rules[firstLt][1]
        }
}

//return count
letter_values = Object.values(letters)

return Math.max(...letter_values) - Math.min(...letter_values)
}

//part one
polymerisation(input, 10)
//part two
polymerisation(input, 40)
