let barCharts = [];
let horizontalBarCharts = [];
let stackedBarCharts = [];
let lineGraph = [];
let data;
let cleanData = [];
let numRows;
let fillColours = [];
const canvasWidth ="2900";
const canvasHeight ="2900";

let fontRegular;
let fontBold;

function preload() {
  data = loadTable("data/HIS09.20240217T000239.csv", "csv", "header");
  fontBold = loadFont('Fonts/Montserrat-Bold.ttf');
  fontThin = loadFont('Fonts/Montserrat-Thin.ttf');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background("#24263d");
  
 
  // Text(cleanData[1].Age_Group,this.xPos,this.yPos)

  numRows = data.rows.length;
  for (let i = 0; i < numRows; i++) {
   cleanData.push(data.rows[i].obj);
  }

  let bothSexesData = cleanData.filter(row => row.Sex === "Both sexes");
  let male = cleanData.filter(row => row.Sex === "Male");
  let female = cleanData.filter(row => row.Sex === "Female");


// console.log(male)


  
let lineGraph01 = {
    
  data: bothSexesData,
  chartHeight: 500,
  chartWidth: 600,

  xPos: 900,
  yPos: 100,


  
  axisLineColour: "#fff9ff",
  barWidth: 25,
  barFill: "#ca7ccf",
  lineAxisThickness: 3,
  numTicks: 9,
  rounding: false,
  decimal: 0,
  tickGap: 5,
  textColour:"#E1A6FD",
  fillColours: ["#F3E3FB","#ECCBFC","#E1A6FD","#D47FFD","#C756FD"],
  showValue:true,
// text
  valueTextSize:14,
  titleSize: 30,
  chartTitle:"% of all people who smoke",
  xLabelName: "Age Group",
  yValue: "VALUE",

}
  let barChart01 = {
    
    data: female,


    chartHeight: 500,
    chartWidth: 600,
  
    xPos: 1000,
      yPos: 850,
    
    axisLineColour: "#fff9ff",
    barWidth: 25,
    barFill: "#ca7ccf",
    lineAxisThickness: 3,
    numTicks: 9,
    rounding: false,
    decimal: 0,
    tickGap: 5,
    textColour:"#E1A6FD",
    fillColours: ["#F3E3FB","#ECCBFC","#E1A6FD","#D47FFD","#C756FD"],

    showValue:true,
// text
    valueTextSize:14,
    titleSize: 30,
    chartTitle:"% of all people who smoke",
    xLabelName: "Age Group",
    yValue: "VALUE",

  }

  let barChart02 = {
    
    data: male,
    chartHeight: 600,
    chartWidth: 800,

    xPos: 1000,
    yPos: 1700,

    
    axisLineColour: "#fff9ff",
    barWidth: 25,
    barFill: "#ca7ccf",
    lineAxisThickness: 3,
    numTicks: 9,
    rounding: true,
    decimal: 0,
    tickGap: 5,
    textColour:"#E1A6FD",
    fillColours: ["#F3E3FB","#ECCBFC","#E1A6FD","#D47FFD","#C756FD"],

    showValue:true,
// text
    valueTextSize:14,
    titleSize: 30,
    chartTitle:"% of all people who smoke",
    xLabelName: "Age Group",
    yValue: "VALUE",

  }

let horizontalBarchart01 = {
    
  data: male,
  chartHeight: 500,
  chartWidth: 600,

  xPos: 100,
  yPos: 1750,

  
  axisLineColour: "#fff9ff",
  barWidth: 25,
  barFill: "#ca7ccf",
  lineAxisThickness: 3,
  numTicks: 9,
  rounding: false,
  decimal: 0,
  tickGap: 5,
  textColour:"#E1A6FD",
  fillColours: ["#F3E3FB","#ECCBFC","#E1A6FD","#D47FFD","#C756FD"],
  showValue:true,
// text
  valueTextSize:14,
  titleSize: 30,
  yValue: "VALUE",

  xLabelName: "Age Group",
  // chartType: "full"
  
}

let horizontalBarchart02 = {
    
  data: female,
  chartHeight: 500,
  chartWidth: 600,

  xPos: 100,
  yPos: 850,

  
  axisLineColour: "#fff9ff",
  barWidth: 15,
  barFill: "#ca7ccf",
  lineAxisThickness: 3,
  numTicks: 9,
  rounding: false,
  decimal: 0,
  tickGap: 5,
  textColour:"#E1A6FD",
  fillColours: ["#F3E3FB","#ECCBFC","#E1A6FD","#D47FFD","#C756FD"],
  showValue:true,
// text
  valueTextSize:14,
  titleSize: 30,
  yValue: "VALUE",

  xLabelName: "Age Group",
  // chartType: "full"
  
}

let stackedBarchart01 = {
    
  data: bothSexesData,
  chartHeight: 500,
  chartWidth: 600,

  xPos: 300,
  yPos: 850,

  
  axisLineColour: "#8481e6",
  barWidth: 25,
  barFill: "#ff0000",
  lineAxisThickness: 3,
  numTicks: 9,
  rounding: false,
  decimal: 0,
  tickGap: 5,
  textColour:"#E1A6FD",
  fillColours2: ["#e8b715","#dbc51f","#eddf77","#f5edae","#fff9cc"],
  fillColours: ["#C756FD","#D47FFD","#ECCBFC","#E1A6FD","#F3E3FB"],
  avgValue:true,

// text
  valueTextSize:14,
  titleSize: 30,
  xLabelName: "Age Group",
  yValues: [male,female],
  chartTitle:"% of all smokers by Age Group",
  legendXAxis:0,
  legendYAxis:130,
  legendPadding:30
  
}




  lineGraph.push(new LineGraph(lineGraph01));
  barCharts.push(new Barchart(barChart01));
  horizontalBarCharts.push(new HorizontalBarChart(horizontalBarchart01));
  barCharts.push(new Barchart(barChart02));
  horizontalBarCharts.push(new HorizontalBarChart(horizontalBarchart02));
  stackedBarCharts.push(new StackedBarChart(stackedBarchart01));


 
}


function draw() {
  stackedBarCharts.forEach(bar => bar.render())
  barCharts.forEach(bar => bar.render())
  horizontalBarCharts.forEach(bar => bar.render())
  lineGraph.forEach(bar => bar.render())


}
 