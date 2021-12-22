input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

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
            return /*[ [b[0], a[0]], */
                     [a[0], b[1]]
                   //]
        }

        //if upper range overlap (testArr starts inside oldArr and ends above)
        else if(b[1] >= a[1] && b[0] >= a[0]) {
            // returns ALREADY ON selection
            return /*[*/ [b[0], a[1]] /*, 
                     [a[1], b[1]] 
                   ]*/
        }

        // if testArr laps the whole range
        else { 
            // returns the ALREADY ON section
          return [ 
                    a[0], a[1]
                 /* [ [b[0], a[0]], [a[0], b[1]] ], 
                  [ [b[0], a[1]], [a[1], b[1]] ] */
                  ] 
        }
    }

    else {return 'none'}

}

on_cubes = 0
x = []
y = []
z = []
for(var i = 0; i<input.length; i++) {
    if( i == 0) {
        x.push([reboot[i]['startX'], reboot[i]['endX']])
        y.push([reboot[i]['startY'], reboot[i]['endY']])
        z.push([reboot[i]['startZ'], reboot[i]['endZ']])
console.log(reboot[i], x)
        continue;
    }
    xVal = 0
    yVal = 0
    zVal = 0

    xValneg = 0
    yValneg = 0
    zValneg = 0

    for(var j=0; j<x.length;j++) {
        xRange = rangeFinder(x[j], [reboot[i]['startX'], reboot[i]['endX']])
        if(xRange != 'none') {
            break;
        }
     }

    for(var k=0; k<y.length;k++) {
        yRange = rangeFinder(y[k], [reboot[i]['startY'], reboot[i]['endY']])
        if(yRange != 'none') {
            break;
        }
     }

    for(var m=0; m<z.length;m++) {
        zRange = rangeFinder(z[m], [reboot[i]['startZ'], reboot[i]['endZ']])
        if(zRange != 'none') {
            break;
        }
     }

    xVal = (reboot[i]['endX'] - reboot[i]['startX']) + 1

    if(xRange == 'none') {
        x.push([reboot[i]['startX'], reboot[i]['endX']])  
    }
    if(xRange != 'none') {
        xValneg = (xRange[1] - xRange[0]) + 1
        x[j][0] = Math.min(reboot[i]['startX'], x[j][0])
        x[j][0] = Math.max(reboot[i]['endX'], x[j][1])
    }

    yVal = (reboot[i]['endY'] - reboot[i]['startY']) + 1

    if(yRange == 'none') {
        y.push([reboot[i]['startY'], reboot[i]['endY']])  
    }
    if(yRange != 'none') {
        yValneg = (yRange[1] - yRange[0]) + 1
        y[k][0] = Math.min(reboot[i]['startY'], y[k][0])
        y[k][0] = Math.max(reboot[i]['endY'], y[k][1])
    }

    zVal = (reboot[i]['endZ'] - reboot[i]['startZ']) + 1

    if(zRange == 'none') {
        z.push([reboot[i]['startZ'], reboot[i]['endZ']])  
    }
    if(zRange != 'none') {
        zValneg = (zRange[1] - zRange[0]) + 1
        z[m][0] = Math.min(reboot[i]['startZ'], z[m][0])
        z[m][0] = Math.max(reboot[i]['endZ'], z[m][1])
    }


console.log(reboot[i], xRange, x, xVal, yVal, zVal, xValneg, yValneg, zValneg)
}

// inner mechanisms of example
(3*3*3)
+
(3*3*3 - 2*2*2)
-
(2*2*2)
+
(1*1*1)
