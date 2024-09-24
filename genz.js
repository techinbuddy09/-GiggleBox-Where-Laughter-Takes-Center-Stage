let get = document.getElementById("get");

// Function to fetch the joke and play sound and voice
async function myFun() {
    let getting = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            accept: "application/json"
        }
    });

    // Fetch joke
    let joke = await getting.json();
    let data = joke.joke;

    // Update the HTML with the new joke
    get.innerHTML = data;

    // Log the joke in the console (for debugging)
    console.log(data);

    // Play sound when joke is generated
    playSound();

    // Speak the joke out loud with a witty tone
    speakJoke(data);
}

// Function to play sound effect when a joke is generated
function playSound() {
    let audio = new Audio(''); // Replace with the path to your sound file
    audio.play();
}

// Function to speak the joke out loud using Web Speech API
function speakJoke(joke) {
    let speech = new SpeechSynthesisUtterance(joke);

    // Adjust the voice to sound more witty and playful
    speech.pitch = 1.8;  // Higher pitch for a more playful tone
    speech.rate = 1.2;   // Slightly faster speed to sound more lively
    speech.volume = 1;   // Full volume

    // Select a witty voice (if available in the system)
    let voices = speechSynthesis.getVoices();
    let wittyVoice = voices.find(voice => voice.name.includes("Fred") || voice.name.includes("Karen") || voice.name.includes("Zarvox"));
    
    if (wittyVoice) {
        speech.voice = wittyVoice;  // Set a playful voice, if found
    }

    speechSynthesis.speak(speech);  // Speak the joke
}

// Initial function call to get the first joke
myFun();
