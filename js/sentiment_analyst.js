class SentimentAnalyst {
  constructor() {
    this.analyzer = new Sentiment();
  }

  analyze(input) {
    const result = this.analyzer.analyze(input);
    return result.score;
  }
}
/* This JavaScript file defines the SentimentAnalyst class that uses the Sentiment library to analyze the sentiment of a given input string. The analyze() method takes a string input and returns a score between -1 and 1, where -1 indicates a negative sentiment and 1 indicates a positive sentiment. This score can be used by the index.js file to determine an appropriate facial expression and response for the AI therapist. */
