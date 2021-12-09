input = document.querySelector('pre').textContent.split('\n').slice(0,-1).map(x => x.split("")).map((x,y) => x.map(y => Number(y)))

lowpoints = []

for(var i=0; i<input.length;i++) {
    for(var j=0; j<input[i].length; j++) {
        if(input[i][j] == 0) {
            lowpoints.push(1)
        }
        else {
            compare = [input[i][j]]
            //leftmost index
            if(input[i][j-1] != undefined && input[i][j-1] <= input[i][j]) {compare.push(input[i][j-1])}
            //rightmost index
            if(input[i][j+1] != undefined && input[i][j+1] <= input[i][j]) {compare.push(input[i][j+1])}
            //one below
            if(input[i+1] != undefined && input[i+1][j] != undefined && input[i+1][j] <= input[i][j]) {compare.push(input[i+1][j])}
            //one above
            if(input[i-1] != undefined && input[i-1][j] != undefined && input[i-1][j] <= input[i][j]) {compare.push(input[i-1][j])}

            if(compare.length == 1) {
                lowpoints.push(input[i][j] + 1)
            }
        }
    }
}

lowpoints.reduce((a,b) => (a+b))
