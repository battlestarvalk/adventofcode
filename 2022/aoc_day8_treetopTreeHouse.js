var input = document.querySelector('pre').textContent.split('\n').slice(0,-1),
    rows = input,
    column_prep = input.map(x => x.split(""));

column = new Array(column_prep[0].length).fill('')
for(var i = 0; i<column_prep.length; i++) {
    for(var j = 0; j<column_prep[i].length; j++) {
        column[i] += String(column_prep[j][i])
    }
}

rows_grid = rows.map(x => x.split("")).map((x,y) => x.map(y => Number(y)))
column_grid = column.map(x => x.split("")).map((x,y) => x.map(y => Number(y)))

/*
mins = []
for(var i= 1; i<rows_grid.length-1; i++) {
    interior = rows_grid[i].slice(1,rows_grid[i].length-1)
    min_row_val = Math.min(...interior)
    idx = rows_grid[i].indexOf(min_row_val)
    while (idx !== -1) {
        if(idx != 0 && idx != rows_grid.length-1) { 
            mins.push({column: idx, row: i, value: min_row_val});
        }
        idx = rows_grid[i].indexOf(min_row_val, idx + 1);
    }
}
*/


forest_height = column_grid.length
forest_width = rows_grid.length

for(var i=1; i<forest_width-1; i++) {
    for(var j=1; j<forest_height-1; j++) {
        tree = rows_grid[i][j]
        tallest = 0

        left_array = Math.max(...rows_grid[i].slice(0, j))
        right_array = Math.max(...rows_grid[i].slice(j, 4))
        top_array = Math.max(...column_grid[j].slice(0, i))
        low_array = Math.max(...column_grid[j].slice(i, 4))

        //console.log(i, j, rows_grid[i][j], column_grid[j][i])
    }
}
