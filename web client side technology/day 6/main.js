// /**
//  * object
//  * function
//  * BOM
//  */

// //#region  Object
// //object

// // var myobj={}  //litteral creation
// // var myobj2= new Object() //constractur creation

// var strudent={};
// var strudent2={};
// var student3={
//     name:"omar",
//     age:60
// }
// //dot notation

// strudent.name="ahmed"
// strudent.age=22
// strudent.address={
//     str:"test",
//     HN:14
// }
// strudent.isGratuated=false
// strudent.grades=[10,8,36,74]

// strudent.info=function(){}

// // console.log(strudent);

// //subscription
// strudent2["name"]="ahmed"
// strudent2["age"]=15
// strudent2["address"]={}
// strudent2["isGratuated"]=false

// // console.log(strudent2);


// // console.log(strudent.name)
// // console.log(strudent.age)

// // strudent.name="mohamed" //update
// // strudent.id=50 //add


// //object methods

// // console.log(strudent.hasOwnProperty("age"))
// // console.log(strudent.toString())

// //static methods
// // console.log("keys",Object.keys(strudent)) //array
// // console.log("keys",Object.values(strudent)) //array

// // for(var x in strudent){
// //     // console.log(x,strudent[x])
// //     // console.log(x + "=>" + strudent[x])
// //     if(x=="isGratuated"){
// //         console.log("cons")
// //     }
// // }
// // var arr=[1,2,3]
// // for (var key in arr) {
// //     console.log(arr[key])
// // }
// var arr=[1,2,6,9]
// var newarr=arr; //ref value


// var newstudent={} //ref value
// var newoo={}
// newstudent=strudent;
// // newstudent.name="omar"

// var x=JSON.stringify(strudent)
// newoo=JSON.parse(x);



// //#endregion

// //#region Functions
//     /**
//      * function type
//      * 1- function stetment
//      * 2- function expresstion
//      * 3- Arrow function => (ES6)
//      * 4-anonymaous function 
//      * 5- call back function
//      * 
//      * 
//      * featuers
//      * 1- function can return function
//      * 2-pass function to function
//      * 3- aasgin function to varaible =>function expresstion
//      * 4-assgin function to property
//      */

//     //1-function stetment
//     // name is requers , strat with function keyword

// // function funcname(/**parameters */){
// //     //body
// // }

// //any function in js will retuen value if you don't write return 
// // funcname(); //calling

// // function sum(n1,n2){
// //     return n1+n2
// // }
// // var sumValue=sum(1,2)
// // console.log(sumValue)


// // function test(n1,n2){
// //     if(n1>n2){
// //         return n1
// //     }else if(n2>n1){
// //         return n2
// //     }else{
// //         return n1;
// //     }

// //     //code path
// // }

// // function sum(){
// //     return 0
// // }
// // function sum(n1,n2){
// //     return n1+n2
// // }
// // function sum(n1,n2,n3){
// //     return n1+n2+n3
// // }
// // function sum(n1,n2,n3,n4){
// //     return n1+n2+n3+n4
// // }

// // // console.log(sum()) //NaN
// // // console.log(sum(1,2)) //NaN
// // // console.log(sum(1,2,3)) //NaN
// // // console.log(sum(1,2,3,4)) //10


// // /**
// //  * to prop
// //  * 1- this =>refer to caller object
// //  * 2- arguments => collection of all pased value (like array)
// //  *                  has length prop => loop
// //  */


// // function sum(){
// //     //  console.log(arguments)
// //     // console.log(x)
// //     // console.log(arguments.length)

// //     var total=0;
// //     for(var i=0;i<arguments.length;i++){
// //         total+=arguments[i]
// //     }
// //     console.log(total)
// // }

// // // sum(1,2,6,9,7,6)


// // //this => refer to caller object

// // // function funTest(){
// // //     console.log(this)
// // // }
// // // window.funTest(); //window object

// // var emplyee={
// //     id:10,
// //     name:"aly",
// //     age:20,
// //     info:function(){
// //         console.log("your nam is "+this.name+"and id is "+this.id);
// //         console.log(this);
// //     }
// // }

// // emplyee.info() //emplyee

// // //function expresstion 
// // // function sum(n1,n2){}
// // var sum=function(n1,n2){
// //     console.log(this)
// //     console.log(n1+n2)
// // }
// // sum(1,6)


// // var st1={
// //     name:"ahmed",
// //     age:22,
// //     address:"portsaid"
// // }
// // var st2={
// //     name:"sara",
// //     age:22,
// //     address:"alex"
// // }
// // // factory function

// // function student(_name,_age,_address){
// //     var obj={
// //         name:_name,
// //         age:_age,
// //         address:_address
// //     }

// //     return obj
// // }

// // var s1=student("ahmed",22,"portsaid")
// // var s2=student("sara",22,"alex")

// // //Constactur function

// // function Student(_name,_age,_address){
// //     this.name=_name
// //     this.age=_age
// //     this.address=_address
// // }

// // var s3=new Student("aly",15,"cairo")

// function sum1(x){
//     console.log( "form sum 1",x)
// }
// function sum2(x){
    
//     console.log( "form sum 2",x)
// }

// function dosomething(x,y,callbackfun){

//     var total=x+y
//     // sum1(sum);
//     // sum2(sum);
//     //do some thing
//     // do some thing
//    var isgt= callbackfun(total)
//    if(isgt){
//     //do
//    }

// }

// dosomething(1,3,sum1)
// dosomething(1,3,sum2)
// //#endregion


// var testArr=[500,15,100,-10,2,-20]

// function comparefun(a,b){
//     // if(a>b){
//     //     return 1
//     // }else if (a<b){
//     //     return -1
//     // }
//     // else{
//     //     return 0
//     // }

//     return a-b
// }

// console.log(testArr.sort())

// console.log(testArr.sort(comparefun))

// console.log(testArr.sort(function(a,b){a-b}))


















