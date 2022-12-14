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
