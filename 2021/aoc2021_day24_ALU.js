// test input
input = document.querySelectorAll('pre')[2].textContent.split('\n').slice(0,-1).map(x => x.split(' '))

//final input
input = document.querySelector('pre').textContent.split('\n').slice(0,-1).map(x => x.split(' '))

function ALUBuilder (array, input_val) {
    ALU = {w:0, x:0, y:0, z:0}
    first_var = 0
    sec_var = 0
    input_val = String(input_val).split('').map(Number)

    j = 0
    input_instr = false
    repeat_input = false
    
    for(var i=0; i<array.length;i++) {

        var instr = array[i][0],
            first_var = array[i][1];

        if(instr != 'inp') {
            var sec_var = (ALU.hasOwnProperty(array[i][2])) ? ALU[array[i][2]] : array[i][2],
                sec_var = Number(sec_var);
        }


        if(instr == 'inp') {
            if(input_instr) {
                    repeat_input = true;
                }
                else {
                    ALU[first_var] = input_val[j];
                    input_instr = true;
                }
        }

        switch(instr) {
            case 'inp': 
                console.log(i, 'input', input_instr, repeat_input);
                break;
            case 'add':
                ALU[first_var] += sec_var;
                break;
            case 'mul':
                ALU[first_var] *= sec_var;
                break;
            case 'div':
                if(sec_var < 1) {break;}
                else {ALU[first_var] /= sec_var;}
                break;
            case 'mod':
                if(ALU[first_var] < 0) {break;}
                else {ALU[first_var] %= sec_var;}
                break;
            case 'eql':
                ALU[first_var] = (ALU[first_var] == sec_var) ? 1 : 0;
                break;
            default:
                console.log(i, array[i], 'not found');
                break;
        }

        if(repeat_input) {
            repeat_input = false
            j++
            ALU[first_var] = input_val[j]
        }

    }

    return ALU
}
