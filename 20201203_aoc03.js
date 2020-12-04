const day3_input = document.querySelector('pre').textContent.split('\n').slice(0,-1)
pt1Array = [];
day3_input.forEach(function(trees, line) {

    var goalIndex = trees.charAt( (line * 3) % trees.length ) 

    pt1Array.push(goalIndex)

})
pt1Array.filter(function(x) {return x === "#"}).length

----

var movementGrid = [1,3,5,7],
    pt2Array = [],
    lineArray = [];
movementGrid.forEach(function(slope) {
    expanded_test_input.forEach(function(trees, line) {

        var goalIndex = trees.charAt( (line * slope) % trees.length ) 

        pt2Array.push(goalIndex)

    })
    lineArray.push(pt2Array.filter(function(hash) { return hash === "#" }).length)
})