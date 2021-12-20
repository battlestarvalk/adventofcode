input = document.querySelector('pre').textContent.split('\n')[0]

boundaries = input.match(/x=(-?[0-9]+)..(-?[0-9]+), y=(-?[0-9]+)..(-?[0-9]+)/)
startX = Number(boundaries[1])
endX = Number(boundaries[2])
startY = Number(boundaries[3])
endY = Number(boundaries[4])

probe = [0,0]
velocity = [7,2]

test_steps = 10
for(var i=0; i<test_steps;i++) {
    probe[0] += velocity[0]
    probe[1] += velocity[1]

        if(probe[0] > startX && probe[0] < endX) {
                if(probe[1] > startY && probe[1] < endY) {
                    console.log(i, probe_start, velocity)
                    break;
            }
        }

        if(probe[0] > endX) {
                console.log("broken :(", endX, endY, probe)
                break;
        }

        if(probe[1] < startY) {
                console.log("broken :(", endX, endY, probe)
                break;
        }

    velocity[1]--
    if(velocity[0] > 0) {velocity[0]--}
    if(velocity[0] < 0) {velocity[0]++}
}
