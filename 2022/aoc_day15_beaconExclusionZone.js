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

map = new Array(map_height+1).fill('.').map(x => x = new Array(map_width+1).fill('.'))

input.forEach(x => {console.log(x); map[x[0]][x[1]] = "S"; map[x[2]][x[3]] = "B";})
