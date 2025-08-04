var text;
while(true){
  text=prompt("enter a string:");
  if(text != null){
    break;
  }
}

var char;
while(true){
  char = prompt("enter a single char to count: ");
  if (char != null && isNaN(char)) {
    break;
  }
}

var count = 0;
for (var i = 0; i<text.length;i++){
  if (text[i] == char){
    count++;
  }
}

document.writeln("<h1>The character '" + char + "' appears " + count + " times in the "+ text+"</h1>");
