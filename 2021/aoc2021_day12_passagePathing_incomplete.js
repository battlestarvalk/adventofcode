input = document.querySelector('pre').textContent.split('\n').slice(0,-1)
split_input = input.map(x => x.split("-"))

obj = {}
input.flat().forEach(function(value) {
    if(obj.hasOwnProperty(value)) {obj[value]++}
    else(obj[value] = 0)
})
obj

unique_caves = []
for(x in obj) {
    cave = /^.{1}$/
    if(cave.test(x) && obj[x] == 1) {unique_caves.push(x)}
}
unique_caves
