class StackedBarChart {
  constructor(obj){
    this.data = obj.data;


// Chart position
    this.chartWidth = obj.chartWidth;
    this.chartHeight = obj.chartHeight;
    this.xPos=obj.xPos;
    this.yPos= obj.yPos;
// Bar
    this.barFill = obj.barFill
    this.barWidth = obj.barWidth;
// Chart Line and Labels
    this.lineAxisThickness = obj.lineAxisThickness
    this.numTicks = obj.numTicks
    this.axisLineColour = obj.axisLineColour;
    
    this.tickGap = obj.tickGap,
    this.decimal = obj.decimal
    this.rounding = obj.rounding
    this.fillColours = obj.fillColours
    this.fillColours2 = obj.fillColours2
    this.avgValue = obj.avgValue

    this.valueTextSize = obj.valueTextSize
    this.titleSize = obj.titleSize
    this.yValues = obj.yValues;
    this.xLabelName = obj.xLabelName;
    this.chartTitle = obj.chartTitle
    this.showValue = obj.showValue
    this.textColour = obj.textColour
// Scaling

this.maxValue = 0;

for (let i = 0; i < this.data.length; i++) {
  let value = parseInt(this.data[i].VALUE);
  if (!isNaN(value) && value > this.maxValue) {
    this.maxValue = value;
  }
}

    this.scale = (this.chartHeight / this.maxValue);
    console.log(this.maxValue)
    // console.log(this.data[1].Sex)
  }



  render(){
    // if max value / numticks = 0 stop, else add 1 to max value
    if (this.rounding) {
      let remainder = this.maxValue % this.numTicks;
      if (remainder !== 0) {
        let increment = this.numTicks - remainder;
        this.maxValue += increment;
      }
      console.log(this.scale)
    }


    stroke(this.axisLineColour)
    translate(this.xPos,this.yPos);
    push()
    noStroke();

    textSize(this.titleSize)
    fill(this.textColour)
    text(this.data[1].Sex,this.chartWidth/2,-this.chartHeight-30)
    pop()
    push()
   
    stroke(this.fillColours)
    line(0,0,0,-this.chartHeight);
    line(0,0,this.chartWidth,0)
    pop()
// Y axis ticks and numbers


    for (let i = 0; i <= this.numTicks; i++) {
      push()
      translate(0, i * (-this.chartHeight / this.numTicks));
      line(0, 0, -10, 0)
      pop();

      textSize(this.valueTextSize)
      textFont(fontThin)
      push()
      fill(this.textColour);
      textAlign(RIGHT, CENTER);
      translate(0, i * (-this.chartHeight / this.numTicks))
      let tickGap = this.maxValue/this.numTicks

      // fixes the decimals
      let yValue = (tickGap*i).toFixed(this.decimal)

      noStroke();

      text(yValue, -15, 0);
      
      pop();

  }
// bars                                       
    let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length+1)
    push()
    translate(gap,0);

    for (let i = 0; i < this.data.length; i++) {
      push();
      let avgHeight = 0; // Initialize average height
      for (let j = 0; j < this.yValues.length; j++) {
        let barHeight = (-this.data[i].VALUE + this.yValues[j][i].VALUE * -this.scale / this.yValues.length);
        // Set fill color for top layer bars
        if (j === 0) {
          fill(this.fillColours[i % this.fillColours.length]);
        } else {
          fill(this.fillColours2[i % this.fillColours2.length]);
        }
        rect(0, 0, this.barWidth, barHeight);
        avgHeight += barHeight; // Accumulate the heights
        translate(0, barHeight);
      }
      avgHeight /= this.yValues.length; // Calculate average height

      stroke(255); // Set line color
        if(this.avgValue){
          fill(255,0,0)
          ellipse(this.barWidth/2, -avgHeight, 10, 10);
        }
      pop();
    
    
    

    //  value on top of bars
     if(this.showValue) {
      text([this.data[i].VALUE],0,(-this.data[i][this.yValues]),)
     }

     translate(gap + this.barWidth,0)
     push()
     angleMode(DEGREES)
     rotate(20)
     fill(this.fillColours[i % this.fillColours.length]);
     textAlign(BOTTOM ,CENTER)
     noStroke();

     text(this.data[i][this.xLabelName], -this.barWidth, 30);
     pop()
    }
    pop()
  }

  
}




