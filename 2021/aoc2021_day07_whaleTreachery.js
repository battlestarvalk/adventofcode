input = document.querySelector('pre').textContent.split('\n')[0].split(',').map(Number)

//part one
//https://stackoverflow.com/a/14438954 for "checking"

function fuelCalculator (input) {

   //checking provides a unique list of values
   checking = input.filter((v, i, a) => a.indexOf(v) === i)
   //fuel usage is a unique list of the fuel cost per potential location
   fuelUsages = []

      for(var j=0;j<checking.length;j++) {
         //push a new fuel usage calculation to the array
         fuelUsages.push(0)
          for(var i=0;i<input.length;i++) {
             //as soon as the fuel usage of a new location exceeds that of the location before it, stop calculating and remove the value so far.
              if(fuelUsages[j-1] < fuelUsages[j]) {
                  fuelUsages.pop()
                  break;
              }
             // otherwise keep calculating fuel usage per location
              else {
                  fuelUsages[j] +=(Math.abs(input[i]-checking[j]))
              }
          }
      }
   
   // remove any 0-values that may have survived into the array   
   fuelUsages = fuelUsages.filter(x => Number(x) > 0)

   // return min value
   return Math.min(...fuelUsages)

}

//part two
function fuelCalculatorUpgrade (input) {

fuelUsages = []
checking = input.filter((v, i, a) => a.indexOf(v) === i)

for(var j=0;j<checking.length;j++) {
   fuelUsages.push(0)
    for(var i=0;i<input.length;i++) {
        steps = Math.abs(input[i]-checking[j])
       // as above but using arithmetic sequence to calculate fuel
        fuel = (steps/2)*((2*1)+(steps-1)*1)
        fuelUsages[j] = fuelUsages[j] +fuel
    }
}
  
fuelUsages = fuelUsages.filter(x => Number(x) > 0)

return Math.min(...fuelUsages)

}
