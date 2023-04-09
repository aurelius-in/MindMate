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
