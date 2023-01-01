// Helper function to play the samples
window.playSample = (arg) => {
    const sample = new Audio(`drumSamples/${arg}`);
    sample.play();
}

// Listener for the drum machine
document.addEventListener('keydown', (e) => {
    switch(e.code){
        case "Digit3":
            playSample("kick.wav")
            break;
        case "Digit4":
            playSample("snare.wav")
            break;
        case "Digit5":
            playSample("hihatclosed.wav")
            break;
        case "Digit6":
            playSample("808-ho06.wav")
            break;
        case "KeyE":
            playSample("808-sd21.wav")
            break;
        case "KeyR":
            playSample("808-thi2.wav")
            break;
        case "KeyT":
            playSample("808-thi1.wav")
            break;
        case "KeyY":
            playSample("808-tlo1.wav")
            break;
        case "KeyD":
            playSample("808-cym01.wav")
            break;
        case "KeyF":
            playSample("808-cym03.wav")
            break;
        case "KeyG":
            playSample("808-cym07.wav")
            break;
        case "KeyH":
            playSample("808-cym09.wav")
            break;
        case "KeyC":
            playSample("808-clo1.wav")
            break;
        case "KeyV":
            playSample("808-clo2.wav")
            break;
        case "KeyB":
            playSample("808-clo3.wav")
            break;
        case "KeyN":
            playSample("808-cme1.wav")
            break;
    }
});