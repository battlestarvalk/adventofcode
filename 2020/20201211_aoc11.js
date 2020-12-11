test_input = ['L.LL.LL.LL',
'LLLLLLL.LL',
'L.L.L..L..',
'LLLL.LL.LL',
'L.LL.LL.LL',
'L.LLLLL.LL',
'..L.L.....',
'LLLLLLLLLL',
'L.LLLLLL.L',
'L.LLLLL.LL']

function searchSeats (row, column, distance, arr) {
 var adjacent = [];
  for(let k = 0; k < distance; k++) {
    // directly above
    if(arr[row-k] != undefined) {
        adjacent.push( arr[row-k].charAt(column) )}
    // directly below
    if(arr[row+k] != undefined) {
        adjacent.push( arr[row+k].charAt(column) )}
    // left
    if(arr[row].charAt(column-k) != undefined) {
        adjacent.push( arr[row].charAt(column-k) )}
    // right
    if(arr[row].charAt(column+k) != undefined) {
        adjacent.push( arr[row].charAt(column+k) )}

  }
    return adjacent;
}

var seatGrid = [];
for(let i = 0; i < test_input.length; i++) {
    for(let j = 0; j < test_input[i].length; j++) {

        if(test_input[i].charAt(j) === ".") {
                seatGrid.push(".");
        }

        else if(test_input[i].charAt(j) === "L") {
            if(searchSeats(i, j, 1, test_input).includes(".") 
                || searchSeats(i, j, 1, test_input).includes("L")) {
                seatGrid.push("#");
            }
            else {
                seatGrid.push("L");
            }
        }
        else if(test_input[i].charAt(j) === "#") {
            if(searchSeats(i, j, 4, test_input).includes(".")
                || searchSeats(i, j, 4, test_input).includes("L")) {
                seatGrid.push("#");
            }
            else {
                seatGrid.push("L");
            }
        }
            
    }
}

var seatMap = seatGrid,
    seatGrid = [];

for(group = 0; group < test_input.length; group++) {
    seatGrid.push(seatMap.slice((10*group), ((10*group) + 9)).join(""))
}

seatGrid
