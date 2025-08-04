while(true){
  var input = prompt("enter the value of a cricle radius: ");
  if (input != null && !isNaN(input)) {
    var radius = Number(input);
    break;
  }
}

var area = Math.PI * radius * radius;
document.writeln("<h1>the area of the circle is: " + area+ "</h1>");


while(true){
  var secondinput=prompt("enter number to calc the square root: ");
  if(secondinput !=null && !isNaN(secondinput)){
    var value = Number(secondinput);
    break;
  }
}

var squareRoot = Math.sqrt(value);
document.writeln("<h1>the square root of " + value + " is: " + squareRoot + "</h1>");


while(true){
  var thirdinput=prompt("enter number to calc cos: ");
  if(thirdinput !=null && !isNaN(thirdinput)){
    var value2 = Number(thirdinput);
    break;
  }
}
var cos = Math.cos(value2);
document.writeln("<h1>The cos of " + value2 + " is: " + cos+ "</h1>");