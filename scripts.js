window.onload = function() {

    var stage = document.getElementById('stage')
    var context = stage.getContext('2d')

    document.addEventListener("keydown", keyPush)
    setInterval(game, 60)

    var vel = 1

    var velX = velY = 0
    var posX =  15
    var posY = 15
    var blocSize = 20
    var blocAmount = 20
    var appleX = appleY = 15

    var trail = []
    tail = 5

    function game() {
        posX += velX
        posY += velY
        if (posX < 0) {
            posX = blocAmount - 1
        }
        if (posX > blocAmount - 1) {
            posX = 0
        }
        if (posY < 0) {
            posY = blocAmount - 1
        }
        if (posY > blocAmount - 1) {
            posY = 0
        }
    }


    context.fillStyle = "black"
    context.fillRect(0, 0, stage.width, stage.height)

    context.fillStyle = "red"
    context.fillRect(appleX * blocSize, appleY * blocSize, blocSize, blocSize)

    context.fillStyle = "gray"
    for (let i = 0; i < trail.length; i++) {
        context.fillRect(trail[i].x * blocSize, trail[i].y * blocSize, blocSize, blocSize)
        if (trail[i].x == posX && trail[i].y == posY) {
            velX = velY = 0
        }
    }
    
    trail.push({x:posX, y:posY})
    while (trail.length > tail) {
        trail.shift()
    }


    if (appleX == posX && appleY == posY) {
        tail++
        appleX = Math.floor(Math.random() * blocAmount)
        appleY = Math.floor(Math.random() * blocAmount)
    }

    function keyPush(event){
        switch (event.keyCode) {
            case 37: // left
                velX = - vel
                velY = 0
            case 38: // up
                velX = 0
                velY = - vel
            case 39: // right
                velX = vel
                velY = 0
            case 40: // down
                velX = 0 
                velY = vel
            default:
                
                break
        
        }




    }



}