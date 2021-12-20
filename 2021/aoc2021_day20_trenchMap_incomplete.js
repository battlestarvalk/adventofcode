image_enhance = document.querySelector('pre').textContent.split('\n\n')[0].split('\n').join('')
image_input = document.querySelector('pre').textContent.split('\n\n')[1].split('\n').slice(0,-1).map(x => x.split(''))
replace_image = document.querySelector('pre').textContent.split('\n\n')[1].replaceAll('.','0').replaceAll('#','1').split('\n').slice(0,-1).map(x => x.split(''))


ie_test = image_enhance.split('')
binary_lights = []
numerical_lights = []

for(var i=0; i<ie_test.length;i++) {
    if(ie_test[i] == '#') {
        binary_lights.push(Number(i).toString(2))
        numerical_lights.push(i)
    }
}

binary_inputs = []
for(var i=1; i<replace_image.length-1;i++) {
    for(var j=1; j<replace_image[i].length-1;j++) {
        binary_inputs.push(
            parseInt(Number(
                [
                    replace_image[i-1][j-1],
                    replace_image[i-1][j],
                    replace_image[i-1][j+1],
                    replace_image[i][j-1],
                    replace_image[i][j],
                    replace_image[i][j+1],
                    replace_image[i+1][j-1],
                    replace_image[i+1][j],
                    replace_image[i+1][j+1]
                ].join('')
            ), 2)
                )
    }
}
binary_inputs
