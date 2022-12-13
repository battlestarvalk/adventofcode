//data prep
var input = document.querySelectorAll('pre')[0].textContent.slice(0,-1).split('\n\n').map(x => x.split('\n'))

for(var i=0; i<input.length;i++) {
    for(var j=0; j<input[i].length; j++) {
        input[i][j] = JSON.parse(input[i][j])
    }
}
/*
const getArrayDepth = value => Array.isArray(value) ?
    1 + Math.max(0, ...value.map(getArrayDepth)) :
    0;
*/

const flatten = function(arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};

correct_index = []
for(var i=0; i<input.length; i++) {
    left = flatten(input[i][0])
    right = flatten(input[i][1])

   if(right.length == 0) {
       continue;
    }

    else if(left.length == 0 && right.length != 0) {
        correct_index.push(i+1)
    }

    else if(input[i][0].length > input[i][1].length) {
       continue;
    }

    else if(left.length == right.length) {
        correct_order = 0
        for(var j=0; j<left.length; j++) {
            if(left[j] > right[j]) {
                continue;
            }
            else {
                correct_order++
            }
        }
        if(left.length == correct_order) {
            correct_index.push(i+1)
        }
    }

    else {
        min_array = Math.min(left.length, right.length)
        for(var j=0; j<min_array; j++) {
            
            if(left[j] <= right[j]) {
               correct_index.push(i+1)
               break;
            }
        }
    }
}

correct_index.reduce((a,b) => a+b)
//6722 too high
