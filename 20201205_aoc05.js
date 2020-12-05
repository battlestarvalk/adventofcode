const day5_input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

// part 1
var boardingPass = [];

day5_input.forEach(function(line){
  var rows = [0, 127];
      for(let i = 0; i < 8; i++) {

        if(line.charAt(([i])) === "F") {

          var rows = ([ rows[0], ((((rows[1] - rows[0]) + 1) / 2) + rows[0]) - 1 ])
        }

        else if(line.charAt(([i])) === "B") {

            var rows = ([ (rows[1] - (((rows[1] - rows[0]) + 1) / 2)) + 1 , rows[1] ])
            }
      }

  var columns = [0, 7];
      for(let i = 7; i < 10; i++) {

        if(line.charAt(([i])) === "L") {

          var columns = ([ columns[0], ((((columns[1] - columns[0]) + 1) / 2) + columns[0]) - 1 ])
        }

        else if(line.charAt(([i])) === "R") {

            var columns = ([ (columns[1] - (((columns[1] - columns[0]) + 1) / 2)) + 1 , columns[1] ])
            }
      }

  boardingPass.push((rows[0]*8) + columns[0])

})

Math.max(...boardingPass)
