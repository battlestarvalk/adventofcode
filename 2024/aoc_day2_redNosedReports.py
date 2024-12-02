#day 2
file = pd.read_csv(open('/content/input02122024-1', 'r'), header=None, sep=' ')

file_pt1 = file
file_pt1['0-1'] = file_pt1[1] - file_pt1[0]
file_pt1['1-2'] = file_pt1[2] - file_pt1[1]
file_pt1['2-3'] = file_pt1[3] - file_pt1[2]
file_pt1['3-4'] = file_pt1[4] - file_pt1[3]
file_pt1['4-5'] = file_pt1[5] - file_pt1[4]
file_pt1['5-6'] = file_pt1[6] - file_pt1[5]
file_pt1['6-7'] = file_pt1[7] - file_pt1[6]

file_pt1['range_test_1'] = ((file_pt1[['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7']].abs() > 3)).any(axis=1)
file_pt1['range_test_2'] = ((file_pt1[['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7']].abs() == 0)).any(axis=1)
file_pt1['negative_test']  = file_pt1[['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7']].ge(0).sum(axis=1)
file_pt1['positive_test']  = file_pt1[['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7']].le(0).sum(axis=1)

# file_pt1
file_pt1[
    (file_pt1['range_test_1'] == False) 
    & (file_pt1['range_test_2'] == False) 
    & ((file_pt1['negative_test'] == 0) | (file_pt1['positive_test'] == 0) )
     ]
