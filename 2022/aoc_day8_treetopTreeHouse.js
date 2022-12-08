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

column_grid = column.map(x => x.split("")).map((x,y) => x.map(y => Number(y)))
