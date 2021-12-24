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
    
    for(var i=0; i<array.length;i++) {

        var instr = array[i][0],
            first_var = array[i][1];

        if(instr != 'inp') {
            var sec_var = (ALU.hasOwnProperty(array[i][2])) ? ALU[array[i][2]] : array[i][2],
                sec_var = Number(sec_var);
        }


        switch(instr) {
            case 'inp': 
                ALU[first_var] = input_val[j];
                j++;
                break;
            case 'add':
                ALU[first_var] += sec_var;
                break;
            case 'mul':
                ALU[first_var] *= sec_var;
                break;
            case 'div':
                ALU[first_var] /= sec_var;
                break;
            case 'mod':
                ALU[first_var] %= sec_var;
                break;
            case 'eql':
                ALU[first_var] = (ALU[first_var] == sec_var) ? 1 : 0;
                break;
            default:
                console.log(i, array[i], 'not found');
                break;
        }

    }

    return ALU['z']
}


submarine = 99999999999999
sub_array = String(submarine).split('').map(Number)

for(var n=0; n<9; n++) {
    for(var k=0; k<14; k++) {
       tmp_sub = sub_array[k]
        for(var m=0; m<sub_array[k]-1; m++) {
            tmp_sub--
            new_num = (k==0) ? Number([tmp_sub, sub_array.slice(1)].flat().join('')) : ([sub_array.slice(0,k-1), tmp_sub, sub_array.slice(k)].flat().join(''))
            console.log(new_num, ALUBuilder(input, new_num))
            if(ALUBuilder(input, new_num) == 0) {console.log('FOUND', new_num); break;}
        }
        sub_array[k]--
    }
}

