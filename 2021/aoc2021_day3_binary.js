/* setup */
var input = document.querySelector('pre').textContent.split('\n').slice(0,-1)
var test_input = ['00100','11110','10110','10111','10101','01111','00111','11100','10000','11001','00010','01010']

/*part one*/
function Converter(array) {

var tmp_array_gamma = [],
    tmp_array_epsilon = [];

    for(var j = 0; j<array[0].length;j++) {
    var zeros = 0,
        ones = 0;

        for(var i = 0; i<array.length;i++) {
            if(array[i].charAt(j) == '0') {
                zeros++;
            }

            if(array[i].charAt(j) == '1') {
                ones++;
            }
        }

    if(zeros > ones) {
        tmp_array_gamma.push(0)
        tmp_array_epsilon.push(1)
    }

    else if(ones > zeros) {
        tmp_array_gamma.push(1)
        tmp_array_epsilon.push(0)
    }
    }

return parseInt(Number(tmp_array_gamma.join("")), 2)*parseInt(Number(tmp_array_epsilon.join("")), 2)
}

Converter(input) //1071734

/*part two*/

