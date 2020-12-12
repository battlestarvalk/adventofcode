const test_input = ['F10','N3','F7','R90','F11']

let compass = 0,
    manhattan = {"NS": 0, "EW": 0};
    
function compassRotation (str) {
  var movementdirection = Number(str.substring(1)) / 90
  if( str.startsWith("R") ) {
      compass = compass += movementdirection
  }
  else if ( str.startsWith("L") ) {
      compass = compass -= movementdirection
  }
  return Math.abs(compass) % 4
}

function direction (num) {
  switch(num) {
    case 0:
          return "E";
          break;
    case 1:
          return "S";
          break;
    case 2:
          return "W";
          break;
    case 3:
          return "N";
          break;
    default:
          console.log("bro i can't find this");
  }
}

compass = 0;
manhattan = {"NS": 0, "EW": 0};

function compassMovement (str) {
        switch(str.charAt(0)) {
        case "N":
            manhattan["NS"] += Number(str.substring(1));
            break;
        case "S":
            manhattan["NS"] -= Number(str.substring(1));
            break;
        case "E":
            manhattan["EW"] += Number(str.substring(1));
            break;
        case "W":
            manhattan["EW"] -= Number(str.substring(1));
            break;
        default:
            console.log("idk!");
    }
}

test_input.forEach( function(movement) {
    if(movement.startsWith("F")) {
        movement = direction(compass).concat(test_input[2].substring(1))
    }

    if(movement.startsWith("R") || movement.startsWith("L")) {
        compassRotation(movement)
    }

    else {
            compassMovement(movement)
  }

})

manhattan
