const day5_input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

// part 1
var boardingPass = [];

// for each distinct boarding pass
day5_input.forEach(function(line){
  var rows = [0, 127];
  // first seven letters only
      for(let i = 0; i < 8; i++) {

        if(line.charAt(([i])) === "F") {
          // lower bound is kept the same, upper bound is created by finding the difference between the upper and lower bound and adding it to lower bound
          var rows = ([ rows[0], ((((rows[1] - rows[0]) + 1) / 2) + rows[0]) - 1 ])
        }

        else if(line.charAt(([i])) === "B") {
          // upper bound is kept the same, lower bound is created by finding the difference between upper and lower bound and subtracting it from the upper bound
            var rows = ([ (rows[1] - (((rows[1] - rows[0]) + 1) / 2)) + 1 , rows[1] ])
            }
      }

  // same again for each column
  // final three letters
  var columns = [0, 7];
      for(let i = 7; i < 10; i++) {

        if(line.charAt(([i])) === "L") {

          var columns = ([ columns[0], ((((columns[1] - columns[0]) + 1) / 2) + columns[0]) - 1 ])
        }

        else if(line.charAt(([i])) === "R") {

            var columns = ([ (columns[1] - (((columns[1] - columns[0]) + 1) / 2)) + 1 , columns[1] ])
            }
      }
// create each seatID in a new array, multiply row by 8 and add column. both figures in array should be the same so take the first one
  boardingPass.push((rows[0]*8) + columns[0])

})

// highest seatID in array
Math.max(...boardingPass)

// part 2

var sortedBP = [];
// sort all seatIDs 
boardingPass.sort()
// for each seatID, find the difference between it and the one below it
for (let i=0; i < boardingPass.length; i++) {

    sortedBP.push( [boardingPass[i], boardingPass[i+1] - boardingPass[i]] )
}

// where the difference is 2, is the seatID before yours (the missing one)
var missingSeat = sortedBP.filter(function(missingID) {
    return missingID[1] === 2
 })

// add 1 to seatID before yours!
missingSeat[0][0] + 1
