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

const weakness_figure = 373803594;
function sumTotal (arr) {
    return arr.reduce(function(a, b) {return a+b})
}

const test_weakness = 127;
var contiguous_window = [test_input[0]]

for(let i = 0; i < test_input.length; i++) {
    if(sumTotal(contiguous_window) < test_weakness) {
        contiguous_window.push(test_input[i+1])
    }
    if(sumTotal(contiguous_window) > test_weakness) {
        contiguous_window.shift()
    }
    if(sumTotal(contiguous_window) === test_weakness) {
        break;
    }

}
contiguous_window.sort()
contiguous_window[0] + contiguous_window[contiguous_window.length - 1]
