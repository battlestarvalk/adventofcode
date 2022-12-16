var input = document.querySelectorAll('pre')[0].textContent.split('\n').slice(0,-1)
    .map(x => x.match(/[0-9-]+/gi)).map(x => x.map(y => Number(y)))

beacon_distances = []
for(var i=0; i < input.length; i++) {
    coordinates = input[i]
    x_axis = [coordinates[0], coordinates[2]]
    y_axis = [coordinates[1], coordinates[3]]

    distance_x = Math.max(...x_axis) - Math.min(...x_axis)
    distance_y = Math.max(...y_axis) - Math.min(...y_axis)

    beacon_distances.push(distance_x + distance_y)
}

map_x = []
map_y = []
input.forEach(x => {map_x.push(x[0], x[2]); map_y.push(x[1], x[3]);})

map_start = Math.min(...map_x)
map_end = Math.max(...map_x)
map_bottom = Math.max(...map_y)
map_top = Math.min(...map_y)
map_width = map_end - map_start
map_height = map_bottom - map_top

sensors = []
for(var i = 0;i< input.length;i++) {
    input[i][0] += Math.abs(map_start)
    input[i][1] += Math.abs(map_top)
    input[i][2] += Math.abs(map_start)
    input[i][3] += Math.abs(map_top)

    sensors.push([input[i][0], input[i][1]])
}

map = new Array(map_height+1).fill('.').map(x => x = new Array(map_width+1).fill('.'))

input.forEach(x => {map[x[1]][x[0]] = "S"; map[x[3]][x[2]] = "B";})

beacon_locations = []
diamond = []
for(var i=6; i<7; i++) {
    x = sensors[i][0]
    y = sensors[i][1]
    distance = beacon_distances[i]
    //diamond.push(Array((distance)*2 + 1).fill())

    for(var j=0; j<=distance; j++) {
        for(var k=0; k<=distance; k++) {
            if (Math.abs(x-k)+Math.abs(y-j) < distance) {
                map[y+j][x+k] = "#"
                //map[y-j][x-k] = "#"
            } 
        }
    }
}

//http://jsfiddle.net/truefreestyle/Suww8/

diamond = []
function setDiamond (speed, center_x, center_y) {
    
    for (i = 0; i < map_height+1; i++) {
        for (j = 0; j < map_width+1; j++) {
            distance = Math.abs(i - center_x) + Math.abs(j - center_y);
            if (distance <= speed) {
                diamond.push([i, j]);
            }
        } 
    }    
}

setDiamond(9, 8, 7);
