var input = document.querySelector('pre').textContent.split('\n').slice(0,-1),
    called_nos = input[0].split(",").map(Number),
    boards = input.slice(2);

numerical_board = []
for(var i = 0; i<boards.length;i++) {
   boards[i].split(" ").filter(x => x != "").forEach(x => numerical_board.push(x))
}

numerical_board = numerical_board.map(Number)

mini_boards = [];
for(var j = 0;j<(numerical_board.length/25); j++) {
    mini_boards.push(numerical_board.slice((25*j), (25*(j+1))))
}

/*part one*/
filled_boxes = []

for(var k = 0; k<mini_boards.length; k++) {
  filled_boxes.push([])
	for(var m = 0;m<called_nos.length;m++) {
    var idx = mini_boards[k].indexOf(called_nos[m], idx + 1)
    while (idx != -1) {
      //console.log(k, called_nos[k], idx)
      filled_boxes[k].push(idx)
      idx = mini_boards[k].indexOf(called_nos[m], idx + 1);
    }
  }
}
