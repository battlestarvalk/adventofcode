var input = document.querySelector('pre').textContent.split('\n').slice(0,-1),
    called_nos = input[0],
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

for(var k=0;k<mini_boards.length;k++) {
	for(var l = 0;l<called_nos.length;l++) {
		var idx = mini_boards[k].indexOf(called_nos[l], l)
			if(idx == -1) {
				break;
			}
			else {
				console.log(idx);
				idx = mini_boards[k].indexOf(called_nos[l], l)
			}
	}
}
