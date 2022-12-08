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

interior_visible = 0

for(var i=1; i<forest_width-1; i++) {
    for(var j=1; j<forest_height-1; j++) {
        tree = rows_grid[i][j]
        tallest = 0

        left_array = rows_grid[i].slice(0, j+1)
        right_array = rows_grid[i].slice(j, forest_width+1)
        top_array = column_grid[j].slice(0, i+1)
        low_array = column_grid[j].slice(i, forest_width+1)

        if(tree == Math.max(...left_array)) {
            if(Math.min(...findMaxTrees(left_array)) == j) {
               // console.log("tallest on the left", i, j, rows_grid[i][j], left_array)
                tallest++
            }
        }

        if(tree == Math.max(...right_array)) {
            if(Math.max(...findMaxTrees(right_array))+j == j) {
                //console.log("tallest on the right", i, j, rows_grid[i][j], right_array)
                tallest++
            }
        }

        if(tree == Math.max(...top_array)) {
            if(Math.min(...findMaxTrees(top_array)) == i) {
                //console.log("tallest above", i, j, column_grid[j][i], top_array, Math.min(...findMaxTrees(top_array)), j)
                tallest++
            }
        }

        if(tree == Math.max(...low_array)) {
            if(Math.max(...findMaxTrees(low_array))+i == i) {
                //console.log("tallest below", i, j, column_grid[j][i], low_array)
                tallest++
            }    
        }

        if(tallest > 0) {
            interior_visible++
        }
        
    }
}

interior_visible + (2*forest_width) + (2*(forest_height-2))

//NEEDS FIXING
for(var i=1; i<forest_width-1; i++) {
    for(var j=1; j<forest_height-1; j++) {
        tree = rows_grid[i][j]
        tallest = [0,0,0,0]

        left_array = rows_grid[i].slice(0, j).reverse().findIndex(x => (x >= tree))
        right_array = rows_grid[i].slice(j+1, forest_width+1).findIndex(x => (x >= tree))
        top_array = column_grid[j].slice(0, i).reverse().findIndex(x => (x >= tree))
        low_array = column_grid[j].slice(i+1, forest_width+1).findIndex(x => (x >= tree))

        tallest[0] += left_array == -1 ? j : left_array+1
        tallest[1] += right_array == -1 ? (forest_width-j) : right_array+1
        tallest[2] += top_array == -1 ? i : top_array+1
        tallest[3] += low_array == -1 ? (forest_height-i) : low_array+1

        console.log(i, j, tallest, tallest.reduce((a,b) => a*b))
    }
}
