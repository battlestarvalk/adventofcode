const test_input = [0,3,6]
const input = [0,14,1,3,7,9]

obj = {};
for(let i = 0; i < 10; i++) {
            if(obj.hasOwnProperty(tmp_input[i])) {
                obj[tmp_input[i]].push(i)
        obj_length = obj[tmp_input[i]].length
                if (obj_length > 1) {
                tmp_input.push( obj[tmp_input[i]][obj_length - 2] - obj[tmp_input[i]][obj_length - 1] ) 
                }
                else {
                        tmp_input.push( 0 )
                }
      }
            else {
                obj[tmp_input[i]] = [i]
            }
}
