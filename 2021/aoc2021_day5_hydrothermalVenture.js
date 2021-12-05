const input = document.querySelector('pre').textContent.split('\n').slice(0,-1);

var movement = input.map(line => {
  const [start, end] = line.split(' -> ');
  const [startX, startY] = start.split(',').map(Number);
  const [endX, endY] = end.split(',').map(Number);
  return { startX, startY, endX, endY };
})

xSize = [],
ySize = [];
movement.forEach(x => (xSize.push(x["endX"], x["startX"]), ySize.push(x["endY"], x["startY"])))

/*part one*/
var oceanFloor = [...Array(Math.max(...ySize)+1)].map(e => Array(Math.max(...xSize)+1).fill(0));

for(var j = 0;j<movement.length;j++){

  if(movement[j]["startX"] - movement[j]["endX"] == 0) {
        start = Math.min(movement[j]["endY"], movement[j]["startY"])
        end = Math.max(movement[j]["endY"], movement[j]["startY"])

        for(var i = start; i<end+1;i++) {
          oceanFloor[i][movement[j]["startX"]]++
          //console.log(j, i, end, start, oceanFloor[i][movement[j]["startX"]])
        }
  }

  if(movement[j]["startY"] - movement[j]["endY"] == 0) {
          start = Math.min(movement[j]["endX"], movement[j]["startX"])
          end = Math.max(movement[j]["endX"], movement[j]["startX"])

          for(var i = start; i<end+1;i++) {
           oceanFloor[movement[j]["startY"]][i]++
           //console.log(j, i, end, start, oceanFloor[movement[j]["startY"]][i])
          }
  }

}

readout = []
for(var k = 0;k<oceanFloor.length;k++) {
    for(var m = 0;m<oceanFloor[k].length;m++) {
        readout.push(oceanFloor[k][m])
    }
}

readout.filter(x => x > 1).length


/*part two*/
var oceanFloor = [...Array(Math.max(...ySize)+1)].map(e => Array(Math.max(...xSize)+1).fill(0));

for(var j = 0;j<movement.length;j++){

  if(movement[j]["startX"] - movement[j]["endX"] == 0) {
    start = Math.min(movement[j]["endY"], movement[j]["startY"])
    end = Math.max(movement[j]["endY"], movement[j]["startY"])

    for(var i = start; i<end+1;i++) {
      oceanFloor[i][movement[j]["startX"]]++
            //console.log(j, i, i, movement[j]["startX"])
    }
  }

  else if(movement[j]["startY"] - movement[j]["endY"] == 0) {
    start = Math.min(movement[j]["endX"], movement[j]["startX"])
    end = Math.max(movement[j]["endX"], movement[j]["startX"])

    for(var i = start; i<end+1;i++) {
      oceanFloor[movement[j]["startY"]][i]++
            //console.log(j, i, movement[j]["startY"], i)
    }
  }

    else {
      xMove = Math.sign(movement[j]["endX"] - movement[j]["startX"])
      yMove = Math.sign(movement[j]["endY"] - movement[j]["startY"])
      distance = Math.abs(movement[j]["endX"] - movement[j]["startX"])
        
      for(var i = 0; i<distance+1;i++) {
        oceanFloor[(movement[j]["startY"])+(i*yMove)][(movement[j]["startX"])+(i*xMove)]++
        //console.log(j, i, (movement[j]["startY"])+(i*yMove), (movement[j]["startX"])+(i*xMove))
      }
    }

}

readout = []
for(var k = 0;k<oceanFloor.length;k++) {
    for(var m = 0;m<oceanFloor[k].length;m++) {
        readout.push(oceanFloor[k][m])
    }
}

readout.filter(x => x > 1).length
