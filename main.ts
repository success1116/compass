basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        input.calibrateCompass()
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.temperature())
        basic.clearScreen()
        basic.pause(1000)
    }
    if (input.buttonIsPressed(Button.B)) {
        if (input.compassHeading() < 22.5) {
            basic.showString("N")
        } else if (input.compassHeading() < 67.5) {
            basic.showString("NE")
        } else if (input.compassHeading() < 112.5) {
            basic.showString("E")
        } else if (input.compassHeading() < 157.5) {
            basic.showString("SE")
        } else if (input.compassHeading() < 202.5) {
            basic.showString("S")
        } else if (input.compassHeading() < 247.5) {
            basic.showString("SW")
        } else if (input.compassHeading() < 292.5) {
            basic.showString("W")
        } else {
            basic.showString("NW")
        }
        basic.clearScreen()
        basic.pause(2000)
        basic.showNumber(input.compassHeading())
    }
})
