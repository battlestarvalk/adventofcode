var input_list = document.querySelector('pre').innerText.split('\n').map(Number);
finalArray = [];
input_list.forEach( function(input_fig) { 
input_list.forEach ( function(goalFig) {
                    if (2020-input_fig == goalFig) {
                        finalArray.push(input_fig); 
                    }
})
});
console.log(finalArray[0]*finalArray[1])

var input_list = document.querySelector('pre').innerText.split('\n').map(Number);
finalArray = [];
input_list.forEach( function(input_fig) { 
input_list.forEach ( function(goalFig) {
input_list.forEach ( function(thirdFig) {
                    if ((input_fig != 0 && goalFig != 0 && thirdFig != 0)  
                        && (input_fig + goalFig + thirdFig === 2020)) {
                        finalArray.push(input_fig);
                    }
})
})
});
console.log(finalArray[0] * finalArray[2] * finalArray[4]) 
