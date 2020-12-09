const test_input = [35,
                    20,
                    15,
                    25,
                    47,
                    40,
                    62,
                    55,
                    65,
                    95,
                    102,
                    117,
                    150,
                    182,
                    127,
                    219,
                    299,
                    277,
                    309,
                    576]

const day9_input = document.querySelector('pre').textContent.split('\n').map(Number);

function findMatch (array, goal) {
		var rtn = false;
  array.some( function(firstFigure) {
		array.forEach( function(secondFigure) {
			if(firstFigure + secondFigure == goal) {
				rtn = true
			}
		})

	})
		return rtn;
}

function findWeakness (arr) {
	var roll_window = arr.slice(0,25),
			weakness = 0;
	for(let i = 25; i < arr.length; i++) {
			if(findMatch(roll_window, arr[i])) {
			roll_window.shift()
			roll_window.push(arr[i])
			}
			else {
				weakness = arr[i]
				break;}
	}
return weakness
}
findWeakness(day9_input)

