var input = document.querySelector('pre').textContent.split('\n').slice(0,-1),
    called_nos = input[0].split(",").map(Number),
    boards = input.slice(2);

numerical_board = []
for(var i = 0; i<boards.length;i++) {
   boards[i].split(" ").filter(x => x != "").forEach(x => numerical_board.push(x))
}

numerical_board = numerical_board.map(Number)

//each array part will represent one board
mini_boards = [];
for(var j = 0;j<(numerical_board.length/25); j++) {
    mini_boards.push(numerical_board.slice((25*j), (25*(j+1))))
}

/*prep for both parts*/

function bingoCaller(indexCall) {
    // % defines the column, trun defines the row. adds one to each array counter
    return bingocol[indexCall%5]++,
           bingorow[Math.trunc(indexCall/5)]++;

}

filled_boxes = [],
winning_round = [],
winning_num = [];

//first for loop - each board
for(var k = 0; k<mini_boards.length; k++) {
// need to know all called numbers
  filled_boxes.push([])
// new row/col counter
    var bingorow = [0,0,0,0,0],
        bingocol = [0,0,0,0,0];

//second for loop - each called number
    for(var m = 0;m<called_nos.length;m++) {
    // tick off every instance of a number
    var idx = mini_boards[k].indexOf(called_nos[m], idx + 1)

    while (idx != -1) {
//use the bingoCaller function from earlier to fill the row/columns ticked off
      bingoCaller(idx)
      filled_boxes[k].push(idx)
      idx = mini_boards[k].indexOf(called_nos[m], idx + 1);
    }
// after each called number, check if any row/number has 5 yet    
        if(Math.max(...bingorow) == 5 || Math.max(...bingocol) == 5) {
            winning_round.push(m)
            winning_num.push(called_nos[m])
// if so, stop checking numbers
            break;
        }
  }
}

/*part one*/
//winning round now holds the number of which number was called and when it was called as a board wins.
//win_board reports back which board number won
win_board = winning_round.indexOf(Math.min(...winning_round))
//win_num reports back which number was the winner
win_num = winning_num[winning_round.indexOf(Math.min(...winning_round))]

//sum rem filters the winning board by all uncalled numbers and sums those remaining
sumRem = mini_boards[win_board].filter(function(value, index) {return filled_boxes[win_board].indexOf(index) == -1}).reduce((x,y) => x+y)

//final result = sum of remaining muultiplied by winning number
sumRem*win_num

/*part two*/
//as above in reverse
loss_board = winning_round.indexOf(Math.max(...winning_round))
loss_num = winning_num[winning_round.indexOf(Math.max(...winning_round))]

sumRem = mini_boards[loss_board].filter(function(value, index) {return filled_boxes[loss_board].indexOf(index) == -1}).reduce((x,y) => x+y)
sumRem*loss_num
