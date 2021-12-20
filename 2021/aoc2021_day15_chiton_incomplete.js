input = document.querySelector('pre').textContent.split('\n').slice(0,-1).map(x => x.split("")).map((x,y) => x.map(y => Number(y)))

// doesn't work - need to calculate how to progressively peek ahead in the instance of a tie-break
coordinate = [[0,0]]
for(var i=0;i<coordinate.length;i++) {
    x = coordinate[i][0]
    y = coordinate[i][1]

    down = input[x+1][y]
    right = input[x][y+1]
    peek_ahead_right = input[x][y+2] + input[x+1][y+1] + right
    peek_ahead_down = input[x+2][y] + input[x+1][y+1] + down

    if(peek_ahead_right > peek_ahead_down) {
       coordinate.push([x+1, y])
    }
    if(peek_ahead_down > peek_ahead_right) {
       coordinate.push([x, y+1])
    }

    if(i == 10) {
        break;
    }
}
coordinate
