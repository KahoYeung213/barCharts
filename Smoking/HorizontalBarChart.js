class HorizontalBarChart {
  constructor(obj) {
    this.data = obj.data;


    // Chart position
    this.chartWidth = obj.chartWidth;
    this.chartHeight = obj.chartHeight;
    this.xPos = obj.xPos;
    this.yPos = obj.yPos;
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

    this.valueTextSize = obj.valueTextSize
    this.titleSize = obj.titleSize
    this.yValue = obj.yValue;
    this.xLabelName = obj.xLabelName;
    this.chartTitle = obj.chartTitle
    this.showValue = obj.showValue
    this.textColour = obj.textColour
    // Scaling
    this.maxValue = max(this.data.map(d => d[this.yValue]));
    this.scale = this.chartWidth / this.maxValue;

    // this.chartType = obj.chartType
  }



  render() {
    // Chart Header
    push()
    textFont(fontBold)
    textSize(this.titleSize)
    noStroke()
    textAlign(CENTER, CENTER)
    fill(this.textColour)
    text([this.chartTitle], canvasWidth / 2, 20)

    pop()


    // if max value / numticks = 0 stop, else add 1 to max value
    if (this.rounding) {
      let remainder = this.maxValue % this.numTicks;
      if (remainder !== 0) {
        let increment = this.numTicks - remainder;
        this.maxValue += increment;
      }
      this.scale = this.chartWidth / this.maxValue;
    }


    stroke(this.axisLineColour)
    push()
    strokeWeight(this.lineAxisThickness)
    translate(this.xPos, this.yPos);
    push()
    textSize(this.titleSize)
    noStroke()
    fill(this.textColour)
    text(this.data[1].Sex, this.chartHeight / 2, -this.chartHeight - 50)
    pop()
    line(0, -this.chartHeight, this.chartWidth, -this.chartHeight);
    line(0, 0, 0, -this.chartHeight)

    // Y axis ticks and numbers


    for (let i = 0; i <= this.numTicks; i++) {
      push();
      translate(i * (this.chartWidth / this.numTicks), -this.chartHeight);
      line(0, 0, 0, -10); // Draw horizontal ticks
      pop();

      push();
      noStroke();
      fill(this.textColour);
      textAlign(CENTER, TOP);
      translate(i * (this.chartWidth / this.numTicks), 10);
      let tickGap = this.maxValue / this.numTicks;

      // Fix decimals
      let yValue = (tickGap * i).toFixed(this.decimal);
      text(yValue, 0, -this.chartHeight - 40);
      pop();
    }


    // bars 
    push()
    let gap = (this.chartHeight - (this.data.length * this.barWidth)) / (this.data.length+1)
    translate(0, gap);
    for (let i = 0; i < this.data.length; i++) {

      let yPos = i * (this.barWidth + gap) + gap;

      translate(0, yPos);

      push()
      fill(this.fillColours);
      noStroke()
      textAlign(CENTER, CENTER)
      textSize(this.valueTextSize);
      textFont(fontThin);
      translate(0, (gap + this.barWidth) - (this.chartHeight) - this.barWidth)
      angleMode(DEGREES)
      rotate(-20)
      text(this.data[i][this.xLabelName], -this.xPos, -10, this.xPos)
      pop()

      noStroke();
      fill(this.fillColours[i % this.fillColours.length]);
      rect(0, -this.chartHeight, this.data[i][this.yValue] * this.scale, this.barWidth);
      if (this.showValue) {
        text([this.data[i].VALUE], this.data[i][this.yValue] * this.scale + 10, (-this.chartHeight) + this.barWidth / 2)
      }

      translate(0, -yPos);
    }
    pop()

  }


}




