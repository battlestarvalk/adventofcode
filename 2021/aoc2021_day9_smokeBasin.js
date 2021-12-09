input = document.querySelector('pre').textContent.split('\n').slice(0,-1).map(x => x.split("")).map((x,y) => x.map(y => Number(y)))

/*part one */
lowpoints = []

for(var i=0; i<input.length;i++) {
    for(var j=0; j<input[i].length; j++) {
        if(input[i][j] == 0) {
            lowpoints.push(1)
        }
        else {
            compare = [input[i][j]]
            //leftmost index
            if(input[i][j-1] <= input[i][j]) {compare.push(input[i][j-1])}
            //rightmost index
            if(input[i][j+1] <= input[i][j]) {compare.push(input[i][j+1])}
            //one below
            if(input[i+1] != undefined && input[i+1][j] <= input[i][j]) {compare.push(input[i+1][j])}
            //one above
            if(input[i-1] != undefined && input[i-1][j] <= input[i][j]) {compare.push(input[i-1][j])}

            if(compare.length == 1) {
                lowpoints.push(input[i][j] + 1)
            }
        }
    }
}

lowpoints.reduce((a,b) => (a+b))

/*part two*/

input = document.querySelector('pre').textContent.split('\n').slice(0,-1).map(x => x.split("")).map((x,y) => x.map(y => Number(y)))

lowpoint_locations = []

for(var i=0; i<input.length;i++) {
    for(var j=0; j<input[i].length; j++) {
        if(input[i][j] == 0) {
            lowpoint_locations.push([i,j])
        }

        else if(input[i][j] == 9) {
            continue;
        }
        
        else {
            compare = [input[i][j]]
            //leftmost index
            if(input[i][j-1] <= input[i][j]) {compare.push(input[i][j-1])}
            //rightmost index
            if(input[i][j+1] <= input[i][j]) {compare.push(input[i][j+1])}
            //one below
            if(input[i+1] != undefined && input[i+1][j] <= input[i][j]) {compare.push(input[i+1][j])}
            //one above
            if(input[i-1] != undefined && input[i-1][j] <= input[i][j]) {compare.push(input[i-1][j])}

            if(compare.length == 1) {
                lowpoint_locations.push([i,j])
            }
        }
    }
}

lowpoint_locations

/*function allDirections (direction, rowMovement, colMovement) {

    distance = direction
    length = 0

    for(var m=0; m<distance; m++) {
        if(input[row+(rowMovement)][column+(colMovement)] == 9 || input[row+(rowMovement)][column+(colMovement)] <= input[row][column]) {
            length +m
            break;
        }
    }

    return length
} */


row = lowpoint_locations[2][0]
column = lowpoint_locations[2][1]

up_distance = column
down_distance = input[column].length - column

function rightMovement (array, row, column) {

    distance = array[row].length - row
    length = 0

    for(var m=0; m<distance; m++) {
        if(array[row][column+(1+m)] == 9 || array[row][column+(1+m)] <= array[row][column]) {
            length = length +m
            break;
        }
    }

    return length
}

function leftMovement (array, row, column) {

    distance = row
    length = 0

    for(var m=0; m<distance; m++) {
        if(array[row][column+((1+m)*-1)] == 9 || array[row][column+((1+m)*-1)] <= array[row][column]) {
            length = length +m
            break;
        }
    }

    return length
}
