class TextToSpeech {
  constructor() {
    this.synthesizer = window.speechSynthesis;
  }

  speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    this.synthesizer.speak(utterance);
  }

  stop() {
    this.synthesizer.cancel();
  }
}

/* This JavaScript file defines the TextToSpeech 
class that uses the built-in Web Speech API to 
convert text to speech. The speak() method takes 
a string input and synthesizes it into speech, 
which is played through the user's device 
speakers. The stop() method cancels any currently
playing speech. This class can be used by the 
index.js file to allow the AI therapist to speak 
its response messages to the patient. */
