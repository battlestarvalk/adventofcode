import pandas as pd
file = pd.read_csv(open('/content/input02122024', 'r'), header=None, sep='  ')

# part one
file_pt1 = file

file_pt1 = file_pt1.apply(lambda x: x.sort_values().values, axis=0)
file_pt1[2] = (file_pt1[1] - file_pt1[0]).abs()
file_pt1[2].sum()

# part two
file_pt2 = file#.rename(columns={0: "left", 1: "right"})
value_freq = file_pt2[1].value_counts().reset_index()#.rename(columns={1:'left'})
merged_values = file_pt2.merge(value_freq, how='left', left_on=0, right_on=1).fillna(0)
merged_values['similarity_score'] = merged_values[0] * merged_values['count']
merged_values['similarity_score'].sum()
