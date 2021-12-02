/* setup */
var test_input = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']

var input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

/*part one*/

function travelDistance(array) {
    var depth = 0,
        distance = 0;

    for(var i = 0; i<array.length;i++) {
        var direction = array[i].split(" ")[0],
            increments = Number(array[i].split(" ")[1]);

        if(direction == "forward") {
            distance = distance +increments
        }

        if(direction == "up") {
            depth = depth -increments
        }

        if(direction == "down") {
            depth = depth +increments
        }

    }

return depth*distance

}

travelDistance(input)

/*PART ONE ALTERNATE*/
function travelDistance(array) {
var depth = 0,
    distance = 0;

array.forEach(function(move) {
    var direction = move.split(" ")[0],
        increments = Number(move.split(" ")[1]);

    switch(direction) {
        case "forward":
            distance = distance +increments;
            break;
        case "down":
            depth = depth +increments;
             break;
        case "up":
            depth = depth -increments;
            break;
    }

    })
    
    return depth*distance

}

/*part two*/

function travelAim(array) {
    var depth = 0,
        distance = 0,
        aim = 0;

    for(var i = 0; i<array.length;i++) {
        var direction = array[i].split(" ")[0],
            increments = Number(array[i].split(" ")[1]);

        if(direction == "forward") {
            distance = distance +increments
            depth = depth +(increments*aim)
        }

        if(direction == "up") {
            aim = aim -increments
        }

        if(direction == "down") {
            aim = aim +increments
        }

    }

return depth*distance

}

travelAim(input)
