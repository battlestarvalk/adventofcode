/* this answer is 2 too small */
var input = document.querySelector('pre').textContent.split('\n').slice(0,-1),
    output = [];
for(var i=0; i<input.length; i++) {
    if(input[i+1] > input[i]) {
        output.push(input[i+1])
    }
}
output.length
