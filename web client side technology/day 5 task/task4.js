var numbers =[];

for(var i = 0; i<5; i++){
  var input;
  while (true){
    input = prompt("enter number: ");
    if (input !== null && !isNaN(input)){
      numbers.push(Number(input));
      break;
    }
  }
}

document.writeln("<h1 >you entered the values: " + numbers + "</h1>");


var ascending =[...numbers].sort((a, b) => a - b);
document.writeln("<h1>your sorted ascending values" + ascending  + "</h1>");


var descending =[];
var temp=[...numbers];
while(temp.length>0){
  var max = temp[0];
  var maxIndex=0;
  for (let i = 1; i<temp.length; i++) {
    if(temp[i] > max){
      max = temp[i];
      maxIndex = i;
    }
  }
  descending.push(max);
  temp.splice(maxIndex,1);
}
document.writeln("<h1>ur values after being sorted descending " + descending + "</h1>");