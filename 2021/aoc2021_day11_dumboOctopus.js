input = document.querySelector('pre').textContent.split('\n').map(x => x.split('')).map((x,y) => x.map(y => Number(y))).slice(0,-1)

function flashCheck (octoGrid, flashGrid) {

  for(var i=0; i<octoGrid.length; i++) {
      for(var j=0; j<octoGrid[i].length; j++) {
          if(octoGrid[i][j] >= 9) {
              flashGrid.push([j,i])
              octoGrid[i].splice(j, 1, 0)
          }
    }
  }
}

function adjacentFlashes (flashArr, stepArr) {

  for(var k=0;k<flashArr.length;k++) {
      col = flashArr[k][0]
      row = flashArr[k][1]
      arrayLen = stepArr.length-1

      //all row above steps
      if(stepArr[row-1]) {
          //top left diagonal
          if(col != 0 && stepArr[row-1][col-1] != 0) {stepArr[row-1][col-1] = stepArr[row-1][col-1] +1}
          //directly above
          if(stepArr[row-1][col] != 0) {stepArr[row-1][col] = stepArr[row-1][col] +1}
          //top right diagonal
          if(col != arrayLen && stepArr[row-1][col+1] != 0) {stepArr[row-1][col+1] = stepArr[row-1][col+1] +1}
      }

      //all row below steps
      if(stepArr[row+1]) {
          //bottom left diagonal
          if(col != 0 && stepArr[row+1][col-1] != 0) {stepArr[row+1][col-1] = stepArr[row+1][col-1] +1}
          //directly below
          if(stepArr[row+1][col] != 0) {stepArr[row+1][col] = stepArr[row+1][col] +1}
          //bottom right diagonal
          if(col != arrayLen && stepArr[row+1][col+1] != 0) {stepArr[row+1][col+1] = stepArr[row+1][col+1] +1}
      }

      //right
      if(col != arrayLen && stepArr[row][col+1] != 0) {stepArr[row][col+1] = stepArr[row][col+1] +1}
      //left
      if(col != 0 && stepArr[row][col-1] != 0) {stepArr[row][col-1] = stepArr[row][col-1] +1}
  }

}

function octoFlashes (inputArr, steps) {
  
  octoGrid = inputArr
  flashes = 0
  flashed = []

  for(var m=0; m<steps+1;m++) {
      octoGrid = octoGrid.map((x,y) => x.map(y => y+1))

      for(var f = 0; f<9; f++) {
        if(flashed.length = 0) {
            break;
        }
              else {
          flashCheck(octoGrid, flashed)
          flashes = flashes +(flashed.length)
          adjacentFlashes(flashed, octoGrid)
          flashed = []
          flashCheck(octoGrid, flashed)
          flashes = flashes +(flashed.length)
        }
    }
  }
  return flashes
}

octoFlashes(input, 100)
