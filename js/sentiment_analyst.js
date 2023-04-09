class SentimentAnalyst {
  constructor() {
    this.analyzer = new Sentiment();
  }

  analyze(input) {
    const result = this.analyzer.analyze(input);
    return result.score;
  }
}
