var name = "";
var birthYear = 0;

while(true){
    name=prompt("enter your name: ");
    if(name && isNaN(name)){
        break;
    }
}

while(true){
    birthYear=prompt("enter your birthyear:");
    birthYear=Number(birthYear);
    if(!isNaN(birthYear) && birthYear < 2010){
        break;
    }
}
var age = 2025-birthYear;
document.writeln("name: " + name + "<br>");
document.writeln("birth year: " + birthYear + "<br>");
document.writeln("age: " + age);