input = document.querySelector('pre').textContent.split('\n').slice(0,-1)

start_string = input[0]

rules = {}
tmp_input = input.slice(2)

for(var i=0;i<tmp_input.length;i++) {
    tmp = tmp_input[i].split(' -> ')
    //rules[tmp[0]] = [tmp[1], 0]
    rules[tmp[0]] = [tmp[1], i]
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

tmp_rules = new Array(16).fill(0)
for(pair in rules) {  
    var tmp_val = tmp_rules[rules[pair][1]],
        tmp_char = rules[pair][0],
        first_pair = rules[pair.substr(0,1) + tmp_char][1],
        second_pair = rules[tmp_char + pair.substr(1,2)][1];
console.log(pair, rules[pair], first_pair, second_pair, tmp_val, tmp_char, tmp_rules)
    tmp_rules[first_pair] += tmp_val
    tmp_rules[second_pair] += tmp_val
    tmp_rules[pair] -= tmp_val

}
tmp_rules

