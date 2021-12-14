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

//breaks when steps is 2
/*
steps = 1
tmp_array = []
start_array = start_string.split('')

for(var m=0;m<steps;m++) {
    for(var k=0;k<start_array.length;k++) {
        key_string = start_array[k]+start_array[k+1]
        //console.log(key_string)
        if(rules.hasOwnProperty(key_string)) {
            //console.log(rules[key_string])
            tmp_array.push(start_array[k], rules[key_string])
        }
        else {
            tmp_array.push(start_array[k])
        }
    }
    start_array = tmp_array
}

start_array
*/
