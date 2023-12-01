var input = document.querySelectorAll('pre')[0].textContent.split('\n').slice(0,-1)

calibration = []
for(var i=0; i<input.length; i++) {
    temp_array = [...input[i].matchAll(/[0-9]/g)]
    value = Number(temp_array[0][0]+temp_array[temp_array.length-1][0])
    calibration.push(value)
}

calibration.reduce(function (a, b) {return a + b;}, 0)

var re = /[0-9]|one|two|three|four|five|six|seven|eight|nine/g;
var matches = [];
for(var i=0; i<input.length;i++) {
    var str = input[i],
        r = [],
        m;
    while (m = re.exec(str)) {
        re.lastIndex -= m[0].length - 1;
        r.push(m[0]);
    }
    matches.push(r[0]+r[r.length-1])
}

for(var i=0; i<matches.length; i++) {
    matches[i] = matches[i].replaceAll('one', 1)
    matches[i] = matches[i].replaceAll('two', 2)
    matches[i] = matches[i].replaceAll('three', 3)
    matches[i] = matches[i].replaceAll('four', 4)
    matches[i] = matches[i].replaceAll('five', 5)
    matches[i] = matches[i].replaceAll('six', 6)
    matches[i] = matches[i].replaceAll('seven', 7)
    matches[i] = matches[i].replaceAll('eight', 8)
    matches[i] = matches[i].replaceAll('nine', 9)
}

matches.map(Number).reduce(function (a, b) {return a + b;}, 0)
