var input = document.querySelectorAll('pre')[0].textContent.split('\n').slice(0,-1); 

// builds directory
directory = []
drive = {}

for(var i=0; i<input.length; i++) {
    // change directory if
    if(/^\$ cd /.test(input[i])) {   
        // saves what the cd directory is named as
        dir = input[i].match(/^\$ cd (.+)/)[1]
        
        if(dir != "..") {
            // adding our new directory to the path list
            directory.push(dir)
            
            // join as a string so we can save it to the drive object
            currentFilePath = directory.join("/")
            
            // none of these values were needed, but it's nice to know we have them.............. just in case
            drive[currentFilePath] = {path: directory.slice(), file_names:[], file_sizes:[], size: 0}
        }

        //just go up one level if the dir is ..
        if(dir == "..") {
            directory = directory.slice(0, -1)
        }

    }

    // list files
    if(/^\$ ls/.test(input[i])) {
        for(var j=i+1; j<input.length; j++) {
            // we've been iterating over the code to collect files within j. Now it's time to head back to i and check/modify the path
            if(/^\$ cd/.test(input[j])) {
                i = j-1
                break;
            }

            // these can be ignored
            if(/^dir/.test(input[j])) {
                //do nothing
            }

            else {
                //change the directory path to a flat string
                 cd = directory.join("/")
                //retrieving file size and name
                 vals = input[j].match(/([0-9]+) ([a-z.]+)/)
                //pushing to drive object (not necessary, but alas)
                 drive[cd]["file_names"].push(vals[2])
                 drive[cd]["file_sizes"].push(vals[1])

                //now it's time to add the file size to every directory that we're nested inside
                 for(var k=0; k<directory.length; k++) {
                     //removes the last listed directory path and converts it to a flat string
                     cd = directory.slice(0, directory.length-k).join("/")
                     //finds the relevant directionary path and adds the new file size to it
                     drive[cd]["size"] += Number(vals[1])
                 }
            }
        }  
    }
}

/*part one*/
small_dirs = []
for(const dir in drive) {
    if(drive[dir]["size"] <= 100000) {
        //adds every sub-100k directory to an array
        small_dirs.push(drive[dir]["size"]) 
    }
}
// sum the array
small_dirs.reduce(function(a,b) {return a+b})

/*part two*/
//understand how much space we need
req_size = 30000000 - (70000000 - drive["/"]["size"])
delete_dir = []
for(const dir in drive) {
    if(drive[dir]["size"] >= req_size) {
        //adds every directory above the min. required size to an array
        delete_dir.push(drive[dir]["size"]) 
    }
}
//finds the smallest
Math.min(...delete_dir)
