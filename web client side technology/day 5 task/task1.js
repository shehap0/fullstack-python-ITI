var arr=[];
for(i=0; i<3; i++) {
    var input=prompt("enter a number: ");
    if(input !=null && !isNaN(input)){
        arr.push(Number(input));
    }else{
        alert("pls enter only numbers");
        i--;
    }
}

var sum = arr[0]+arr[1]+arr[2];
var dif = arr[0] - arr[1] - arr[2];
var multi = arr[0] * arr[1] * arr[2];
var division = arr[0]/arr[1]/arr[2];


document.writeln("<h1> the sum is: "+ sum +"</h1>")
document.writeln("<h1> the difference is: "+ dif +"</h1>")
document.writeln("<h1> the multi is: "+ multi +"</h1>")
document.writeln("<h1> the divsion is: "+ division +"</h1>")