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
            distance +=increments
        }

        if(direction == "up") {
           depth -=increments
        }

        if(direction == "down") {
            depth +=increments
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
            distance +=increments;
            break;
        case "down":
            depth +=increments;
             break;
        case "up":
            depth -=increments;
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
            distance +=increments
            depth +=(increments*aim)
        }

        if(direction == "up") {
            aim -=increments
        }

        if(direction == "down") {
            aim +=increments
        }

    }

return depth*distance

}

travelAim(input)
