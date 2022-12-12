var input = document.querySelectorAll('pre')[0].textContent.split('\n').slice(0,-1).map(x => x.split(''))
for(var i = 0; i<input.length; i++) {
    for(var j = 0; j<input[i].length; j++) {
        if(input[i][j] != 'E' && input[i][j] != 'S') {
           input[i][j] = input[i][j].charCodeAt(0) - 96 
        }
    }
}

input

//flood fill??
