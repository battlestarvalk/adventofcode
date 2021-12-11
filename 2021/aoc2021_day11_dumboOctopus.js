input = document.querySelector('pre').textContent.split('\n').map(x => x.split('')).map((x,y) => x.map(y => Number(y))).slice(0,-1)

/*setup*/

// flashCheck is pushes the location of every octopus ready to flash into an array (flashGrid) and then reset the octopus' charge on the original array (octoGrid)
function flashCheck (octoGrid, flashGrid) {

  for(var i=0; i<octoGrid.length; i++) {
      for(var j=0; j<octoGrid[i].length; j++) {
          if(octoGrid[i][j] > 9) {
              flashGrid.push([j,i])
              octoGrid[i].splice(j, 1, 0)
          }
    }
  }
}

// adjacent flashes is going to charge up every octopus (flashArr) in range of an octopus that just flashed (stepArr)
// it needs to ignore all octopus who have already flashed (ignores a 0 value)
function adjacentFlashes (flashArr, stepArr) {

  for(var k=0;k<flashArr.length;k++) {
      col = flashArr[k][0]
      row = flashArr[k][1]
      arrayLen = (stepArr.length)-1

      //all row above steps
      if(stepArr[row-1]) {
          //top left diagonal
          if(col != 0 && stepArr[row-1][col-1] != 0) {stepArr[row-1][col-1] +=1}
          //directly above
          if(stepArr[row-1][col] != 0) {stepArr[row-1][col] +=1}
          //top right diagonal
          if(col != arrayLen && stepArr[row-1][col+1] != 0) {stepArr[row-1][col+1] +=1}
      }

      //all row below steps
      if(stepArr[row+1]) {
          //bottom left diagonal
          if(col != 0 && stepArr[row+1][col-1] != 0) {stepArr[row+1][col-1] +=1}
          //directly below
          if(stepArr[row+1][col] != 0) {stepArr[row+1][col] +=1}
          //bottom right diagonal
          if(col != arrayLen && stepArr[row+1][col+1] != 0) {stepArr[row+1][col+1] +=1}
      }

      //right
      if(col != arrayLen && stepArr[row][col+1] != 0) {stepArr[row][col+1] +=1}
      //left
      if(col != 0 && stepArr[row][col-1] != 0) {stepArr[row][col-1] +=1}
  }

}

/*part one*/
// start with the input locations (inputArr) and note how many steps this will go for (steps)
function octoFlashes (inputArr, steps) {

// before the steps start, flashes is zero
  octoGrid = inputArr
  flashes = 0

  for(var m=0; m<steps;m++) {
    // for the first step, charge all octopus up by one
      octoGrid = octoGrid.map((x,y) => x.map(y => y+1))

      for(var f = 0; ;f++) {
        // reset the locations array of flashed octopus
        flashed = []
        flashCheck(octoGrid, flashed)
        // add all the octopus who have flashed to our counter
        flashes +=(flashed.length)
        // check all adjacent octopus from our flashCheck
        adjacentFlashes(flashed, octoGrid)
        // if no more octopus flash, then break this loop and prepare for the next step
        if(flashed.length == 0) {break;}
    }
  }
  
  // return total flashes within the set step count
  return flashes
}

octoFlashes(input, 100)

/*part two*/

function octoSync (inputArr) {
  octoGrid = inputArr
  flashes = 0
  // similar to above, only now we need to know the number of octopus we're dealing with
  goal = octoGrid.flat().length
  // steps is no longer in the for loop, as we don't know the value ahead of time
  syncStep = 0

  for(var m=0;;m++) {
    // if the number of flashes is equal to the goal (all octopus have flashed in this step), break the loop and save the step #
    if(flashes == goal) {syncStep = m; break;}
    // otherwise, reset the flash number and check again
    flashes = 0
    octoGrid = octoGrid.map((x,y) => x.map(y => y+1))
    
    for(var f = 0;;f++) {
      // same logic as above
      flashed = []
      flashCheck(octoGrid, flashed)
      flashes +=(flashed.length)
      adjacentFlashes(flashed, octoGrid)
      if(flashed.length == 0) {break;}
    }
  }
  
  // return which step the octopus were on when the m for-loop stopped
  return syncStep
}

octoSync(input)
