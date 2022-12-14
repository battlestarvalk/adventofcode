var input = document.querySelectorAll('pre')[0].textContent.split('\n').slice(0,-1)
    .map(y => y.match(/[0-9]+,[0-9]+/gi).map(x => x.match(/([0-9]+),([0-9]+)/).slice(1).map(Number)))

rock_x = [];
rock_y = [];
input.forEach(x => x.forEach(y => {rock_x.push(y[0]); rock_y.push(y[1]);}))

rock_start = Math.min(...rock_x)
rock_end = Math.max(...rock_x)
rock_bed = Math.max(...rock_y)
rock_width = rock_end - rock_start

cave_system = new Array(rock_bed+1).fill('.').map(x => x = new Array(rock_width+1).fill('.'))

for(var i=0;i<input.length;i++) {
    for(var j=1; j<input[i].length;j++) {
        first_co = [input[i][j-1][0] - rock_start, input[i][j-1][1]]
        sec_co = [input[i][j][0] - rock_start, input[i][j][1]]

        x_start = Math.min(...[first_co[0], sec_co[0]])
        x_end = Math.max(...[first_co[0], sec_co[0]])
        y_start = Math.min(...[first_co[1], sec_co[1]])
        y_end = Math.max(...[first_co[1], sec_co[1]])

        if(x_end - x_start != 0) {
            for(var x = x_start; x <= x_end; x++) {
                cave_system[y_start][x] = "#"
            }
        }

        if(y_end - y_start != 0) {
            for(var y = y_start; y <= y_end; y++) {
                cave_system[y][x_start] = "#"
            }
        }
        
        
    }
}

cave_system
