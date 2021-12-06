test = [3,4,3,1,2]

test_array = [];
for(var i=0;i<test.length;i++) {
    test_array.push(Math.round((80-test[i])/6), Math.round((80-(test[i]+1))/6))
}

test_array.reduce((a,b) => (a+b))
