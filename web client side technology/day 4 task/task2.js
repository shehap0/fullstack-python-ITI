var sum=0;
var n;

while(true){
    n=prompt("enter number");
    n = Number(n);
    if(n==0){
        break;
    }
    sum=sum+n;
}

alert("the total of numbers is: " + sum);