var input = document.querySelector('pre').textContent.split('\n').slice(0,-1);

/*part one*/

/*split out the two compartments*/
rucksackContents = []
for(var i=0; i<input.length;i++) {
splitLoc = (input[i].length / 2)
    rucksackContents.push([input[i].slice(0, splitLoc).split(""), input[i].slice(splitLoc).split("")])
}

/* find shared items between the two */
rucksackShared = []
for(var i = 0; i<rucksackContents.length; i++) {

rucksackShared.push(    rucksackContents[i][0].filter(element => rucksackContents[i][1].includes(element))[0] )

} 

/* assign value */
const isUpperCase = (string) => /^[A-Z]*$/.test(string)

contentValue = []
for(var i = 0; i<rucksackShared.length; i++) {

if(isUpperCase(rucksackShared[i])) {
    contentValue.push(rucksackShared[i].toLowerCase().charCodeAt(0) - 70)
}

else {
    contentValue.push(rucksackShared[i].toLowerCase().charCodeAt(0) - 96)
}
  
}

/*sum backpack*/
contentValue.reduce(function(a,b) {return a+b})

/*part two*/
var input = document.querySelector('pre').textContent.split('\n').slice(0,-1);

elfCarry = [[]] 

for(var i = 0; i<input.length; i++) {
    arrayNum = Math.floor(i/3)
    if(elfCarry[arrayNum] == undefined) {
    elfCarry.push([])
}
    elfCarry[arrayNum].push(input[i].split(""))
}

elfAuth = []
for(var i = 0; i<elfCarry.length; i++) {
elfAuth.push(elfCarry[i][0].filter(element => elfCarry[i][1].includes(element)).filter(element => elfCarry[i][2].includes(element))[0])
}

const isUpperCase = (string) => /^[A-Z]*$/.test(string)

elfPriority = []
for(var i = 0; i<elfAuth.length; i++) {

if(isUpperCase(elfAuth[i])) {
    elfPriority.push(elfAuth[i].toLowerCase().charCodeAt(0) - 70)
}

else {
    elfPriority.push(elfAuth[i].toLowerCase().charCodeAt(0) - 96)
}
  
}

/*sum backpack*/
elfPriority.reduce(function(a,b) {return a+b}) 
