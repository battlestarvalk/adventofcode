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
highpoint_locations = []

for(var i=0; i<input.length;i++) {
    for(var j=0; j<input[i].length; j++) {
        if(input[i][j] == 0) {
            lowpoint_locations.push([i,j])
        }

        else if(input[i][j] == 9) {
            highpoint_locations.push([i,j]);
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

/*input_test = new Array(10).fill(0).map(x => x = new Array(10).fill(0))
for(var i=0; i<highpoint_locations.length;i++) {
    input_test[highpoint_locations[i][0]][highpoint_locations[i][1]] = 9
}*/

empty_seafloor = new Array(input.length).fill(0).map(x => x = new Array(input[0].length).fill(0))
for(var i=0; i<highpoint_locations.length;i++) {
    empty_seafloor[highpoint_locations[i][0]][highpoint_locations[i][1]] = 9
}

//https://www.codeguru.co.in/2021/10/flood-fill-algorithm-in-javascript.html

function floodFillRec(i, j, oldColor, newColor) {

  // Check the boundary condition
  if (i < 0 || i >= empty_seafloor.length || j < 0 || j >= empty_seafloor[i].length) return;
  if (empty_seafloor[i][j] !== oldColor) return;

  // set the color of node to newColor
  empty_seafloor[i][j] = newColor;
  //basin_location.push([i,j]);
  basin_size++;


  // Look for neighboring cell
  floodFillRec(i + 1, j, oldColor, newColor);
  floodFillRec(i - 1, j, oldColor, newColor);
  floodFillRec(i, j + 1, oldColor, newColor);
  floodFillRec(i, j - 1, oldColor, newColor);
}

//basins = []
basin_sizes = []

for(var i=0; i<lowpoint_locations.length;i++) {
    //basin_location = []
    basin_size = 0
    floodFillRec(lowpoint_locations[i][0],lowpoint_locations[i][1],0,5)
    //basins.push(basin_location)
    basin_sizes.push(basin_size)
}
basin_sizes

basin_sizes.sort((a,b) => b-a)
basin_sizes[0]*basin_sizes[1]*basin_sizes[2]

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
} 


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

function upMovement (array, row, column) {
    distance = column
    length = 0
    
    for(var m=0; m<distance; m++) {
      if(array[row+((1+m)*-1)] != undefined) {
        if(array[row+((1+m)*-1)][column] == 9 || array[row+((1+m)*-1)][column] <= array[row][column]) {
            length = length +m
            break;
        }
      }
    }

    return length
}

function downMovement (array, row, column) {
    distance = input[column].length - column
    length = 0
    
    for(var m=0; m<distance; m++) {
        if(array[row+(1+m)][column] == 9 || array[row+(1+m)][column] <= array[row][column]) {
            length = length +m
            break;
          }
    }

    return length
}
*/
