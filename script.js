var wrapperEle = document.body.querySelector(".wrapper");
var refreshPage = document.querySelector(".submit");

var gasCost = Number(prompt("What is the price of a gallon of gas?"));
var YearMiles = Number(prompt("About how many miles do you drive in a year?"));


function MPGrating(YearMiles, gasCost, MPG) {
  
  document.write(

   "<p>If you were driving a car for "+YearMiles+" MIles with a MPG rating of "+MPG+" for "+YearMiles+" miles per year at $"+gasCost+" a gallon would cost $" + (YearMiles / MPG) *gasCost);
}

MPGrating(YearMiles, gasCost, "12");
MPGrating(YearMiles, gasCost, "17");
MPGrating(YearMiles, gasCost, "26");
MPGrating(YearMiles, gasCost, "29");