//wrong: 123864 // 1205392

var input = document.querySelectorAll('pre')[1].textContent.split('\n').slice(0,-1); 

/* builds directory */
directory = []

drive = {}

for(var i=0; i<input.length; i++) {
    if(/^\$ cd /.test(input[i])) {    
        dir = input[i].match(/^\$ cd (.+)/)[1]
        if(dir != "..") {
            directory.push(dir)
            currentFilePath = directory.join("/")
            drive[currentFilePath] = {path: directory.slice(), file_names:[], file_sizes:[], size: 0}
        }

        if(dir == "..") {
            directory = directory.slice(0, -1)
        }

    }

    if(/^\$ ls/.test(input[i])) {
        for(var j=i+1; j<input.length; j++) {
            if(/^\$ cd/.test(input[j])) {
                i = j-1
                break;
            }

            else {
                if(/^dir/.test(input[j])) {
                    break;
                }
                 else {
                     cd = directory.join("/")
                     vals = input[j].match(/([0-9]+) ([a-z.]+)/)

                     drive[cd]["file_names"].push(vals[2])
                     drive[cd]["file_sizes"].push(vals[1])
                     
                     for(var k=0; k<directory.length; k++) {
                         cd = directory.slice(0, directory.length-k).join("/")
                         drive[cd]["size"] += Number(vals[1])
                     }
                 }
            }

        }  
    }

}

small_dirs = []
for(const dir in drive) {
    if(drive[dir]["size"] <= 100000) {
        small_dirs.push(drive[dir]["size"]) 
    }
}
small_dirs.reduce(function(a,b) {return a+b})
