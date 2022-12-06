input = document.querySelector('pre').textContent.split("")


function markerFind(arr, distinct) {
    for(var i=distinct; i<arr.length; i++) {
        if([...new Set(arr.slice(i-distinct,i))].length == distinct) {
            return (i);
            break;
        }
    }
}

/*part one*/
markerFind(input, 4)

/*part two*/
markerFind(input, 14)
