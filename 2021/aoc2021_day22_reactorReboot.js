input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

reboot = new Array(input.length)

for(var i=0; i<input.length;i++) {
    instr = input[i].match(/(on|off) x=(-?[0-9]+)..(-?[0-9]+),y=(-?[0-9]+)..(-?[0-9]+),z=(-?[0-9]+)..(-?[0-9]+)/)
    reboot[i] = {string: instr[0], state:instr[1], startX:Number(instr[2]), endX:Number(instr[3]), startY:Number(instr[4]), endY:Number(instr[5]), startZ:Number(instr[6]), endZ:Number(instr[7])}
}
reboot

function rangeFinder(oldArr, testArr) {
    a = oldArr
    b = testArr

    if(Math.max(a[0], b[0]) - Math.min(a[1], b[1]) <= 0) {
        if(a[0] >= b[0] && a[1] >= b[1]) {
            return [ [b[0], a[0]], 
                     [a[0], b[1]]
                   ]
        }

        else if(b[1] >= a[1] && b[0] >= a[0]) {
            return [ [b[0], a[1]], 
                     [a[1], b[1]] 
                   ]
        }

        else { 
          return [ 
                  [ [b[0], a[0]], [a[0], b[1]] ], 
                  [ [b[0], a[1]], [a[1], b[1]] ] 
                  ] 
        }
    }

    else {return 'none'}

}

on_cubes = 0
x = []
y = []
x = []

for(var i=0; i<input.length; i++) {
    if(i=0) {
        x.push(reboot[i]['startX'], reboot[i]['endX'])
        y.push(reboot[i]['startY'], reboot[i]['endY'])
        z.push(reboot[i]['startZ'], reboot[i]['endZ'])
        continue;
    }

    if(reboot[i]['state'] == 'on') {
        //x
        for(var j=0; j<x.length;j++) {
            switch(rangeFinder(x[j], [reboot[i]['startX'], reboot[i]['endX']])) {
                case 'none':
                    x.push([reboot[i]['startX'], reboot[i]['endX']]);
                    break;
                case 'lower range overlap':
                    console.log(x[j][0], reboot[i]['startX'])
                    break;
                case 'upper range overlap':
                    console.log(x[j][1], reboot[i]['endX'])
                    break;
                case 'total overlap':
                    console.log(x[j][0], reboot[i]['startX'], x[j][1], reboot[i]['endX'])
                    break;
            }
        }
    }
}

// inner mechanisms of example
(3*3*3)
+
(3*3*3 - 2*2*2)
-
(2*2*2)
+
(1*1*1)
