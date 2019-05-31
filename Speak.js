/**
 * Jimmy's Shit code
 * @param {*} method 
 * @param {*} speed 
 */

const consoleSpeak = (method, speed) => {
    const oldMethod = console[method];

    console[method] = (...args) => {
        const message = args.map(JSON.stringify).join(" ");
        var utterThis = new SpeechSynthesisUtterance(message);
        // utterThis.pitch = pitch.value;
        // utterThis.rate = rate.value;
        window.speechSynthesis.speak(utterThis);
        
        message(...args);
    };
};

consoleSpeak("log")
consoleSpeak("error")
consoleSpeak("warn")


console.log("This is a console log in javascript")