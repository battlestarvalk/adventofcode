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

for(var i=0; i<input.length; i++) {
    left = input[i][0]
    right = input[i][1]

    console.log(getArrayDepth(left), getArrayDepth(right))
}
