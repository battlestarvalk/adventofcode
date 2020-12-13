const test_input = ["939","7,13,x,x,59,x,31,19"];
const input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

// test_next = [];
// test_buses.forEach(function (nextBus) { test_next.push( nextBus - (test_timetable % nextBus)) })
// test_next = test_next.sort(function(a,b) {return a-b})
// test_next[0]

function nextBusArrival (arr) {
    const arrivalTime = Number(arr[0]),
          busList = arr[1].split(",").map(Number).filter(function(numbersOnly) {return isNaN(numbersOnly) === false});

    var timetable = {};

    busList.forEach(function (nextBus) {
        nextTime = nextBus - (arrivalTime % nextBus);
        timetable[nextBus] = nextTime;
    })

      return Object.entries(timetable)
                   .sort(function([,a],[,b]) {return a-b} )[0]
                   .reduce(function(a,b) {return a*b})

}

nextBusArrival(input)

// this runs................ slowly
function busMatcher (arr, lower) {
    const busArrivals = arr[1].split(","),
					busOffset = {};

    busArrivals.forEach(function (busArrival){
      if(busArrival != "x") {
        busOffset[busArrival] = busArrivals.indexOf(busArrival)
      }
    })

    key = Object.keys(busOffset)
    value = Object.values(busOffset)

    var count = 0,
        start = lower;

    for(let i = start;; i++) {
      if( (key[0] - (i % key[0])) === (value[0] || Number(key[0]) ) ) {
        var start = i;
        break;
      }
    }

    for(let i = start; ; i+= Number(key[0])) {
      var count = 0
      for(let j = 0; j < key.length; j++) {
        if( (key[j] - (i % key[j])) === (value[j] || Number(key[j]) ) ) {
          count++
        }
      }
      if(count === key.length) {
        return ("found", i); 
        break;
      }
    }
}

busMatcher(test_input, 1068000)
