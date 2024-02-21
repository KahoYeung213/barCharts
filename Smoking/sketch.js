let barCharts = [];
let horizontalBarCharts = [];
let stackedBarCharts = [];
let data;
let cleanData = [];
let numRows;
let fillColours = [];
const canvasWidth ="1900";
const canvasHeight ="1900";

let fontRegular;
let fontBold;

function preload() {
  data = loadTable("data/HIS09.20240217T000239.csv", "csv", "header");
  fontBold = loadFont('Fonts/Montserrat-Bold.ttf')
  fontThin = loadFont('Fonts/Montserrat-Regular.ttf')
}

function setup() {
  createCanvas(canvasWidth, canvasHeight)
  background("#24263d")
 
  // Text(cleanData[1].Age_Group,this.xPos,this.yPos)

  numRows = data.rows.length
  for (let i = 0; i < numRows; i++) {
   cleanData.push(data.rows[i].obj);
  }

  let bothSexesData = cleanData.filter(row => row.Sex === "Both sexes");
  let male = cleanData.filter(row => row.Sex === "Male");
  let female = cleanData.filter(row => row.Sex === "Female");
console.log(male)


// console.log(male)


  

  let barChart01 = {
    
    data: female,
    chartHeight: 500,
    chartWidth: 600,

    xPos: 800,
    yPos: 650,

    
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
  yPos: 650,

  
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

let stackedBarchart01 = {
    
  data: bothSexesData,
  chartHeight: 500,
  chartWidth: 600,

  xPos: 300,
  yPos: 650,

  
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
  xLabelName: "Age Group",
  yValues: [male,female],
  
}

  barCharts.push(new Barchart(barChart01));
  horizontalBarCharts.push(new HorizontalBarChart(horizontalBarchart01));
  stackedBarCharts.push(new StackedBarChart(stackedBarchart01));


 
}


function draw() {
  barCharts.forEach(bar => bar.render())
  horizontalBarCharts.forEach(bar => bar.render())
  stackedBarCharts.forEach(bar => bar.render())

}
 