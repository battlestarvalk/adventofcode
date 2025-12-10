# part one
factory_floor = [list(i) for i in input]
def find_space(factory_floor):
  accessible = 0
  for x in range(0, len(factory_floor)):
    for y in range(0,len(factory_floor[x])):
      if factory_floor[x][y] == ".":
        continue;
      else:
        blockers = 0

        if x > 0:
          if factory_floor[x-1][y] == "@":
            blockers = blockers + 1

          if y > 0 and factory_floor[x-1][y-1] == "@":
            blockers = blockers + 1

          if y < len(factory_floor[y])-1 and factory_floor[x-1][y+1] == "@":
            blockers = blockers + 1


        if x < len(factory_floor)-1:
          if factory_floor[x+1][y] == "@":
            blockers = blockers + 1

          if y < len(factory_floor[x])-1 and factory_floor[x+1][y+1] == "@":
            blockers = blockers + 1
          if y > 0 and factory_floor[x+1][y-1] == "@":
            blockers = blockers + 1

        if y < len(factory_floor[x])-1 and factory_floor[x][y+1] == "@":
          blockers = blockers + 1
        if y > 0 and factory_floor[x][y-1] == "@":
          blockers = blockers + 1

        if blockers < 4 and factory_floor[x][y] == "@":
          accessible = accessible + 1

        blockers = 0
  return accessible
find_space(factory_floor)


# part two
factory_floor = [list(i) for i in input]
def cleaning_up(factory_floor):
  accessible = 0
  cleaned_up = []
  for x in range(0, len(factory_floor)):
    for y in range(0,len(factory_floor[x])):
      if factory_floor[x][y] == ".":
        continue;
      else:
        blockers = 0

        if x > 0:
          if factory_floor[x-1][y] == "@":
            blockers = blockers + 1

          if y > 0 and factory_floor[x-1][y-1] == "@":
            blockers = blockers + 1

          if y < len(factory_floor[y])-1 and factory_floor[x-1][y+1] == "@":
            blockers = blockers + 1


        if x < len(factory_floor)-1:
          if factory_floor[x+1][y] == "@":
            blockers = blockers + 1

          if y < len(factory_floor[x])-1 and factory_floor[x+1][y+1] == "@":
            blockers = blockers + 1
          if y > 0 and factory_floor[x+1][y-1] == "@":
            blockers = blockers + 1

        if y < len(factory_floor[x])-1 and factory_floor[x][y+1] == "@":
          blockers = blockers + 1
        if y > 0 and factory_floor[x][y-1] == "@":
          blockers = blockers + 1

        if blockers < 4 and factory_floor[x][y] == "@":
          accessible = accessible + 1
          cleaned_up.append([x,y])

        blockers = 0

  return (accessible, cleaned_up)

def keep_cleaning(factory_floor):
  total_cleaned = 0
  accessed = 'start_loop'
  while accessed != 0:
    (accessed, cleaned_up) = cleaning_up(factory_floor)
    total_cleaned = total_cleaned + accessed
    for item in cleaned_up:
      factory_floor[item[0]][item[1]] = factory_floor[item[0]][item[1]].replace("@", ".")

  return total_cleaned


keep_cleaning(factory_floor)
