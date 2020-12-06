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
     day6_input.push(newline.replace(/\n/g, " ").trim());
    })

// test and true input now at the same place

// count character appearance
function characterAppearance(array, value) {
    var count = 0;
    array.forEach(function(letter) {
    if (letter === value) {
        return count++
    } 
    })
    return count;
}

// create two arrays = group size (how many people in a group) and group answers (each letter answer given by a group)
let groupSize = [],
        groupAnswers = [];

day6_input.forEach(function(groupSplit){

    groupSize.push(groupSplit.split(" ").length);
    groupAnswers.push(groupSplit.replace(/ /g, "").split(""));

})

// sort the group answers and run through the unique values from above
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

// Run a for loop - if each unique character in a group appears the same amount of times as the size of the group, then add to a count and push to an array
let uniqueAnswers = [];
for (let i = 0; i < day6_input.length; i++) {
let count = 0;
    uniqueArray[i].forEach(function(letter) {
    if( characterAppearance(groupAnswers[i], letter) === groupSize[i] ) 
        {count++}
})
uniqueAnswers.push(count)
}

//sum array
uniqueAnswers.reduce(function (a,b) { return a+b})
