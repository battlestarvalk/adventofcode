var input = document.querySelector('pre').textContent.split('\n').slice(0,-1); 

//part one
test_input = []
play = 10
for(var i=0; i<input.length; i++) {
    match_arr = input[i].match(/[0-9]+/g).map(Number)
    test_input.push([match_arr.slice(1,play+1), match_arr.slice(play+1)])
}

points = 0
for(var i=0; i<test_input.length; i++) {
    wins = test_input[i][0].filter(element => test_input[i][1].includes(element)).length
    points += Math.floor(2**(wins-1))
}

points

//part two

card_count = new Array(test_input.length).fill(1)
for(var i=0; i<test_input.length; i++) {
    wins = test_input[i][0].filter(element => test_input[i][1].includes(element)).length
    for(var j=1; j<wins+1; j++) {
        card_count[i+j] += 1*card_count[i]
    }
}
card_count.reduce((a, b) => a + b, 0)
