/*
test = [3,4,3,1,2]
for(var i=0;i<test.length;i++) {
  if(i > 18 ) {
    break;
  }
    var regenerations = Math.round((19-test[i])/6)

    console.log(i, test[i], regenerations, test)
if(regenerations > 0) {
    for(var j = 1; j<regenerations+1;j++) {
        //console.log(i, j, ((test[i])+(7*j)))
        if((test[i])+(7*j) > 19) {
            break;
        }
        else { 
            test.push((test[i])+(7*j)) 
        }
    }
}

    test.push(test[i]+9)

}
test.filter(x => x < 19).length
*/

/*part one*/
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

lanternfish(input, 80)

/*part two*/
const input = document.querySelector('pre').textContent.split('\n')[0].split(',').map(Number)

function lanternfish(array, days) {

lifecycles = new Array(9).fill(0)
array.forEach(x => lifecycles[x]++)

    for(var i=0; i<days;i++) {
        newfish = lifecycles[0]
        lifecycles.shift()
        lifecycles[6] = lifecycles[6] +newfish
        lifecycles.push(newfish)
    }

return lifecycles.reduce((a,b) => (a+b))

}

lanternfish(input, 256)
