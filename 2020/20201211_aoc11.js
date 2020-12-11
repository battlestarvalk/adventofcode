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
  for(let k = 1; k <= distance; k++) {
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

function shiftSeats (arr) {
 var seatGrid = [];
 for(let i = 0; i < arr.length; i++) {
   var seatMap = [];
     for(let j = 0; j < arr[i].length; j++) {

         if(arr[i].charAt(j) === ".") {
                 seatMap.push(".");
         }

         else if(arr[i].charAt(j) === "L") {
             if(searchSeats(i, j, 1, arr).includes("L")) {
                 seatMap.push("#");
             }
             else {
                 seatMap.push("L");
             }
         }
         else if(arr[i].charAt(j) === "#") {
             if(searchSeats(i, j, 4, arr).includes("L")) {
                 seatMap.push("#");
             }
             else {
                 seatMap.push("L");
             }
         }     
     }
     seatGrid.push( seatMap.join("") )
 }
 return seatGrid
}
shiftSeats(test_input)
