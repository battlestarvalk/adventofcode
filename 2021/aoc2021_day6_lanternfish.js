test = [3,4,3,1,2]

test_array = [];
for(var i=0;i<test.length;i++) {
    test_array.push(Math.round((80-test[i])/6), Math.round((80-(test[i]+1))/6))
}

test_array.reduce((a,b) => (a+b))

test = [3,4,3,1,2]
spawndays = new Array (19).fill(0)
for(var i=0;i<test.length;i++) {
    spawndays[6-test[i]]++
    regenerations = Math.round((18-test[i])/6)
    test.push((6-test[i])+2)
    console.log(i, regenerations)
    for(var j = 0; j<regenerations;j++) {
        console.log(i, j, (6-test[i])+(7*j))
        spawndays[(6-test[i])+(7*j)]++
    }

  if((18-test[i]) < 0 || i == 20) {
    break;
  }
    
}
