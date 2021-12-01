/*part one*/
var input = document.querySelector('pre').textContent.split('\n').slice(0,-1).map(Number);

function increasifier(array) {
    var output = [];
        for(var i=0; i<array.length; i++) {
            if(array[i] > array[i-1]) {
                output.push(array[i])
            }
        }
    return output.length
}
increasifier(input)

/*part two*/

function rollWindow (array) {
var first_run = array,
    temp_array = [],
    output = [];

for(var i=0; i<first_run.length; i++) {
    temp_array.push([first_run[i-2], first_run[i-1], first_run[i]].reduce(function(acc, val) { return acc + val; }, 0))
}
temp_array.slice(2)

for(var i=0; i<temp_array.length; i++) {
    if(temp_array[i]-temp_array[i-1] > 0) {
        output.push(temp_array[i])
    }
}

return output.length

}
rollWindow(input)
