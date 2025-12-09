import pandas as pd

# part one
voltage = []
for item in input:
  str_sorted = sorted(item, reverse=True)
  highest_val_loc = item.find(str_sorted[0])
  if highest_val_loc == (len(item) - 1):
    highest_val = str_sorted[1]
    highest_val_loc = item.find(str_sorted[1])
  else:
    highest_val = str_sorted[0]

  second_val = item[highest_val_loc+1:]

  second_sort = sorted(second_val, reverse=True)
  second_highest = second_sort[0]

  voltage.append(int(highest_val + second_highest))
sum(voltage)

# part two
valid_joltages = []
for joltage in input:
  new_str = joltage
  batteries = 12
  remaining_batteries = batteries
  valid_battery = ''

  for item in range(batteries):
    str_sorted = sorted(new_str, reverse=True)
    valid_val = next(x for x in str_sorted if new_str.find(x) <= len(new_str)-remaining_batteries)
    valid_battery = valid_battery + valid_val
    new_str = new_str[new_str.find(valid_val)+1:]
    remaining_batteries = remaining_batteries - 1
  
  valid_joltages.append(valid_battery)
sum(map(int, valid_joltages))
