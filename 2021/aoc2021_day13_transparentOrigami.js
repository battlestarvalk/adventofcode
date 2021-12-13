// test variables
input = document.querySelectorAll('pre')[1].textContent.split('\n').slice(0,-1)
dots = input.slice(0,-3).map(x => x.split(',')).map((x,y) => x.map(y => Number(y)))
instructions = input.slice(-2)

// final variables
input = document.querySelector('pre').textContent.split('\n').slice(0,-1)
dots = input.slice(0,-13).map(x => x.split(',')).map((x,y) => x.map(y => Number(y)))
instructions = input.slice(-12)

// prep paper
height = []
width = []
for(var i=0; i<dots.length;i++){
    width.push(dots[i][0])
    height.push(dots[i][1])
}

paper_width = Math.max(...width)+1
paper_height = Math.max(...height)+1

// calculation

for(var k=0;k<instructions.length;k++) {
    //find the line to fold on
    foldline = Number(instructions[k].split('=')[1])
    
    //if y fold, fold along paper HEIGHT (plus one due to 0-index) and set x as one (where column data is stored in dots)
    if(/y=/.test(instructions[k])) {
        paper_height = foldline+1
        x = 1
    }
    
    //if x fold, fold along paper WIDTH (plus one due to 0-index) and set x as 0 (where row data is stored in dots)
    if(/x=/.test(instructions[k])) {
       paper_width = foldline+1
       x = 0
    }
    
    //don't need to build the folded paper each time but maybe I want to :)
    folded_paper = new Array(paper_height).fill('.').map(x => x = new Array(paper_width).fill('.'))
    
    //for each dots coordinate, adjust either row/column (x value) if it's over the fold.
    for(var i=0; i<dots.length;i++) {
        if(dots[i][x] >= foldline) {
            dots[i][x] = (foldline - (dots[i][x]-foldline))
        }
        
        //place all the #/dots on the "paper"
        folded_paper[dots[i][1]][dots[i][0]] = '#'
        
    }
        
}
/* part two - just read across from console */
folded_paper

// change "instructions.length" to 1 and output length here if desired
//folded_paper.flat().filter(x => x == '#').length
