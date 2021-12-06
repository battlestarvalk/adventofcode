test = [3,4,3,1,2]

for(var i=0;i<test.length;i++) {

    regenerations = Math.round((19-test[i])/6)
    //test.push(test[i])

    //console.log(i, test[i], regenerations, test)

    for(var j = 1; j<regenerations+1;j++) {
        //console.log(i, j, ((test[i])+(7*j)))
        if((test[i])+(7*j) > 19) {
            break;
        }
        else { 
            test.push((test[i])+(7*j)) 
        }
    }

  if(test.length > 70) {
    break;
  }
}

test.filter(x => x < 19).length

