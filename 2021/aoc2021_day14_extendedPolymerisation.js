input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

start_string = input[0]

rules = {}
tmp_input = input.slice(2)

for(var i=0;i<tmp_input.length;i++) {
    tmp = tmp_input[i].split(' -> ')
    rules[tmp[0]] = [tmp[1], 0]
}

for(var j=0;j<start_string.length-1;j++) {
    rules[start_string.substr(j, 2)][1]++
}


for(pair in rules) {
    tmp_val = rules[pair][1]
    tmp_char = rules[pair][0]
    first_pair = pair.substr(0,1) + tmp_char
    second_pair = tmp_char + pair.substr(1,2)

    rules[first_pair][1] += tmp_val
    rules[second_pair][1] += tmp_val
    rules[pair][1] -= tmp_val

}

