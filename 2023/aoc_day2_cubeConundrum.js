var input = document.querySelector('pre').textContent.split('\n').slice(0,-1); 

gameObj = new Array(input.length)

for(var i=0;i<input.length;i++) {
    gameObj[i] = {game: input[i].match(/Game ([0-9]+):/)[1]}

    reveal = input[i].split(':')[1].split(';')
    for(var j=0; j<reveal.length;j++) {
        cubes = [...reveal[j].matchAll(/([0-9]+) ([a-z]+)/g)]
        for(var k=0; k<cubes.length; k++) {
            colour = cubes[k][2]
            count = Number(cubes[k][1])
            if(!gameObj[i][colour]) {
                Object.assign(gameObj[i], {[colour]: [count]})
            }
            else {
                gameObj[i][colour].push(count)
            }
            }
        }  
}

impossible = []
for(var i=0; i<gameObj.length;i++) {
    maxBlue = Math.max(...gameObj[i]['blue'])
    maxGreen = Math.max(...gameObj[i]['green'])
    maxRed = Math.max(...gameObj[i]['red'])

    if(maxBlue > 14) {
        impossible.push(i)
    }
    else if(maxGreen > 13) {
        impossible.push(i)
    }
    else if(maxRed > 12) {
        impossible.push(i)
    }
    
}

possible = gameObj.filter((obj,index) => !impossible.includes(index))
sumIDs = 0
for(var i=0; i<possible.length; i++) {
    sumIDs += Number(possible[i]['game'])
}
sumIDs
