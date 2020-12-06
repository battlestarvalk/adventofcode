let test_input = [
                  'abc',
                  'abc',
                  'abac',
                  'aaaa',
                  'b'
                  ]
// expect answer for test: 11

const input = document.querySelector('pre').textContent.split(/\n{2}/g);
let day6_input = [];
  input.forEach(function(newline) {
     day6_input.push(newline.replace(/\n/g, ""));
    })
    
// this gets the input to the same stage as the test input

// split each response into unique part of array
let groupResponses = [];
day6_input.forEach(function(eachGroup){
    groupResponses.push(eachGroup.split(""));
})
// sort array
groupResponses.forEach(function(sorting) {
    return sorting.sort()
})

// create new array where the value is not the same as the one below it, and then count each created array length
let count = [];
groupResponses.forEach(function(filterUnique) {
    let uniqueValue = [];

    for(let i = 0; i < filterUnique.length; i++) {

            if(filterUnique[i] != filterUnique[i+1]) {
            uniqueValue.push(filterUnique)

            }
    }
count.push(uniqueValue.length)
})
// sum array
count.reduce(function (a,b) { return a+b})

// part two
let test_input = [
                  'abc', 'a b c', 'ab ac', 'a a a a', 'b'
                  ]
// real input
const input = document.querySelector('pre').textContent.split(/\n{2}/g);
let day6_input = [];
  input.forEach(function(newline) {
     day6_input.push(newline.replace(/\n/g, " ").split(" "));
    })

// test and true input now at the same place

function characterAppearance(array, value) {
    var count = 0;
    array.forEach(function(letter) {
    if (letter === value) {
        return count++
    } 
    })
    return count;
}
console.log(characterAppearance( test_input[3], 'a') )

let groupSize = [],
        groupAnswers = [];

test_input.forEach(function(groupSplit){

    groupSize.push(groupSplit.split(" ").length);
    groupAnswers.push(groupSplit.replace(/ /g, "").split(""));

})

let groupAnswersSorted = [];
groupAnswers.forEach(function(sorting) {
    groupAnswersSorted.push(sorting.concat().sort())
})

let uniqueArray = []
groupAnswersSorted.forEach(function(filterUnique) {
    let uniqueValue = [];

    for(let i = 0; i < filterUnique.length; i++) {

            if(filterUnique[i] != filterUnique[i+1]) {
            uniqueValue.push(filterUnique[i])

            }
    }
uniqueArray.push(uniqueValue)
})
uniqueArray

// this needs to access at one level lower
for (let i = 0; i < test_input.length; i++) {
let count = 0;
	uniqueArray.forEach(function(letter) {
    if( characterAppearance(groupAnswers[i], letter) === groupSize[i] ) 
        {count++}
})
console.log([count, groupAnswers[i], groupSize[i]])
}
