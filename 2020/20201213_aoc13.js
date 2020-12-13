const test_input = ["939","7,13,x,x,59,x,31,19"],
      test_timetable = Number(test_input[0]),
      test_buses = test_input[1].split(",").map(Number).filter(function(numbersOnly) {return isNaN(numbersOnly) === false});
