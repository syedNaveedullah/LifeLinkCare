const scanner = new Html5QrcodeScanner('reader', { 
    // Scanner will be initialized in DOM inside element with id of 'reader'
    qrbox: {
        width: 250,
        height: 250,
    },  // Sets dimensions of scanning box (set relative to reader element width)
    fps: 20, // Frames per second to attempt a scan
});


scanner.render(success, error);
// Starts scanner

function success(result) {

    document.getElementById('result').innerHTML =`
    ${result}`;
    // Prints result as a link inside result element

    scanner.clear();
    // Clears scanning instance

    document.getElementById('reader').remove();
    // Removes reader element from DOM since no longer needed
}

function error(err) {
    console.error(err);
    // Prints any errors to the console
}


let speech = new SpeechSynthesisUtterance();

document.getElementById('speakbtn').addEventListener('click', function () {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});