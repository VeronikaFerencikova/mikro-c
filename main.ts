input.onButtonPressed(Button.A, function () {
    radio.sendString("mikro chat!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
