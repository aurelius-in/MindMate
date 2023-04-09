// speech_to_text.js

// Check if the user's browser supports the Web Speech API
if (!('webkitSpeechRecognition' in window)) {
  alert("Your browser doesn't support speech recognition.");
} else {
  // Create a new instance of the SpeechRecognition object
  const recognition = new webkitSpeechRecognition();
  
  // Set some properties of the recognition object
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';
  
  // Define a function to handle the recognition result
  recognition.onresult = function(event) {
    const result = event.results[0][0].transcript;
    
    // Do something with the text result
    console.log('Speech input: ' + result);
  }
  
  // Define a function to handle errors
  recognition.onerror = function(event) {
    console.log('Speech recognition error occurred: ' + event.error);
  }
  
  // Define a function to start the recognition process
  function startRecognition() {
    recognition.start();
    console.log('Speech recognition started.');
  }
}

/*

This code creates a new instance of the 
webkitSpeechRecognition object and defines 
some properties, such as the language to use 
and whether to return interim results. It also 
defines a function to handle the recognition 
result and another function to start the 
recognition process. Once the user grants 
permission to use the microphone, the 
startRecognition function can be called to 
begin the speech-to-text conversion.

*/
