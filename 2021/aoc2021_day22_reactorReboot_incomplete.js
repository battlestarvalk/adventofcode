//smaller ex
input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

//larger ex
input = document.querySelectorAll('pre')[1].textContent.split('\n').slice(0,-3)

reboot = new Array(input.length)

for(var i=0; i<input.length;i++) {
    instr = input[i].match(/(on|off) x=(-?[0-9]+)..(-?[0-9]+),y=(-?[0-9]+)..(-?[0-9]+),z=(-?[0-9]+)..(-?[0-9]+)/)
    reboot[i] = {string: instr[0], state:instr[1], startX:Number(instr[2]), endX:Number(instr[3]), startY:Number(instr[4]), endY:Number(instr[5]), startZ:Number(instr[6]), endZ:Number(instr[7])}
}
reboot

//detects if range is overlapping and if so, which range
function rangeFinder(oldArr, testArr) {
    a = oldArr
    b = testArr

    //if overlap
    if(Math.max(a[0], b[0]) - Math.min(a[1], b[1]) <= 0) {
        //if lower range overlap (testArr starts below oldArr and ends inside)
        if(a[0] >= b[0] && a[1] >= b[1]) {
            // returns ALREADY ON selection
            return [ a[0], b[1] ];
        }

        //if upper range overlap (testArr starts inside oldArr and ends above)
        else if(b[0] >= a[0] && b[1] >= a[1] ) {
            // returns ALREADY ON selection
            return [ b[0], a[1] ];
        }

        // if testArr laps the whole range
        else { 
            // returns the ALREADY ON section
          return [ a[0], a[1] ];
        }
    }

    else {return 'none';}

}

/*DOESN'T WORK WHEN NEGATIVES ARE INVOLVED*/
on_cubes = 0
cubes = [[],[],[]]
dimensions = ['X','Y','Z']

for(var i = 0; i<input.length; i++) {
        
    posVal = [0,0,0]
    negVal = [0,0,0]

    if( i == 0 ) {
        for(var k=0; k<3;k++) {
            dim = dimensions[k]
            cubes[k].push([reboot[i]['start'+dim], reboot[i]['end'+dim]])
                        posVal[k] = (reboot[i]['end'+dim] - reboot[i]['start'+dim]) + 1
        }
        on_cubes += posVal.reduce((a,b) => a*b)

        continue;
    }
   
    for(var k=0; k<3;k++) {
        dim = dimensions[k]
        start = reboot[i]['start'+dim]
        end = reboot[i]['end'+dim]
        for(var j=0; j<dim.length;j++) {
            range = rangeFinder(cubes[k][j], [start, end])
            if(range != 'none') {
                break;
            }
         }

        posVal[k] = (end - start) + 1

        if(range == 'none') {
            cubes[k].push([start, end]) 
        }
        else if(range != 'none') {
            negVal[k] = (range[1] - range[0]) + 1
            if(reboot[i]['state'] == 'on') {
                cubes[k][j][0] = Math.min(start, cubes[k][j][0])
                cubes[k][j][1] = Math.max(end, cubes[k][j][1])
               }

            else if(reboot[i]['state'] == 'off') {
                cubes[k][j][0] = Math.max(end, cubes[k][j][0])
                cubes[k][j][1] = Math.min(start, cubes[k][j][1])
               }
        }
    
    }
    if(reboot[i]['state'] == 'on') {
        on_cubes += (posVal.reduce((a,b) => a*b) - negVal.reduce((a,b) => a*b))
    }

    if(reboot[i]['state'] == 'off') {
        on_cubes -= (negVal.reduce((a,b) => a*b))
    }

}
