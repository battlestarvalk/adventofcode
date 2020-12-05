const day3_input = document.querySelector('pre').textContent.split('\n').slice(0,-1)
pt1Array = [];
day3_input.forEach(function(trees, line) {

    var goalIndex = trees.charAt( (line * 3) % trees.length ) 

    pt1Array.push(goalIndex)

})
pt1Array.filter(function(x) {return x === "#"}).length

----
function slope (down, right) {

let trees = 0;

for (let i = 0; i < day3_input.length; i+= down) {

        var impactCheck = day3_input[i].charAt( (i * right) % day3_input[i].length )

        if (impactCheck === "#") {
        trees++
    }

}

return trees

}


var answer = [slope(1,1), slope(1,3), slope(1,5), slope(1,7), slope(2,1)];

answer.reduce(function(a, b) {return a*b})

