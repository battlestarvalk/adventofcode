import pandas as pd
test_input = "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124"
test_df = pd.DataFrame(data={'range':test_input.split(",")})

def find_invalid(x):
  # finds upper and lower range
  lower = x.split('-')[0]
  upper = x.split('-')[1]

  # splits the number in half
  upper_half = int(upper[:sum(divmod(len(upper), 2))])
  lower_half = int(lower[:sum(divmod(len(lower), 2))])

  # if the higher number is even and the lower number is odd, use one additional number when generating the loop (so 99-100 uses 10 and 9 instead of 1 and 9)
  if(len(upper)%2 == 0 and len(lower)%2 == 1):
    loop = int(upper[:sum(divmod(len(upper), 2))+1]) - lower_half
  else:
    loop = upper_half - lower_half

  for y in range(0, (loop)+1):
    # create a potential repeating ID within the range (so 9 -> 99, 10 -> 1010, 11 -> 1111)
    working_val = int(str(y+lower_half)*2)
    if(int(lower) <= working_val and working_val <= int(upper)):
    # check if it is in range and push to array if so
      invalid_id.append(working_val)

invalid_id = []
test_df['range'].apply(find_invalid)

# sum invalid IDs.
sum(invalid_id)

# this has a bug where for 99-100 it creates a repeating ID that's too high (so 100100 instead of 1010), so need to account for that
