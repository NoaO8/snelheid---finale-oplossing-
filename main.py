fase = 0
if True:
    if fase == 0 and pins.digital_read_pin(DigitalPin.P0) > 512:
        fase = 1
    if fase == 1 and pins.digital_read_pin(DigitalPin.P0) < 255:
        fase = 2
    if fase == 2 and pins.digital_read_pin(DigitalPin.P1) > 512:
        fase = 3
    if fase == 3 and pins.digital_read_pin(DigitalPin.P1) < 255:
        fase = 4
    if fase == 4 and pins.digital_read_pin(DigitalPin.P2) > 512:
        fase = 5
    if fase == 5 and pins.digital_read_pin(DigitalPin.P2) < 255:
        fase = 0