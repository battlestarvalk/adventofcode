const test_input = ['F10','N3','F7','R90','F11']
const input = document.querySelector('pre').textContent.split('\n').slice(0, -1);

let compass = 0,
    manhattan = {"NS": 0, "EW": 0};
    
// change the compass to rotate
function compassRotation (str) {
  var movementdirection = Number(str.substring(1)) / 90
  if( str.startsWith("R") ) {
      compass = compass += movementdirection
  }
  else if ( str.startsWith("L") ) {
      compass = compass -= movementdirection
  }
  compass = (compass % 4)
  return compass
}

// the compass is stored numerically, so we want to convert it to a letter to match the rest of the input
function direction (num) {
  switch(num) {
    case 0:
          return "E";
          break;
    case 1:
    case -3:
          return "S";
          break;
    case 2:
    case -2:
          return "W";
          break;
    case 3:
    case -1:
          return "N";
          break;
    default:
          console.log("bro i can't find this");
  }
}

// this is the compass movement from the final function, in case you want it separate :)
// function compassMovement (str) {
//         switch(str.charAt(0)) {
//         case "N":
//             manhattan["NS"] += Number(str.substring(1));
//             break;
//         case "S":
//             manhattan["NS"] -= Number(str.substring(1));
//             break;
//         case "E":
//             manhattan["EW"] += Number(str.substring(1));
//             break;
//         case "W":
//             manhattan["EW"] -= Number(str.substring(1));
//             break;
//         default:
//             console.log("idk!");
//     }
// }

// part 1
function goTheDistance (arr) {

    arr.forEach( function(movement) {
//        console.log("start", movement, compass, manhattan)
        if(movement.startsWith("F")) {
            movement = direction(compass).concat(movement.substring(1));
        }

        if(movement.startsWith("R") || movement.startsWith("L")) {
            compassRotation(movement)
        }

        else {
		console.log("movement", movement, compass, movement.substring(1))
          switch(movement.charAt(0)) {
            case "N":
                manhattan["NS"] += Number(movement.substring(1));
                break;
            case "S":
                manhattan["NS"] -= Number(movement.substring(1));
                break;
            case "E":
                manhattan["EW"] += Number(movement.substring(1));
                break;
            case "W":
                manhattan["EW"] -= Number(movement.substring(1));
                break;
            default:
                console.log("idk!");
        }
      }
// 	console.log("end", movement, compass, manhattan)
    })
    
    return Math.abs(manhattan["NS"])+Math.abs(manhattan["EW"])
}

// // part two
// let 
// 	compass = [3, 0],
// 	manhattan = {"NS": 0, "EW": 0},
// 	waypoint = {"NS": 1, "EW": 10};

// function waypointRotation (str) {
// 	var movementdirection = Number(str.substring(1)) / 90
// 	if( str.startsWith("R") ) {
// 		compass = compass.map(function (rotation) {return (rotation += movementdirection) % 4})
// 	}
// 	else if ( str.startsWith("L") ) {
// 		compass = compass.map(function (rotation) {return (rotation -= movementdirection) % 4})
// 	}
// 	return compass
// }

// test_input.forEach( function(movement) {
//     console.log("start", movement, compass, waypoint, manhattan)
//     if(movement.startsWith("F")) {
//         manhattan["NS"] = manhattan["NS"] + (waypoint["NS"]*Number(movement.substring(1)));
//         manhattan["EW"] = manhattan["EW"] + (waypoint["EW"]*Number(movement.substring(1)));
//     }

//     if(movement.startsWith("R") || movement.startsWith("L")) {
//         waypointRotation(movement)
//     }

//     else {
//         console.log("movement", movement, compass, movement.substring(1))
//         switch(movement.charAt(0)) {
//             case "N":
//                 waypoint["NS"] += Number(movement.substring(1));
//                 break;
//             case "S":
//                 waypoint["NS"] -= Number(movement.substring(1));
//                 break;
//             case "E":
//                 waypoint["EW"] += Number(movement.substring(1));
//                 break;
//             case "W":
//                 waypoint["EW"] -= Number(movement.substring(1));
//                 break;
//             default:
//                 console.log("idk!");
//         }
//     }
//     console.log("end", movement, compass, waypoint, manhattan)
// })
