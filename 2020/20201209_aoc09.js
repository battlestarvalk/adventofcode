const test_input = [35, 20, 15, 25, 47, 40, 62, 55, 65, 95, 102, 117, 50, 182, 127, 219, 299, 277, 309, 576]

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
const weakness_figure = findWeakness(day9_input)

function sumTotal (arr) {
    return arr.reduce(function(a, b) {return a+b})
}

function findWindow (arr, weakness) {
	for(let j=2; j < arr.length; j++) {
		var roll_window = arr.slice(0,j),
		    found = false;
		for(let i = j; i < arr.length; i++) {
				if(sumTotal(roll_window) != weakness) {
				roll_window.shift()
				roll_window.push(arr[i])
				}
		    else if(sumTotal(roll_window) === weakness) {
			found = true;
			return roll_window
		    }
		}
	   if(found === true) {
		return roll_window
		break;
		}
	    }
}
var contiguous_window = findWindow(day9_input, weakness_figure)

contiguous_window.sort()
contiguous_window[0] + contiguous_window[contiguous_window.length - 1]
