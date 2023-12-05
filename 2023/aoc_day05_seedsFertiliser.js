var input = document.querySelector('pre').textContent.split('\n').slice(0,-1); 

seeds = input[0].match(/[0-9]+/g).map(Number)
instructions = input.slice(2)
