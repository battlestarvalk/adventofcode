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

function findMaxTrees(arr) {
    max = []
    tallTree = Math.max(...arr)
    idx = arr.indexOf(tallTree)
    while (idx !== -1) {
        max.push(idx);
        idx = arr.indexOf(tallTree, idx + 1);
    }
    return max
}

forest_height = column_grid.length
forest_width = rows_grid.length

for(var i=1; i<forest_width-1; i++) {
    for(var j=1; j<forest_height-1; j++) {
        tree = rows_grid[i][j]
        tallest = 0

        left_array = rows_grid[i].slice(0, j+1)
        right_array = rows_grid[i].slice(j, forest_width+1)
        top_array = column_grid[j].slice(0, i+1)
        low_array = column_grid[j].slice(i, forest_width+1)

        if(tree == Math.max(...left_array)) {
            if(Math.min(...findMaxTrees(left_array)) == i) {
                console.log("tallest on the left", i, j, rows_grid[i][j], left_array)
            }
        }

        if(tree == Math.max(...right_array)) {
            if(Math.max(...findMaxTrees(right_array))+i == i) {
                console.log("tallest on the right", i, j, rows_grid[i][j], right_array)
            }
        }
    }
}
