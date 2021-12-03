input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onButtonPressed(Button.AB, function () {
    images.createImage(`
        # . . . #
        # . . . #
        # . # . #
        # . # . #
        # # # # #
        `).showImage(0)
})
input.onButtonPressed(Button.B, function () {
    images.arrowImage(ArrowNames.NorthEast).showImage(0)
    basic.pause(1000)
    basic.showLeds(`
        # . # . #
        # . # . .
        # # # . #
        # . # . #
        # . # . #
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
})
