input = document.querySelector('pre').textContent.split('\n').slice(0,-1).map(x => x.split(''))
tmp_array = new Array(input.length).fill('.').map(x => x = new Array(input[0].length).fill('.'))

tmp_array = new Array(input.length).fill('.').map(x => x = new Array(input[0].length).fill('.'))
for(var i=0; i<input.length;i++) {
    for(var j=0;j<input[i].length;j++) {
        if(input[i][j] == 'v') {
            if(i == input.length-1) {
                if(input[0][j] == 'v') {
                    tmp_array[0][j] = 'v'
                }

                else {
                tmp_array[i][j] = 'v'
                }   
            }

            else if(input[i+1][j] == '.') {
                tmp_array[i+1][j] = 'v'
            }

            else {
                tmp_array[i][j] = 'v'
            }   
        }

      if(input[i][j] == '>') {
            if(i == input[i].length-1) {
                if(input[i][0] == '>') {
                    tmp_array[i][0] = '>'
                }

                else {
                tmp_array[i][j] = '>'
                }   
            }

            else if(input[i][j+1] == '.') {
                tmp_array[i][j+1] = '>'
            }

            else {
                tmp_array[i][j] = '>'
            }   
        }
    }
}
tmp_array
