var input = document.querySelectorAll('pre')[0].textContent.split('\n').slice(0,-1).map(x => x.match(/([a-z]+) ?([-0-9]+)?/))

function signals(arr, signalStrength) {
  registerX = 1
    cycles = signalStrength

  for (var i = 0; i<cycles-2; i++) {

    if(arr[i][1] == "addx") {
      registerX += Number(arr[i][2])
      cycles--
    }

  }

  return registerX * signalStrength

} 

[signals(input,20), signals(input,60), signals(input,100), signals(input,140), signals(input,180), signals(input,220)].reduce((a,b) => (a+b)) 
