input = document.querySelector('pre').textContent.split('\n').slice(0,-1);

/* partOne */
function strategyGuide(input) {
scores = []
for(var i=0; i<input.length; i++) {
  playScore = 0
  resultScore = 0

  result = ""
  if(input[i].charAt(0) == "A") {
      switch(input[i].charAt(2)) {
          case "X":
              result = "draw";
              break;
          case "Y":
              result = "win";
              break;
          case "Z":
              result = "loss";
              break;
      }
  }

  if(input[i].charAt(0) == "B") {
      switch(input[i].charAt(2)) {
          case "Y":
              result = "draw";
              break;
          case "Z":
              result = "win";
              break;
          case "X":
              result = "loss";
              break;
      }
  }

  if(input[i].charAt(0) == "C") {
      switch(input[i].charAt(2)) {
          case "Z":
              result = "draw";
              break;
          case "X":
              result = "win";
              break;
          case "Y":
              result = "loss";
              break;
      }
  }

  switch(input[i].charAt(2)) {
      case "X":
          playScore = 1;
          break;
      case "Y":
          playScore = 2;
          break;
      case "Z":
          playScore = 3;
          break;
  }

  switch(result) {
      case "win":
          resultScore = 6;
          break;
      case "loss":
          resultScore = 0;
          break;
      case "draw":
          resultScore = 3;
          break;
  }
  scores.push(playScore + resultScore)
}

return scores.reduce(function(a,b) {return a+b})
  
}

strategyGuide(input)


/*partTwo*/

function losingStrat(input) {
scores = []
for(var i=0; i<input.length; i++) {
  playScore = 0
  resultScore = 0

  result = ""
  if(input[i].charAt(0) == "A") {
      switch(input[i].charAt(2)) {
          case "X":
              playScore = 3;
              break;
          case "Y":
              playScore = 1;
              break;
          case "Z":
              playScore = 2;
              break;
      }
  }

  if(input[i].charAt(0) == "B") {
      switch(input[i].charAt(2)) {
          case "X":
              playScore = 1;
              break;
          case "Y":
              playScore = 2;
              break;
          case "Z":
              playScore = 3;
              break;
      }
  }

  if(input[i].charAt(0) == "C") {
      switch(input[i].charAt(2)) {
          case "X":
              playScore = 2;
              break;
          case "Y":
              playScore = 3;
              break;
          case "Z":
              playScore = 1;
              break;
      }
  }

  switch(input[i].charAt(2)) {
      case "X":
          result = "loss";
          break;
      case "Y":
          result = "draw";
          break;
      case "Z":
          result = "win";
          break;
  }

  switch(result) {
      case "win":
          resultScore = 6;
          break;
      case "loss":
          resultScore = 0;
          break;
      case "draw":
          resultScore = 3;
          break;
  }
  scores.push(playScore + resultScore)
}

return scores.reduce(function(a,b) {return a+b})
  
}

losingStrat(input)
