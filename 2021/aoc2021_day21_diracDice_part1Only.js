function diceRoller (player1, player2) {
    player_1_points = 0
    player_1_pos = player1
    player_2_points = 0
    player_2_pos = player2
    dice = 1
    player_turn = 1

    for(var i=0;;i++) {
        if(player_1_points >= 1000 || player_2_points >= 1000) {
            return (Math.min(player_1_points, player_2_points)*(i*3))
            break;
        }
        dice_roll = dice + (dice+1) + (dice+2)
        points = 0
        dice += 3

        if(player_turn == 1) {
            points += (player_1_pos + dice_roll)%10 == 0 ? 10 : (player_1_pos + dice_roll)%10
            player_1_points += points
            player_1_pos = points
            player_turn = 2
            continue;
        }

        if(player_turn == 2) {
            points += (player_2_pos + dice_roll)%10 == 0 ? 10 : (player_2_pos + dice_roll)%10
            player_2_points += points
            player_2_pos = points
            player_turn = 1
            continue;
        }

    }

}
// part one
diceRoller(6,8)
