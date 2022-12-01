var input = document.querySelector('pre').textContent.split('\n').slice(0,-1).map(Number);

/* part one */

function maxCalorie (input) {

elves = [0]
elf = 0

for(var i=0; i<input.length; i++) {
    
    if(input[i] != 0) {
        elves[elf] = elves[elf] + input[i]
    }

    if(input[i] == 0) {
        elf++
        elves.push(0)
    }
    
}

highestCarry = Math.max(...elves)
  
  return [highestCarry, elves.indexOf(highestCarry)+1]
   
}

maxCalorie(input)

/* part two */

function tripleCalorie (input) {

elves = [0]
elf = 0

for(var i=0; i<input.length; i++) {
    
    if(input[i] != 0) {
        elves[elf] = elves[elf] + input[i]
    }

    if(input[i] == 0) {
        elf++
        elves.push(0)
    }
    
}

sorted_elves = elves
    
    return sorted_elves.sort(function(a, b) {return a - b;}).slice(-3).reduce(function(a, b) {return a+b;});
   
}

tripleCalorie(input)
