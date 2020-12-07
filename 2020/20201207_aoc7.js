const test_input = [
'light red bags contain 1 bright white bag, 2 muted yellow bags.',
'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
'bright white bags contain 1 shiny gold bag.',
'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
'faded blue bags contain no other bags.',
'dotted black bags contain no other bags.'
]
const day7_input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

// part one

var obj = {};
test_input.forEach(function (objectMaker) {

    var bagColour = objectMaker.split(" contain ")[0],
        colourContains = [...(objectMaker.split("contain")[1]).matchAll(/[0-9]+ ([a-z ]+) bags?/gi)],
        colourList = [];

    colourContains.forEach(function(colourReadout) {
        colourList.push(colourReadout[1]);
    })

    obj[bagColour] = colourList;

})
obj
