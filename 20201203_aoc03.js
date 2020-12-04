const day3_input = document.querySelector('pre').textContent.split('\n').slice(0,-1)
pt1Array = [];
day3_input.forEach(function(trees, line) {

    var goalIndex = trees.charAt( (line * 3) % trees.length ) 

    pt1Array.push(goalIndex)

})
pt1Array.filter(function(x) {return x === "#"}).length

----

var slopeX = [1,1,1,1,2],
    slopeY = [1,3,5,7,1],
    pt2Array = []
    trees = 0;

slopeX.forEach(function(down) {
    slopeY.forEach(function(right) {
        for (i = down; i < day3_input.length; i+= right) {

            let impact = day3_input[i][right % day3_input[i].length]
            if(impact === "#") {
                trees++
            }
        
        }

})
pt2Array.push(trees)
})
pt2Array.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue
})
