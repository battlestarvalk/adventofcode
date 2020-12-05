const input = document.querySelector('pre').textContent.split('\n').slice(0, -1);

var newArray = [];

input.forEach(function(value) {
    var key_value = value.split(": "),
    letter = key_value[0].slice(-1),
    regex_letter = RegExp(letter, "g"),
    string_value = key_value[1],
    count_value = key_value[0].slice(0, -2).split("-"),
    count_value_lower = Number(count_value[0]),
    count_value_higher = Number(count_value[1]),
    array = string_value.match(regex_letter);

function array_length (x) {
    if(x === null) { 
        return 0 } 
    else { 
        return x.length}
}

function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

newArray.push(
    inRange(array_length(array), count_value_lower, count_value_higher)
    ); 
    
});

newArray.filter(function(value) {return value == true}).length

// const regex1 = RegExp('([0-9]{0,2})-([0-9]{0,2}) ([a-z]): ([a-z]+)', 'g');
// const str1 = '2-9 c: ccccccccc';
// let array1;

// var newArray = [];
    // var key_value = regex1.exec(str1),
    // letter = key_value[3],
    // regex_letter = RegExp(letter, "g"),
    // string_value = key_value[4],
    // count_value_lower = Number(key_value[2]),
    // count_value_higher = Number(key_value[3]),
    // array = string_value.match(regex_letter);

// function array_length(x) {
// if(x === null) { return 0 } else { return x.length}
// }

// function inRange(x, min, max) {
    // return ((x-min)*(x-max) <= 0);
// }

// newArray.push(inRange(array_length(array), count_value_lower, count_value_higher)); 

// console.log(array.length)

var pt2Array = [];
input.forEach(function(value) {
    var key_value = value.split(": "),
    letter = key_value[0].slice(-1),
    string_value = key_value[1].trim(),
    count_value = key_value[0].slice(0, -2).split("-"),
    count_value_lower = Number(count_value[0]) - 1,
    count_value_higher = Number(count_value[1]) - 1;

function find_value(posi) {
    if ( ( posi.charAt(count_value_lower) === letter
           && posi.charAt(count_value_higher) === letter )
        || ( posi.charAt(count_value_lower) != letter
           && posi.charAt(count_value_higher) != letter ) ) {
    return false;
    }
    else {
        return true;
    }
}

pt2Array.push( find_value(string_value) );

})

console.log( pt2Array.filter(function(value) {return value == true}).length )
