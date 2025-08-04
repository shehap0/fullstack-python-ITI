//#region String
// var str="welcome to javaScript"; //litteral creation 
// var str2 = new String("hello")  //constractour creation

// console.log(str)
// console.log(str2)

// console.log(str.length) //probirty

/**
 * index
 * 
 * start from 0 
 * 0123456    20
 */
//methods
// console.log(str.charAt(11));
// console.log(str.indexOf("j"));
// console.log(str.indexOf("t",10));
// console.log(str.lastIndexOf("S"))

// console.log(str.slice(0,9))
// console.log(str.slice(9,19))

// console.log(str.slice(-10))
// console.log(str.slice(-10,-6))

// console.log(str.substring(0,7))
// console.log(str.slice(0,7))

// console.log(str.substring(7,0)) //swap
// console.log(str.slice(7,0))

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// console.log(str)
// console.log(str.trimStart())
// console.log(str.trimEnd())
// console.log(str.trim())

//#endregion

//#region Number
var num = 125.74879954;
// var num2 =new Number(554655)
// console.log(num);


// console.log("toPrecision =>",num.toPrecision(5));

// console.log("toFixed(5) =>",num.toFixed(5));
// console.log("toFixed =>",num.toFixed());

// console.log("toString =>",num.toString(10))

// console.log("toLocaleString =>",num.toLocaleString("ar-EG"))

//static methods
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

//using numers for casting
// convert type to another type 

//implicite cast => corection
// explicite cast  => (number , +)

// console.log(Number(null))
// console.log(Number(undefined))
// console.log(Number(false))
// console.log(Number(true))
// console.log(Number("55"))
// console.log(5 + +"5") //=>10




//#endregion

//#region  Date
//Date
/**
 * GET                SET           TO
 * getFullYear()    setYear()       tostring()
  * 
 */

var mydate= new Date();
// console.log(mydate)

// console.log(mydate.getFullYear());
// console.log(mydate.getYear()+1900); //start from 1900

// console.log(mydate.getMonth()) //start from 0
// console.log(mydate.getDay()) //start from 0

// console.log(mydate.getDate()) 
// console.log(mydate.getHours()) 
// console.log(mydate.getMinutes()) 

// mydate.setFullYear(2020)
// mydate.setMonth(11)
// console.log(mydate)

// var newdate=new Date(2003,11,1)
// console.log(newdate)

// console.log(mydate.toLocaleDateString("ar-Eg"))
// console.log(mydate.toLocaleDateString("ar-SA"))
// console.log(mydate.toISOString())
// console.log(mydate.toUTCString())
//#endregion


//#region Boolean

// var t=true;
// var f=false;

// var ff=new Boolean()
// var f=new Boolean();
// f=new Boolean(0)
//  f=new Boolean(null)
//  f=new Boolean(undefined)
//  f=new Boolean("")
//  f=new Boolean(false)
//  f=new Boolean("anytest")

// console.log(f)



//#endregion

//#region Math

// var x=456.67665

// console.log(Math.PI)
// console.log(Math.sqrt(25))
// console.log(Math.abs(-25-100))

// console.log(Math.round(x))

// console.log(Math.ceil(x))
// console.log(Math.floor(x))

// console.log(Math.random()) 

// console.log((Math.random()*100).toFixed())



//#endregion


//#region  Array
//  var arr =[];
// //  var arr2 =[1,2,3,4];
// //  var arr3 =new Array(3);
// //  var arr4 =new Array(1,2,3,4);

// //  arr[0]=5
// //  arr[1]=6  //not recommend
// //  arr[100]=6

// //add item to array

// // add at the end of array 

// arr.push(1)
// arr.push(2)
// arr.push(6)
// arr.push("ahmed")
// arr.push(null)
// arr.push(false)
// arr.push([1,2,3])
// arr.push(8)

// //add at the start of array
// arr.unshift("start")
// arr.unshift("62478")
// console.log(arr.length)
// console.log(arr)

//remove from array 
// at the end of array
// console.log(arr)
// console.log(arr.pop())
// console.log(arr.pop())
// console.log(arr.pop())
// console.log(arr)

//at the start from array
// console.log(arr)
// console.log(arr.shift())
// console.log(arr.shift())
// console.log(arr.shift())
// console.log(arr)


var myarr=[1,10,2,5,9,8,7,4,3]
// console.log(myarr.length)
// console.log(myarr.indexOf(99))
// myarr.splice(3,0,99)
// myarr.splice(6,0,66)

// console.log(myarr)
// myarr.splice(3,2)
// console.log(myarr)
// myarr.splice(1,3)
// console.log(myarr)

// console.log(myarr)
// myarr.splice(3,3,99,88,77)
// console.log(myarr)


// console.log(myarr.join("+"))
// console.log(myarr.sort()) //search


// for(var i=0;i<myarr.length;i++){
//     console.log(myarr[i])
// }


// function sum(n1,n2){
 
//     return n1+n2
// }



//#endregion
