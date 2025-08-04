//#region hoisting

// var myfun;

// console.log(x) //undefined
// var x=5;
// console.log(x)//5


// doany() //tesstt

// function doany(){
//     console.log("tesstt")
// }

// doany() //tesstt


// myfun()//eerooorrrr

// var myfun=function(){
//         console.log("tesstt 222")
// }
// myfun() //tesstt 222

//#endregion

//#region scope

//Global scope & function scope / local scope
// var x=10
// var y=90

// function myfun(){

//     var t=30
//     x=1
//     console.log(t+x+y)

//     function innerfunction(){
//         var z=80;
//         x=55
//         console.log("innerfunction",t+x+y+z)
//     }
//     // console.log(z) //error
//     console.log(x)
//     innerfunction()
// }
// // console.log(t+x+y) //error
// // innerfunction() //error
// myfun()

//#endregion

//#region Events

//#region inline event handlers V1

function clickBallHandeler() {
    console.log("click Ball Handeler()")
}

function mousemoveHandeler() {
    var img = document.querySelector("img")
    img.style.border = "5px solid red"
    console.log("mousemoveHandeler")
}

function mouseoutHandeler() {
    var img = document.querySelector("img")
    img.style.border = "5px solid green"
    console.log("mouseoutHandeler")
}


////////////////////////////////////////////////

function keydownHandeler() {
    console.log("keydownHandeler")
}
function keyupHandeler() {
    var fname = document.querySelector("#fName")
    fname.style.backgroundColor = "red"
    console.log("keyupHandeler")
}


function focusHandeler() {
    var fname = document.querySelector("#fName")
    fname.style.backgroundColor = "green"
    console.log("focusHandeler")
}
function blurHandeler() {
    var fname = document.querySelector("#fName")
    fname.style.backgroundColor = "#FFF"
    console.log("blurHandeler")

}


function getDataHandeler() {
    var fname = document.querySelector("#fName")
    var lname = document.querySelector("#lName")
    var mydiv = document.querySelector("#mydiv")

    console.log(fname.value)
    console.log(lname.value)

    mydiv.textContent = `welcome ${fname.value} ${lname.value}`

}

function submitHandler() {
    console.log("submitHandler")
}
function resetHandler() { console.log("resetHandler") }











//#endregion

//#region Traditional event handlers V2

// var fname = document.querySelector("#fName")
// var lname = document.querySelector("#lName")
// var mydiv = document.querySelector("#mydiv")
// var getdateBtn = document.querySelector("#getdateid")

// fname.onkeyup = function (e) {
//     console.log(e)
//     console.log(this)
//     console.log(e.target)
//     console.log("onkeyup handler v2")

//     this.style.backgroundColor = "red"
// }
// fname.onkeydown = function () {
//     console.log("onkeydown handler v2")
// }

// getdateBtn.onclick = getDataHandeler

// mydiv.onmousemove=function(e){
//     console.log(e)
//     this.textContent=`X : ${e.offsetX} , Y : ${e.offsetY}`
//     this.style.backgroundColor=
//     `rgb(${e.offsetX},${e.offsetY},100)`

// }

//#endregion

//#region addEventListener

// function clickbtn1(e){console.log("clc1")}
// function clickbtn2(){console.log("clc2")}

// var btn = document.querySelector("#getdateid")

// btn.onclick=clickbtn1;
// btn.onclick=clickbtn2;

// btn.addEventListener("click",clickbtn1)
// btn.addEventListener("click",clickbtn2)
// btn.addEventListener("click",function(e){
//     console.log("clc3")
//     console.log(e)
//     console.log(e.target)
//     console.log(this)
// })

// var fname=document.querySelector("#fName")
// fname.addEventListener("keydown",function(e){
//     console.log(e)
//     if(e.keyCode>=65&&e.keyCode<=90){
//         console.log("words")
//     }else{
//         e.preventDefault();
//         console.log("number")
//     }
// })

//#endregion

//#region Select

// var selectlist=document.querySelector("#selectlist")
// var btnselect=document.querySelector("#btnselect")
// var showdiv=document.querySelector("#mydiv")


// btnselect.addEventListener("click",function(){
//     // console.dir(selectlist)
//     // console.log(selectlist.length)
//     // console.log(selectlist.selectedIndex)
//     // console.log(selectlist.options)

//     var index=selectlist.selectedIndex
//     var options=selectlist.options

//     console.log("selected item",options[index])
//     console.log("is selected ",options[index].selected)

//     console.log("selected value",options[index].value)
//     console.log("selected text",options[index].text)


//     for(var i=0;i<options.length;i++){
//         if(options[i].selected){
//             console.log(options[i].text)
//         }
//     }

// })

//#endregion

//#region capturing and bubbling

// var div1 = document.querySelector("#div1")
// var div2 = document.querySelector("#div2")
// var div3 = document.querySelector("#div3")

// var body = document.querySelector("body")

// document.querySelectorAll("*")


// div1.addEventListener("click",
//     function () { console.log("div 1") })
// div2.addEventListener("click",
//     function (e) { console.log("div 2")
//         e.stopPropagation()
//      })
// div3.addEventListener("click",
//     function () { console.log("div 3") })

// body.addEventListener("click",
//     function () { console.log("body") })


// div1.addEventListener("click",
//     function(){console.log("div 1")},{capture:true})
// div2.addEventListener("click",
//     function(){console.log("div 2")},{capture:true})
// div3.addEventListener("click",
//     function(){console.log("div 3")},{capture:true})

// body.addEventListener("click",
//     function(){console.log("body")},{capture:true})

//#endregion

//#region event delegation

// var lis=document.querySelectorAll("li")
// for(var i=0;i<lis.length;i++){
//     lis[i].addEventListener("mousemove",function(e){
//         console.log(e.target)
//         console.log(this)
//         this.style.backgroundColor="red"
//     })

//         lis[i].addEventListener("mouseout",function(e){
//         console.log(e.target)
//         console.log(this)
//         this.style.backgroundColor="#FFF"
//     })
// }


var ull=document.querySelector("ul")
ull.addEventListener("mousemove",function(e){
    // console.log(e.target)
    // console.log(this)
    e.target.style.backgroundColor="#F00"

})

ull.addEventListener("mouseout",function(e){
 
    e.target.style.backgroundColor="#FFF"

})
//#endregion

