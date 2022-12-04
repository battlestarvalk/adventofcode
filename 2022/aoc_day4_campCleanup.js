var input = document.querySelector('pre').textContent.split('\n').slice(0,-1); 

/*prep for both*/
elfAssignments = new Array(input.length)

for(var i=0; i<input.length;i++) {
    instr = input[i].match(/([0-9]+)-([0-9]+),([0-9]+)-([0-9]+)/)
    elfAssignments[i] = {string: instr[0], first:[Number(instr[1]), Number(instr[2])], second:[Number(instr[3]), Number(instr[4])]}
}

/*part one*/
function totalOverlapFinder(oldArr, testArr) {
    a = oldArr
    b = testArr

    if((b[0] >= a[0] && b[1] <= a[1]) || (a[0] >= b[0] && a[1] <= b[1])) {
        return "overlap"
    }

    else {return "none";}

}

totalOverlaps = 0
for(var i=0; i<input.length;i++) {
    x = elfAssignments[i]
    if(totalOverlapFinder(x["first"], x["second"]) != "none") {
        totalOverlaps++
    }
}

totalOverlaps

/*part two*/
function anyOverlapFinder(oldArr, testArr) {
    a = oldArr
    b = testArr

    //if overlap, return the range of lights already on
    if(Math.max(a[0], b[0]) - Math.min(a[1], b[1]) <= 0) {
    	return "overlap"
    }

    // else, say nothing
    else {return 'none';}

}

anyOverlaps = 0
for(var i=0; i<input.length;i++) {
    x = elfAssignments[i]
    if(anyOverlapFinder(x["first"], x["second"]) != "none") {
        anyOverlaps++
    }
}

anyOverlaps
