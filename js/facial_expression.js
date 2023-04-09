class FacialExpression {
  constructor(imageUrl) {
    this.imageUrl = imageUrl;
  }

  display() {
    const facialExpressionDiv = document.getElementById('facial-expression');
    facialExpressionDiv.innerHTML = `<img src="${this.imageUrl}" alt="facial expression">`;
  }
}

const facialExpressions = {
  concern: new FacialExpression('images/concern.png'),
  surprise: new FacialExpression('images/surprise.png'),
  remorse: new FacialExpression('images/remorse.png'),
  empathy: new FacialExpression('images/empathy.png'),
  amusement: new FacialExpression('images/amusement.png'),
  encouragement: new FacialExpression('images/encouragement.png'),
  camaraderie: new FacialExpression('images/camaraderie.png'),
  frustration: new FacialExpression('images/frustration.png'),
  focus: new FacialExpression('images/focus.png'),
  seriousness: new FacialExpression('images/seriousness.png'),
  anger: new FacialExpression('images/anger.png')
};
/* 
This JavaScript file defines the FacialExpression 
class that takes an image URL as a parameter and 
has a display() method to display the image in 
the web page. It also creates an object 
facialExpressions that stores instances of the 
FacialExpression class for each of the 11 facial 
expressions that MindMate can display. Note that 
the images/ directory is assumed to exist and 
contain the necessary image files for the facial 
expressions.
*/
