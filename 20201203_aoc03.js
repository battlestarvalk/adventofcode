const day3_input = document.querySelector('pre').textContent.split('\n').slice(0,-1)
pt1Array = [];
day3_input.forEach(function(trees, line) {

    var goalIndex = trees.charAt( (line * 3) % trees.length ) 

    pt1Array.push(goalIndex)

})
pt1Array.filter(function(x) {return x === "#"}).length

----

var impactNo = [],
    answer = [];

function slope (down, right) {

for (let i = 0; i < day3_input.length; i += right) {

    var goalIndex = day3_input[i].charAt( (i * right) % day3_input[i].length );
    if(goalIndex === "#") {
        impactNo.push(goalIndex)
}

i += down

}
}

slope(1,1)
answer.push(impactNo.length)
slope(1,3)
answer.push(impactNo.length)
slope(1,5)
answer.push(impactNo.length)
slope(1,7)
answer.push(impactNo.length)
slope(2,1)
answer.push(impactNo.length)

answer.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue
})
