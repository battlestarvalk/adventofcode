/*part one*/
input = document.querySelector('pre').textContent.split('\n').slice(0,-1).map(x => x.split(''))

safe_input = input

for (var k=0;; k++) {

    tmp_array = new Array(input.length).fill('.').map(x => x = new Array(input[0].length).fill('.'))

    cucumberMovement = 0

    for(var i=0; i<input.length;i++) {
        for(var j=0;j<input[i].length;j++) {
            if(safe_input[i][j] == 'v') {
                widthCheckLeft = j-1
                widthCheckRight = j+1

                if(j == safe_input[i].length-1) {
                    widthCheckRight = 0
                }

                if(j == 0) {
                    widthCheckLeft = input[i].length-1
                }

                if(i == safe_input.length-1) {
                    if((safe_input[0][j] == '.' && safe_input[0][widthCheckLeft] != '>') || 
                        (safe_input[0][j] == '>' && safe_input[0][widthCheckRight] == '.') ) {
                        tmp_array[0][j] = 'v'
                        cucumberMovement++
                    }

                    else {
                    tmp_array[i][j] = 'v'
                    }   
                }

                else if((safe_input[i+1][j] == '.' && safe_input[i+1][widthCheckLeft] != '>') || 
                        (safe_input[i+1][j] == '>' && safe_input[i+1][widthCheckRight] == '.') ) {
                    tmp_array[i+1][j] = 'v'
                    cucumberMovement++
                }

                else {
                    tmp_array[i][j] = 'v'
                }  

            }

          if(safe_input[i][j] == '>') {
                if(j == safe_input[i].length-1) {
                    if(safe_input[i][0] == '.') {
                        tmp_array[i][0] = '>'
                        cucumberMovement++
                    }

                    else {
                    tmp_array[i][j] = '>'
                    }   
                }

                else if(safe_input[i][j+1] == '.') {
                    tmp_array[i][j+1] = '>'
                    cucumberMovement++
                }

                else {
                    tmp_array[i][j] = '>'
                }   
            }
        }
    }

    safe_input = tmp_array

   if(cucumberMovement == 0) {
        console.log(k)
        break;
    }

}

