var input = document.querySelector('pre').textContent.split('\n').slice(0,-1); 

/* auto create */

stackHeight = input.findIndex(function(a) {return a == ""})-1
stacksAvailable = Math.floor(input[stackHeight].length / 4)+1

instructions = input.slice(stackHeight+2)
crates = input.slice(0,stackHeight+1)

crateStack = {}

for(var i=0; i<crates.length-1; i++) {
    for(var j=1; j<stacksAvailable+1; j++) {
        if(crateStack[j] == undefined) {
            crateStack[j] = []
        }
        loc = crates[stackHeight].indexOf(String(j))
        
        if(crates[i].charAt(loc).match(/[A-Z]/g)) {
            crateStack[j].unshift(crates[i].charAt(loc))
        }
    }
}

// build instructions
instrObj = new Array(instructions.length)

for(var i=0; i<instructions.length;i++) {
    instr = instructions[i].match(/move ([0-9]+) from ([0-9]+) to ([0-9]+)/)
    instrObj[i] = {string: instr[0], move:Number(instr[1]), from:Number(instr[2]), to:Number(instr[3])}
}

/*part one*/
// move crates
for(var i=0; i<instructions.length;i++) {
    move = instrObj[i]["move"]
    from =  instrObj[i]["from"]
    to =  instrObj[i]["to"]

    // new "from" is the from stack minus the removed crates
    newFrom = crateStack[from].slice(0,(crateStack[from].length)-move)
    // new "to" is the to stack with the removed crates concatenated (in reverse order, because one at a time)
    newTo = crateStack[to].concat(crateStack[from].slice((crateStack[from].length)-move).reverse())

    crateStack[to] = newTo
    crateStack[from] = newFrom

}

/*part two*/
for(var i=0; i<instructions.length;i++) {
    move = instrObj[i]["move"]
    from =  instrObj[i]["from"]
    to =  instrObj[i]["to"]

    newFrom = crateStack[from].slice(0,(crateStack[from].length)-move)
    // same as part one but without the reverse
    newTo = crateStack[to].concat(crateStack[from].slice((crateStack[from].length)-move))

    crateStack[to] = newTo
    crateStack[from] = newFrom

}

// read off final value and join as string
topStack = []
for(const stack in crateStack) {
    topStack.push(crateStack[stack][crateStack[stack].length-1])
}

// there's the answer
topStack.join("")


/* long way around
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

instructions = input.slice(10)
crates = input.slice(0,9)

crateStack = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[]}
loc1 = crates[8].indexOf("1")
loc2 = crates[8].indexOf("2")
loc3 = crates[8].indexOf("3")
loc4 = crates[8].indexOf("4")
loc5 = crates[8].indexOf("5")
loc6 = crates[8].indexOf("6")
loc7 = crates[8].indexOf("7")
loc8 = crates[8].indexOf("8")
loc9 = crates[8].indexOf("9")

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
    
    if(crates[i].charAt(loc4).match(/[A-Z]/g)) {
        crateStack["4"].unshift(crates[i].charAt(loc4))
    }

    if(crates[i].charAt(loc5).match(/[A-Z]/g)) {
        crateStack["5"].unshift(crates[i].charAt(loc5))
    }

    if(crates[i].charAt(loc6).match(/[A-Z]/g)) {
        crateStack["6"].unshift(crates[i].charAt(loc6))
    }
    
    if(crates[i].charAt(loc7).match(/[A-Z]/g)) {
        crateStack["7"].unshift(crates[i].charAt(loc7))
    }

    if(crates[i].charAt(loc8).match(/[A-Z]/g)) {
        crateStack["8"].unshift(crates[i].charAt(loc8))
    }

    if(crates[i].charAt(loc9).match(/[A-Z]/g)) {
        crateStack["9"].unshift(crates[i].charAt(loc9))
    }
}

*/
