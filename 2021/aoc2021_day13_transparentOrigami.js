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
    foldline = Number(instructions[k].split('=')[1])
    
    if(/y=/.test(instructions[k])) {

        folded_paper = new Array(foldline+1).fill('.').map(x => x = new Array(paper_width).fill('.'))

        for(var i=0; i<dots.length;i++) {
            if(dots[i][1] >= foldline) {
            dots[i][1] = (foldline - (dots[i][1]-foldline))
            }
            folded_paper[dots[i][1]][dots[i][0]] = '#'
        }

    }

    if(/x=/.test(instructions[k])) {

        folded_paper = new Array(paper_height).fill('.').map(x => x = new Array(foldline+1).fill('.'))

        for(var i=0; i<dots.length;i++) {
            if(dots[i][0] >= foldline) {
                dots[i][0] = (foldline - (dots[i][0]-foldline))
            }

            folded_paper[dots[i][1]][dots[i][0]] = '#'
        }

    }
}
/* part two - just read across from console */
folded_paper

// change "instructions.length" to 1 and output length here if desired
//folded_paper.flat().filter(x => x == '#').length
