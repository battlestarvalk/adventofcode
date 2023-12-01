var input = document.querySelectorAll('pre')[0].textContent.split('\n').slice(0,-1)

calibration = []
for(var i=0; i<input.length; i++) {
    temp_array = [...input[i].matchAll(/[0-9]/g)]
    value = Number(temp_array[0][0]+temp_array[temp_array.length-1][0])
    calibration.push(value)
}

calibration.reduce(function (a, b) {return a + b;}, 0)
