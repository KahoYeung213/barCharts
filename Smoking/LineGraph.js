class LineGraph {
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
  
      this.valueTextSize = obj.valueTextSize
      this.titleSize = obj.titleSize
      this.yValue = obj.yValue;
      this.xLabelName = obj.xLabelName;
      this.chartTitle = obj.chartTitle
      this.showValue = obj.showValue
      this.textColour = obj.textColour
  // Scaling
      this.maxValue = max(this.data.map(d => d[this.yValue]));
      this.scale = this.chartHeight / this.maxValue;
  
      }
  
  
  
    render(){
     
      
      // if max value / numticks = 0 stop, else add 1 to max value
      if (this.rounding) {
        let remainder = this.maxValue % this.numTicks;
        if (remainder !== 0) {
          let increment = this.numTicks - remainder;
          this.maxValue += increment;
        }
        this.scale = this.chartHeight / this.maxValue;
      }
  
  
      stroke(this.axisLineColour)
      push()
      strokeWeight(this.lineAxisThickness)
      translate(this.xPos,this.yPos);
      push()
      textSize(this.titleSize)
      noStroke()
      fill(this.textColour)
      text(this.data[1].Sex,this.chartWidth/2,-this.chartHeight-30)
      pop()
      line(0,0,0,-this.chartHeight);
      line(0,0,this.chartWidth,0)
   
  // Y axis ticks and numbers
  
  
      for (let i = 0; i <= this.numTicks; i++) {
        push()
        translate(0, i * (-this.chartHeight / this.numTicks));
        line(0, 0, -10, 0)
        pop();
  
        textSize(this.valueTextSize)
        textFont(fontThin)
        push()
        noStroke();
        fill(this.textColour);
        textAlign(RIGHT, CENTER);
        translate(0, i * (-this.chartHeight / this.numTicks))
        let tickGap = this.maxValue/this.numTicks
  
        // fixes the decimals
        let yValue = (tickGap*i).toFixed(this.decimal)
        text(yValue, -15, 0);
        pop();
  
    }
  // bars                                       
      let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length+1)
      translate(gap,0);

  for (let i = 0; i < this.data.length - 1; i++) {
  noStroke();
  fill(this.fillColours[i % this.fillColours.length]);

  ellipse(0, -this.data[i][this.yValue] * this.scale, 10, 10);

  push()
  stroke(this.axisLineColour);
  strokeWeight(1)
  line(0, -this.data[i][this.yValue] * this.scale, this.barWidth+gap, -this.data[i + 1][this.yValue] * this.scale);
  pop()
// console.log(this.barWidth)
   
      if(this.showValue) {
        text([this.data[i].VALUE],10,(-this.data[i][this.yValue]*this.scale))
       }
  
       translate(gap + this.barWidth,0)
       push()
       angleMode(DEGREES)
       rotate(20)
       fill(this.fillColours[(this.fillColours.length + i) % this.fillColours.length])
       textAlign(BOTTOM ,CENTER)
       text(this.data[i][this.xLabelName], -this.barWidth, 30);
       pop()
      }
      pop()
    }
  
    
  }
  
  
  
  
  