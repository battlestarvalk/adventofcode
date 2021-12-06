/*test = [3,4,3,1,2]

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
*/

const input = document.querySelector('pre').textContent.split('\n')[0].split(',').map(Number)

function lanternfish(array, days) {

    for(var i=0;i<days;i++) {
        for(var k=0;k<array.length;k++) {
            if(array[k] == 0) {
            array.splice(k, 1, 6)
            array.push(9)
            }
            else {array[k]--}
        }
    }
    return array.length

}
