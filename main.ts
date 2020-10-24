basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= Y; X++) {
            led.plot(4 - X, 4 - Y)
            basic.pause(500)
        }
    }
})
