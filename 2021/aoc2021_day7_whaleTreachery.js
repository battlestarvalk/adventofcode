input = document.querySelector('pre').textContent.split('\n')[0].split(',').map(Number)

//part one
//https://stackoverflow.com/a/14438954 for "checking"
function fuelCalculator (input) {

checking = input.filter((v, i, a) => a.indexOf(v) === i)
fuelUsages = []

for(var j=0;j<checking.length;j++) {
   fuelUsages.push(0)
    for(var i=0;i<input.length;i++) {
        if(fuelUsages[j-1] < fuelUsages[j]) {
            fuelUsages.pop()
            break;
        }
        else {
            fuelUsages[j] = fuelUsages[j] +(Math.abs(input[i]-checking[j]))
        }
    }
}

fuelUsages = fuelUsages.filter(x => Number(x) > 0).sort(function(a, b) {return a - b;})

return fuelUsages[0]

}

//part two
function fuelCalculatorUpgrade (input) {

fuelUsages = []
checking = input.filter((v, i, a) => a.indexOf(v) === i)

for(var j=0;j<checking.length;j++) {
   fuelUsages.push(0)
    for(var i=0;i<input.length;i++) {
        steps = Math.abs(input[i]-checking[j])
        fuel = (steps/2)*((2*1)+(steps-1)*1)
        fuelUsages[j] = fuelUsages[j] +fuel
    }
}
  
fuelUsages = fuelUsages.filter(x => Number(x) > 0).sort(function(a, b) {return a - b;})

return fuelUsages[0]

}
