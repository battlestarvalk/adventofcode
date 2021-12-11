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

//find all the highpoints (9) - these are the boundaries of the basins
//find all the lowpoints - these are the number of basins that we are going to calculate the size of
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

// remake the ocean floor from earlier into a boolean of boundaries (from the highpoints) and all other spaces
empty_seafloor = new Array(input.length).fill(0).map(x => x = new Array(input[0].length).fill(0))
for(var i=0; i<highpoint_locations.length;i++) {
    empty_seafloor[highpoint_locations[i][0]][highpoint_locations[i][1]] = 9
}

//use a flood fill algo (recursive)
//https://www.codeguru.co.in/2021/10/flood-fill-algorithm-in-javascript.html

function floodFillRec(i, j, oldColor, newColor) {

  // Check the boundary condition
    //don't fill neighbouring cell if it doesn't exist (0 or length)
  if (i < 0 || i >= empty_seafloor.length || j < 0 || j >= empty_seafloor[i].length) return;
    //don't fill neighbouring cell if it is the new colour
  if (empty_seafloor[i][j] !== oldColor) return;

  // set the color of node to newColor - this prevents it from being checked again.
  empty_seafloor[i][j] = newColor;
//basin_location would provide the [i,j] location of each individual basin. however, this is not necessary, so is commented out.
  //basin_location.push([i,j]);
    
  //increase the basin size
  basin_size++;

  // Look for neighboring cell
  floodFillRec(i + 1, j, oldColor, newColor);
  floodFillRec(i - 1, j, oldColor, newColor);
  floodFillRec(i, j + 1, oldColor, newColor);
  floodFillRec(i, j - 1, oldColor, newColor);
}

//starting from each lowpoint, run the flood fill algo
//basins = []
basin_sizes = []

for(var i=0; i<lowpoint_locations.length;i++) {
    //basin_location = []
    basin_size = 0
    floodFillRec(lowpoint_locations[i][0],lowpoint_locations[i][1],0,5)
    //basins.push(basin_location)
    
    //the flood fill algo will have slowly been ticking this upwards, and now we have found every space we can push the size into a list of basin sizes
    basin_sizes.push(basin_size)
}

// sort basin size from highest to lowest
basin_sizes.sort((a,b) => b-a)
// final answer - multiply the first three values of the sort.
basin_sizes[0]*basin_sizes[1]*basin_sizes[2]


