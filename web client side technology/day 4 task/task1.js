var message = prompt("enter message to loop");

for(var i=1; i<=6 ; i++){
    var tag="h"+i;
    document.writeln("<"+ tag +">"+ message +"</"+ tag +">")
}