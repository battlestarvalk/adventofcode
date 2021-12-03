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
var oxy_input = input,
    car_input = input,
    oxy_gen = 0,
    car_gen = 0;


for(var j=0; j<oxy_input[0].length;j++) {

    if(oxy_input.length == 1) {
        break;
    }

    /*if(car_test.length == 1) {
        car_gen = parseInt(Number(test[0]), 2);
    }*/

var tmp_zeros_array = [],
    tmp_ones_array = [],
    zeros = 0,
    ones = 0;

    for(var i = 0;i<oxy_input.length;i++) {
        if(oxy_input[i].charAt(j) == '0') {
            zeros++,
            tmp_zeros_array.push(i);
        }

        if(oxy_input[i].charAt(j) == '1') {
            ones++,
            tmp_ones_array.push(i);
        }
    }

    if(zeros > ones) {
        oxy_input = oxy_input.filter(function(value, index) {return tmp_ones_array.indexOf(index) == -1})
        //car_test = test.filter(function(value, index) {return tmp_zeros_array.indexOf(index) == -1});
        
    }

    if(ones > zeros) {
        oxy_input = oxy_input.filter(function(value, index) {return tmp_zeros_array.indexOf(index) == -1})
        //car_test = test.filter(function(value, index) {return tmp_ones_array.indexOf(index) == -1});
    }

    if(ones == zeros) {
        oxy_input = oxy_input.filter(function(value, index) {return tmp_zeros_array.indexOf(index) == -1})
        //car_test = test.filter(function(value, index) {return tmp_ones_array.indexOf(index) == -1});
    }

}

oxy_gen = parseInt(Number(oxy_input[0]), 2)

for(var j=0; j<oxy_input[0].length;j++) {

    if(car_input.length == 1) {
        break;
    }

    /*if(car_test.length == 1) {
        car_gen = parseInt(Number(test[0]), 2);
    }*/

var tmp_zeros_array = [],
    tmp_ones_array = [],
    zeros = 0,
    ones = 0;

    for(var i = 0;i<car_input.length;i++) {
        if(car_input[i].charAt(j) == '0') {
            zeros++,
            tmp_zeros_array.push(i);
        }

        if(car_input[i].charAt(j) == '1') {
            ones++,
            tmp_ones_array.push(i);
        }
    }

    if(zeros > ones) {
        //oxy_input = oxy_input.filter(function(value, index) {return tmp_ones_array.indexOf(index) == -1})
        car_input = car_input.filter(function(value, index) {return tmp_zeros_array.indexOf(index) == -1});
        
    }

    if(ones > zeros) {
        //oxy_input = oxy_input.filter(function(value, index) {return tmp_zeros_array.indexOf(index) == -1})
        car_input = car_input.filter(function(value, index) {return tmp_ones_array.indexOf(index) == -1});
    }

    if(ones == zeros) {
        //oxy_input = oxy_input.filter(function(value, index) {return tmp_zeros_array.indexOf(index) == -1})
        car_input = car_input.filter(function(value, index) {return tmp_ones_array.indexOf(index) == -1});
    }

}

car_gen = parseInt(Number(car_input[0]), 2)

oxy_gen*car_gen
//6124992
