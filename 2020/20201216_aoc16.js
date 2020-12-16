const input = document.querySelector('pre').textContent.split('\n').slice(0,-1)
const test_input = ['class: 1-3 or 5-7',
'row: 6-11 or 33-44',
'seat: 13-40 or 45-50',
'',
'your ticket:',
'7,1,14',
'',
'nearby tickets:',
'7,3,47',
'40,4,50',
'55,2,20',
'38,6,12']

const pt2_test = ['class: 0-1 or 4-19',
'row: 0-5 or 8-19',
'seat: 0-13 or 16-19',
'',
'your ticket:',
'11,12,13',
'',
'nearby tickets:',
'3,9,18',
'15,1,5',
'5,14,9']

function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

function invalidNumbers(arr, instrCount) {
  var instructions = arr.slice(0,instrCount),
      your_ticket = arr[instrCount+2].split(",").map(Number),
      other_tickets = arr.slice(instrCount+5).join(",").split(',').map(Number)

  obj = {};
  instructions.forEach(function(value) {
          var tmp = value.split(': ')
          obj[tmp[0]] = [tmp[1].split(' or ')[0].split('-').map(Number), 
                         tmp[1].split(' or ')[1].split('-').map(Number)]
  })

  tmpArr = []
  for(const location in obj) {
      for(let i = 0; i < 2; i++) {
              other_tickets.forEach( function (validity) {
                  if( inRange(validity, obj[location][i][0], obj[location][i][1]) ) {
                      tmpArr.push(validity)
                  }
              })
      }
  }

  return other_tickets.filter(function(validity) {return !tmpArr.includes(validity)})
                      .reduce(function(a,b) {return a+b})
}

invalidNumbers(test_input, 3)
// 71

// part 2
  var instructions = test_input.slice(0,3),
      your_ticket = test_input[5].split(",").map(Number),
      other_tickets = test_input.slice(8)
                                .map(function(ticketVal) {return ticketVal.split(',')})
                                .map(function (val) {return val.map(Number)}),
      other_tix_num = test_input.slice(8).join(",").split(',').map(Number)

  obj = {};
  instructions.forEach(function(value) {
          var tmp = value.split(': ')
          obj[tmp[0]] = [tmp[1].split(' or ')[0].split('-').map(Number), 
                         tmp[1].split(' or ')[1].split('-').map(Number)]
  })

  tmpArr = []
  for(const location in obj) {
      for(let i = 0; i < 2; i++) {
              other_tix_num.forEach( function (validity) {
                  if( inRange(validity, obj[location][i][0], obj[location][i][1]) ) {
                      tmpArr.push(validity)
                  }
              })

for(let i = 0; i < other_tickets.length; i++) {
  var invalidTix = other_tickets[i].filter(function(validity) {return !tmpArr.includes(validity) })
    if(invalidTix.length === 0) {
        valid_tickets = other_tickets[i]
    }
}
valid_tickets
