var input = document.querySelector('pre').textContent.split('\n').slice(0,-1); 

instructions = input.slice(5)
crates = input.slice(0,4)

crateStack = {1:[], 2:[], 3:[]}
loc1 = crates[3].indexOf("1")
loc2 = crates[3].indexOf("2")
loc3 = crates[3].indexOf("3")

for(var i=0; i<crates.length-1; i++) {
    if(crates[i].charAt(loc1).match(/[A-Z]/g)) {
        crateStack["1"].unshift(crates[i].charAt(loc1))
    }

    if(crates[i].charAt(loc2).match(/[A-Z]/g)) {
        crateStack["2"].unshift(crates[i].charAt(loc2))
    }

    if(crates[i].charAt(loc3).match(/[A-Z]/g)) {
        crateStack["3"].unshift(crates[i].charAt(loc3))
    }
    
}

instrObj = new Array(instructions.length)

for(var i=0; i<instructions.length;i++) {
    instr = instructions[i].match(/move ([0-9]+) from ([0-9]+) to ([0-9]+)/)
    instrObj[i] = {string: instr[0], move:Number(instr[1]), from:Number(instr[2]), to:Number(instr[3])}
}

for(var i=0; i<instructions.length;i++) {
    move = instrObj[i]["move"]
    from =  instrObj[i]["from"]
    to =  instrObj[i]["to"]

    crateStack[to] = crateStack[to].concat(crateStack[from].slice(0,(crateStack[from].length)-move))
    crateStack[from] = crateStack[from].slice((crateStack[from].length)-move)

}

crateStack
