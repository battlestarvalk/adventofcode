const day4_input = document.querySelector('pre').textContent.split(/\n{2,}/g)
const day4_input2 = [];

day4_input.forEach(function(newline) {
	 day4_input2.push(newline.replace(/\n/g, " "));
	})

var resultArray = [],
	resultArray2 = [];
	
day4_input.forEach(function(fields) {

    if( (
		/byr/.test(fields) )
         && (/iyr/.test(fields) )
         && (/eyr/.test(fields) )
         && (/hgt/.test(fields) )
         && (/hcl/.test(fields) )
         && (/ecl/.test(fields) )
         && (/pid/.test(fields) )
        ) {
        return resultArray.push(true)
    }
    else { false }
})
resultArray.length

function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

day4_input2.forEach( function(entries) {

	if (/byr: ?([0-9]{4})( |$)/.test(entries)) {
		var byr = entries.match(/byr: ?([0-9]{4})( |$)/ )[1];
	}

	if (/iyr: ?([0-9]{4})( |$)/.test(entries)) {
		var iyr = entries.match(/iyr: ?([0-9]{4})( |$)/)[1];
	}

	if (/eyr: ?([0-9]{4})( |$)/.test(entries)) {
		var eyr = entries.match(/eyr: ?([0-9]{4})( |$)/)[1];
	} 

	if( /hgt: ?[0-9]+cm( |$)/.test(entries) ) {
		var hgt = entries.match(/hgt: ?([0-9]+)cm( |$)/)[1],
			hgt = inRange(hgt, 150, 193);
	   }
	else if( /hgt: ?[0-9]+in( |$)/.test(entries) ) {
		var hgt = entries.match(/hgt: ?([0-9]+)in( |$)/)[1],
			hgt = inRange(hgt, 59, 76);
	   }


	if (
		inRange(byr, 1920, 2002)
		&& inRange(iyr, 2010, 2020)
		&& inRange(eyr, 2020, 2030)
		&& /hcl: ?(#[a-f0-9]{6})( |$)/.test(entries)
		&& /ecl: ?(amb|blu|brn|gry|grn|hzl|oth)( |$)/.test(entries)
		&& /pid: ?([0-9]{9})( |$)/.test(entries)
		&& (hgt)
		) {
			resultArray2.push(true)
		}
	});

resultArray2
