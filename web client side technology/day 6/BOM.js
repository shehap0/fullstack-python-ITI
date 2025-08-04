//BOM => Browser Object Model
// js in an object base lang

// window.alert();
// window.confirm();
// window.prompt();

// window.document.writeln()
var newpage
function opennewWindo(){
  newpage=  open("newpage.html","","width=200,height=200")
}

function closewindo(){
    newpage.close()
}
function movebyNewPage(){
    newpage.moveBy(200,200)
    newpage.focus()
    // newpage.document.writeln()
}
function moveToNewpage(){
    newpage.moveTo(200,200)
    newpage.focus()
}

//timing functions
// setTimeout
// setInterval

// setTimeout(function(){
//     alert("hi from my page")
// },5000)


// setInterval(function(){
//     alert("hi from my page")

// },2000)

// function dosomesing(){
//    alert("hi from my page")
// }
// var intervalId;
// function startInterval(){
//    intervalId= setInterval(dosomesing,3000)
// }
// function stopInterval(){
//     clearInterval(intervalId)
// }

// for (var key in navigator){
//     document.writeln(key +" : "+ navigator[key]+"<br>")
// }
// for (var key in location){
//     document.writeln(key +" : "+ navigator[key]+"<br>")
// }

