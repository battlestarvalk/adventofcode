//data prep
var input = document.querySelectorAll('pre')[0].textContent.slice(0,-1).split('\n\n').map(x => x.split('\n'))

for(var i=0; i<input.length;i++) {
    for(var j=0; j<input[i].length; j++) {
        input[i][j] = JSON.parse(input[i][j])
    }
}

const getArrayDepth = value => Array.isArray(value) ?
    1 + Math.max(0, ...value.map(getArrayDepth)) :
    0;

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

//needs to consider when left list of comparisons is larger than right (input[3] vs input[4])
correct_index = []
for(var i=0; i<input.length; i++) {
    left = flatten(input[i][0])
    right = flatten(input[i][1])
    
    if(left.length == right.length) {
        for(var j=0; j<left.length; j++) {
            if(left[j] <= right[j]) {
                console.log(i, j)
                correct_index.push(i+1)
                break;
            }
        }
    }

    if(right.length == 0) {
        console.log("right empty")
        correct_index.push(i+1)
    }

    if(left.length == 0 && right.length != 0) {
        console.log("left empty")
    }

    else {
        min_array = Math.min(left.length, right.length)
        for(var j=0; j<min_array; j++) {
            
            if(left[j] <= right[j]) {
               console.log(i, j, left[j], right[j])
               correct_index.push(i+1)
               break;
            }
        }
    }
}
