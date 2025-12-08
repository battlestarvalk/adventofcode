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
