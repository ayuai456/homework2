basic.forever(function () {
    for (let Y = 0; Y <= 8; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(4 - X, 8 - (Y - X))
        }
        basic.pause(100)
    }
    for (let Y = 0; Y <= 8; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.plot(0, 0)
        }
        basic.pause(100)
    }
})
