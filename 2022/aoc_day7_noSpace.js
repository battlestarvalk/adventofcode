var input = document.querySelectorAll('pre')[1].textContent.split('\n').slice(0,-1); 

/* builds directory */
directory = []
//directory = ""

drive = {}

for(var i=0; i<input.length; i++) {
// has issue - saves the whole array to the directory??
    if(/^\$ cd /.test(input[i])) {
        dir = input[i].match(/^\$ cd (.+)/)[1]
        if(dir != "..") {
            if(!drive[dir]) {
                drive[dir] = {path: directory, file:[], size: 0}
            }
            //drive[dir]["path"] += dir
            drive[dir]["path"].push(dir) 
            directory = drive[dir]["path"]

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
                    sub_dir = input[j].match(/^dir (.+)/)[1]
                    if(!drive[sub_dir]) {
                        drive[sub_dir] = {path: directory, file:[], size: 0}
                    }
                }
                 else {
                     cd = directory[directory.length-1]
                     vals = input[j].match(/([0-9]+) ([a-z.]+)/)
                     drive[cd]["file"].push([vals[2], vals[1]])
                     
                     for(var k=1; k<directory.length+1; k++) {
                         cd = directory[directory.length-k]
                         drive[cd]["size"] += Number(vals[1])
                     }
                 }
            }

        }  
    }

}

drive

small_dirs = []
for(const dir in drive) {
    if(drive[dir]["size"] <= 100000) {
        small_dirs.push(drive[dir]["size"]) 
    }
}
small_dirs.reduce(function(a,b) {return a+b})