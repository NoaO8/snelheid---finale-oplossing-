let fase = 0
if (true) {
    if (fase == 0 && pins.digitalReadPin(DigitalPin.P0) > 512) {
        fase = 1
    }
    if (fase == 1 && pins.digitalReadPin(DigitalPin.P0) < 255) {
        fase = 2
    }
    if (fase == 2 && pins.digitalReadPin(DigitalPin.P1) > 512) {
        fase = 3
    }
    if (fase == 3 && pins.digitalReadPin(DigitalPin.P1) < 255) {
        fase = 4
    }
    if (fase == 4 && pins.digitalReadPin(DigitalPin.P2) > 512) {
        fase = 5
    }
    if (fase == 5 && pins.digitalReadPin(DigitalPin.P2) < 255) {
        fase = 0
    }
}
