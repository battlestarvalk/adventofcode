file_day3 = open('/content/input03122024.txt', 'r').read()
import re

# part one
found = pd.DataFrame({"mul string": re.findall('mul\([0-9]+,[0-9]+\)', file_day3)})
found['first num'] = found['mul string'].str.extract('mul\(([0-9]+)').astype(int)
found['second num'] = found['mul string'].str.extract(',([0-9]+)').astype(int)
found['total'] = found['first num'] * found['second num']
found.sum()

# part two

instructions = pd.DataFrame({"mul string": re.findall("mul\([0-9]+,[0-9]+\)|do\(\)|don\'t\(\)", file_day3)})
instructions['first num'] = instructions['mul string'].str.extract('mul\(([0-9]+)').fillna(0).astype(int)
instructions['second num'] = instructions['mul string'].str.extract(',([0-9]+)').fillna(0).astype(int)
instructions['directive'] = instructions['mul string'].str.extract("(do\(\)|don't\(\))").fillna(0)
instructions['index'] = instructions.index

directives = pd.merge_asof(
    pd.DataFrame({"neg":instructions.index[instructions['directive'] == "don't()"].tolist()}),
    pd.DataFrame({"pos":instructions.index[instructions['directive'] == 'do()'].tolist()}), 
    left_on='neg', right_on='pos',direction='forward').fillna(1000)

df3 = instructions.merge(directives, how='cross') \
         .query("(index >= neg) & (index <= pos)")

allowed_values = instructions.drop(set(df3['index']), axis=0)

allowed_values['total'] = allowed_values['first num'] * allowed_values['second num']
allowed_values['total'].sum()
