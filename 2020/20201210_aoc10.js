const test_input = [28,33,18,42,31,14,46,20,48,47,24,23,49,45,19,38,39,11,1,32,25,35,8,17,7,9,4,2,34,10,3]
const test_input_short = [16,10,15,5,1,11,7,19,6,12,4]

const day10_input = document.querySelector('pre').textContent.split('\n').map(Number)

function adapterUsage (arr) {
    arr.sort(function(a, b) { return a - b; });

    var count3 = 0,
        count1 = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i+1] - arr[i] === 1) {
        count1++
      }
      else if(arr[i+1] - arr[i] === 3) {
        count3++
      }

      else if(arr[i+1] === undefined) {
        count3++
        break;
      }
      else {console.log("idk!", "input=", arr[i], "i=", i)}
    }

  return count1*count3
}

adapterUsage(day10_input)

var count = 0;
for(let i = 0; i < test_input_short.length; i++) {
        if(test_input_short.includes(test_input_short[i] - 1)) {
        console.log(test_input_short[i], "one below")
        count++
        }
    if(test_input_short.includes(test_input_short[i] + 1)) {
        console.log(test_input_short[i], "one above")
        count++
        }
    if(test_input_short.includes(test_input_short[i] - 2)) {
        console.log(test_input_short[i], "two below")
        count++
        }
    if(test_input_short.includes(test_input_short[i] + 1)) {
        console.log(test_input_short[i], "two above")
        count++
        }

    else if ( ( (test_input_short[i] - test_input_short[i-1]) > 2
                            || test_input_short[i-1] === undefined )
                        || ( (test_input_short[i+1] - test_input_short[i]) > 2)
                            || test_input_short[i+1] === undefined )
    {
        console.log(test_input_short[i], "three")
        count++
        }
}
