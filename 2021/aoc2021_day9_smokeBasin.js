input = document.querySelector('pre').textContent.split('\n').slice(0,-1).map(x => x.split("")).map((x,y) => x.map(y => Number(y)))

lowpoints = []

for(var i=0; i<input.length;i++) {
    for(var j=0; j<input[i].length; j++) {
        if(input[i][j] == 0) {
            lowpoints.push(input[i][j])
        }
        else {
            compare = [input[i][j]]
            //leftmost index
            if(input[i][j-1] != undefined) {compare.push(input[i][j-1])}
            //rightmost index
            if(input[i][j+1] != undefined) {compare.push(input[i][j+1])}
            //one below
            if(input[i+1] != undefined && input[i+1][j] != undefined) {compare.push(input[i+1][j])}
            //one above
            if(input[i-1] != undefined && input[i-1][j] != undefined) {compare.push(input[i-1][j])}

            if(Math.min(...compare) == input[i][j]) {
                lowpoints.push(input[i][j])
            }
        }
    }
}

lowpoints.map(x => x+1).reduce((a,b) => (a+b))
