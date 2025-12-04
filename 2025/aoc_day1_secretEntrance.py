import pandas as pd
import re

# part one
dial = 50
zero_rank = 0

for x in input:
  direction = re.search('L|R', x).group()
  distance = int(re.search('[0-9]+', x).group())

  if direction == "L":
    dial = dial - (distance%100)
  elif direction == "R":
    dial = dial + (distance%100)

  if dial < 0:
    dial = 100 + dial;
  elif dial > 99:
    dial = dial - 100

  if dial == 0:
    zero_rank = zero_rank + 1

zero_rank

# part two - answer too high

dial = 50
zero_rank = 0

for x in input:
  direction = re.search('L|R', x).group()
  distance = int(re.search('[0-9]+', x).group())

  if direction == "L":
    dial = dial - (distance%100)
  elif direction == "R":
    dial = dial + (distance%100)
  else:
    print('dunno!')
  
  zero_rank = zero_rank + (distance//100)
  
  if dial < 0:
    dial = 100 + dial;
    zero_rank = zero_rank + 1
  elif dial > 99:
    dial = dial - 100
    zero_rank = zero_rank + 1

zero_rank
