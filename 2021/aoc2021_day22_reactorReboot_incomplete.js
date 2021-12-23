//detects if range is overlapping and if so, which range
function rangeFinder(oldArr, testArr) {
    a = oldArr
    b = testArr

    //if overlap, return the range of lights already on
    if(Math.max(a[0], b[0]) - Math.min(a[1], b[1]) <= 0) {
        //if lower range overlap (testArr starts below oldArr and ends inside)
        if(a[0] >= b[0] && a[1] >= b[1]) {
            //[on, off]
            return [ [a[0], b[1]], [b[1], a[1]] ];
        }

        //if upper range overlap (testArr starts inside oldArr and ends above)
        else if(b[0] >= a[0] && b[1] >= a[1] ) {
            //[on, off]
            return [ [b[0], a[1]], [a[0], b[0]] ];
        }

        // if testArr laps the whole range
        else { 
          return [ [ b[0], b[1] ], [ [ a[0], b[0] ], [ b[1], a[1] ] ] ];
        }
    }

    // else, say nothing
    else {return 'none';}

}


//smaller ex
input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

//larger ex
input = document.querySelectorAll('pre')[1].textContent.split('\n').slice(0,-3)

reboot = new Array(input.length)

for(var i=0; i<input.length;i++) {
    instr = input[i].match(/(on|off) x=(-?[0-9]+)..(-?[0-9]+),y=(-?[0-9]+)..(-?[0-9]+),z=(-?[0-9]+)..(-?[0-9]+)/)
    reboot[i] = {string: instr[0], state:instr[1], startX:Number(instr[2]), endX:Number(instr[3]), startY:Number(instr[4]), endY:Number(instr[5]), startZ:Number(instr[6]), endZ:Number(instr[7])}
}


//set up variables that shouldn't reset
// cubes that are switched on
on_cubes = 0
// cube ranges that are on in each direction
cubes = [[],[],[]]
// dimensions (for Quick Read)
dimensions = ['X','Y','Z']

// for each instruction
for(var i = 0; i<reboot.length; i++) {
    // should be fresh each time
    // posVal = off cubes to be switched ON
    posVal = [0,0,0]
    // negVal = on cubes to be left/switched OFF
    negVal = [0,0,0]

    // set up the array on the first cycle
    if( i == 0 ) {
        for(var k=0; k<3;k++) {
            dim = dimensions[k]
            cubes[k].push([reboot[i]['start'+dim], reboot[i]['end'+dim]])
            posVal[k] = (reboot[i]['end'+dim] - reboot[i]['start'+dim]) + 1

        }
        // first round is always on, no overlaps to worry about
        on_cubes += posVal.reduce((a,b) => a*b)
        continue;
    }
   
    //for each dimension
    for(var k=0; k<3;k++) {
        //dimension letter
        dim = dimensions[k]
        //start and end of dimension
        start = reboot[i]['start'+dim]
        end = reboot[i]['end'+dim]

console.log(i, reboot[i]['state'], dim, start, end, cubes[k].flat())

        //distance of lights we want switched ON
        // using math.max and math.abs to prevent any negative number nonsense
		posVal[k] = Math.abs(Math.max(end, start) - Math.min(start)) + 1
        for(var j=0; j<cubes[k].length;j++) {
            overlap = false
            // feed in each lit range and push out the currently lit range
            range = rangeFinder(cubes[k][j], [start, end])
           
            // if it finds a hit
            if(range != 'none') {
                //negative val from the dimension - cubes that are CURRENTLY ON
                negVal[k] = Math.abs(Math.max(range[0][1], range[0][0]) - Math.min(range[0][1], range[0][0])) + 1
                //update the new lit range as appropriate - if on
                if(reboot[i]['state'] == 'on') {
                    cubes[k][j][0] = Math.min(start, cubes[k][j][0])
                    cubes[k][j][1] = Math.max(end, cubes[k][j][1])
                }

                //update the new lit range as appropriate - if off
                else if(reboot[i]['state'] == 'off') {
                    if(range[1].flat().length == 2) {
                        cubes[k][j][0] = range[1][0]
                        cubes[k][j][1] = range[1][1]
                    }

                    else if(range[1].flat().length > 2) {
                        cubes[k].splice(j, 1)
                        cubes[k].push(range[1][0], range[1][1])
                    }
                }
                // we found a range, so no need to push this new range to the dimensions list
                overlap = true
            }

            else if(overlap == false) {
               cubes[k].push([start, end]) 
            }

        }


    }

 
    //if switching a range on, then switch ON positive cubes MINUS all the currently on
    if(reboot[i]['state'] == 'on') {
        on_cubes += (posVal.reduce((a,b) => a*b) - negVal.reduce((a,b) => a*b))
    }

    //if switching a range off, then MINUS all the currently on cubes.
    if(reboot[i]['state'] == 'off') {
        on_cubes -= (negVal.reduce((a,b) => a*b))
    }

}
on_cubes
