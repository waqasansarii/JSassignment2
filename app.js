                    // CHAPTER 21 -25
 
                    
// TASK 1

// var firstNam = prompt("Enter first name ")
// var lastNam = prompt("Enter last name ")
// var fulNam = firstNam +" "+ lastNam;
// alert(" Welcome " + fulNam);

// Task 2

// var mobNam = prompt("Enter your favourite mobile name : ")
// var mobChars = mobNam.length;
// var msg = " My favourite phone is : " + mobNam +"\n Length of string : " + mobChars;
// alert(msg) 

// Task 3

// var str = "Pakistani ";
// var index = str.indexOf("n");
// var fullMsg = "String : "+str + "\n index number of 'n' : "+index;
// alert(fullMsg);

// Task 4

// var greet = "Hello World ";
// var index = greet.lastIndexOf("l");
// var showMsg = "String: "+greet+"\n Last index of 'l' : "+ index;
// alert(showMsg);

// Task 5

// var nam = "Pakistani ";
// var char = nam.charAt("3");
// var msg = "String : "+ nam+"\n character at index 3: "+char
// alert(msg)

// Task 6

// var firstNam = prompt("Enter first name ")
// var lastNam = prompt("Enter last name ")
// var greet = "Welcome "
// var allMsg = firstNam.concat(" "+lastNam+" "+greet)
// alert(allMsg);

// Task 7

// var city = "Hyderabad ";
// var newCity = city.replace("Hyder","Islam");
// var fulMsg = "City: "+city+"\n after replacement: "+newCity;
// alert(fulMsg);

// Task 8

// var message = "Ali and Sami are best friends. They play cricket and football together ";
// var newMsg = message.replace(/and/g,"&")
// alert("message: "+ message+"\n after replacemant: "+newMsg)

// Task 9

// var msg = "472"
//  var check ="Type: " + typeof(msg)
//  var convrt = parseInt(msg)
//  var chk ="Type: " +typeof(convrt)
// alert("Value: "+msg+"\n"+check+ "\n" +"Value: " + convrt +"\n" +chk)

// Task 10

// var msg = prompt("Enter your name ")
// var newMsg = msg.toUpperCase();
// alert("User input: "+msg+"\n"+"Upper case: " +newMsg)

// Task 11

// var user = prompt("Enter your name ")
// var newUser = user.charAt(0).toUpperCase() + user.slice(1);
// alert("User input: "+user+"\n"+"Title case: "+newUser);

// Task 12
// var num = 35.11;
// var str = num.toString().split(".").join("");
// alert("Number: " + num+"\n "+"Result: " +str)

// Task 13

// var user = prompt("Enter user name ")
// var newUser = user;
// for(i=0; i<newUser.length ;i++){
//         ch =user.charAt(i)
//         if(!(ch>="a" && ch<="z") && !(ch>="A" && ch<="Z")){
//                 alert("Please enter valid username")
//         }else{
//                 alert("Correct")
//         }break
// }

// Task 14

// var a = ["cake", "apple", "pie", "cookie", "chips", "patties"]
// var srch = prompt("Enter item name ");
// var newSrch = srch.toLowerCase();
// if(a.indexOf(newSrch) !==-1){
//     alert("yes "+newSrch+" is availble " )
// }else {
//     alert("sorry "+newSrch+ " is not available")
// }

// Task 15
// var pass = prompt("Enter password")
// var num = ["1","2","3","4","5","6","7","8","9"]
// for(i=0;i<=pass.length; i++ ){
//         var ch = pass.charAt(i)
//     if(pass.length<6){
//         alert(prompt("please enter at least 6 character"))
//     }else if(ch>="0"&& ch<="9"){
//             alert(prompt("please enter valid password"))
//     }else{
//             alert(pass)
//     }
//     break

// } 



// Task 16

// var uni = "University of Karachi";
// var newUni = uni.split("").join("<br>")
// document.write(newUni)

// Task 17

// var user = prompt("Enter your name ")
// var user2 = (user[user.length-1])

// alert("User inpit : "+user+"\n"+"Last character of input : " +user2)

// Task 18

// var msg = " The quick brown fox jumps over the lazy dog  "
// var msg1 = msg.toLowerCase()
// var count = msg1.split("the").length-1;
// alert("Text : "+msg+"\n"+"There are "+count +" occurance(s) of word 'the' ");



            //    CHAPTER 25 - 30



// Task 1

// var num = +prompt("Enter a number")
// var num1 = Math.round(num);
// var num2 = Math.floor(num);
// var num3 = Math.ceil(num);
// var showAll = "Number : "+num+ "\n"+ "round off value : "+num1+"\n"+"floor value : "+num2+"\n"+"ceil value : "+num3;
// alert(showAll);

// Task 2

// var x = +prompt("Enter a negative number")
// var x1 = Math.round(x);
// var x2 = Math.floor(x)
// var x3 = Math.ceil(x)
// var msg = "Number : "+x+ "\n"+ "round off value : "+x1+"\n"+"floor value : "+x2+"\n"+"ceil value : "+x3;
// alert(msg)

// Tas 3
// var  num = -4;
// var num1 = Math.abs(num)
// alert("The absolute value of " + num +" is "+num1)

// Task 4

// var random = Math.random()*7;
// var floor = Math.floor(random)
// if(floor=="0"){
//     alert("random dice value : "+floor)
    
// }else if(floor=="1"){
//     alert("random dice value : "+floor)
// }else if(floor=="2"){
//     alert("random dice value : "+floor)
// }else if(floor=="3"){
//     alert("random dice value : "+floor)
// }else if(floor=="4"){
//     alert("random dice value : "+floor)
// }else if(floor=="5"){
//     alert("random dice value : "+floor)
// }else if(floor=="6"){
//     alert("random dice value : "+floor)
// }

// Task 5

// var x = Math.random()*2;
// var y = Math.ceil(x);
// var head = "Head";
// var tail = "Tail";
// if(y=="2"){
//     alert(y+"\n"+"random coin value : "+head)
// }else if(y=="1"){
//     alert(y+"\n"+"random coin value : "+tail)
// }

// Task 6

// var ran = Math.random()*101;
// var ceil = Math.ceil(ran);
// var msg = "random number between 1 and 100 : ";
// alert(msg+ceil)

// Task 7

// var weight = +prompt("Enter your age in kilogram ")
// var msg = "The weight of user is ";
// document.write(msg+weight+" kilograms.")

// Task 8

// var scrt = Math.random()*10;
// var ceil = Math.ceil(scrt);
// var store = ceil;
// var x = +prompt("Enter a number between 1 and 10")
// if(x==store){
//     alert(" congratulation ")
// }else{
//     alert("Try again")
// }


        //  CHAPTER 30 - 35



// TASK 1
// var now = new Date();
// document.write(now);        

// Task 2
// var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var month = date.getMonth();
// var name = monthNames[month]
// alert("Current month : " +name)

// Task 3

// var names = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var date = new Date();
// var day = date.getDay();
// var toDay = names[day];
// var day1 = toDay.slice(0,3)
// alert("Today is " +day1);

// Task 4

// var names = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var date = new Date();
// var day = date.getDay();
// var sunSat = names[day];
// if(sunSat==="Sunday"|| sunSat==="Saturday"){
//         alert("It's Fun day" )
// }else{
//         alert("It's "+sunSat)
// }

// Task 5

// var x = new Date();
// var dateGet = x.getDate();
// if(dateGet>=1 && dateGet<=15){
//         alert("First fifteen days of the month")
// }else{
//         alert("Last days of the month")
// }

// Task 6

// var date = new Date();
// var msDate = date.getTime();
// var mTime = msDate/(1000*60);
// var show = "Current date: "+date+"<br>" +"Elapsed milliseconds since january 1, 1970: "+msDate+"<br>" +"Elapsed minutes since january 1, 1970: "+mTime
// document.write(show)

// Task 7

// var time = new Date();
// var hour = time.getHours();
// if(hour>=0 && hour<=11){
//         alert("Its Am")
// }else{
//         alert("Its Pm")
// }

// Task 8

// var date = new Date();
// var laterDate = new Date("Dec 31 , 2020")
// alert("Later date : " + laterDate);

// Task 9

// var date = new Date()
// var date1 = new Date("June 18,2015");
// var day = date.getTime()
// var day1 = date1.getTime()
// var diff = date-date1
// var cnvrt = diff / (1000*60*60*24)
// var round = Math.round(cnvrt)
// alert(round+" days have passed since 1st Ramadan, 2015 ")

// Task 10

// var date = new Date("Jan 1,2020");
// var date1 = new Date();
// var x = date.getTime();
// var x1 = date1.getTime();
// var diff = date1-date;
// var sToDay = diff/ (1000*60);
// var floor = Math.floor(sToDay);
// var all = "On reference date "+date1 +",<br>"+floor+" seconds had passed since beginning of 2020";
// document.write(all);

// Task 11

// var date = new Date();
// var hour = date.getHours()
// var d = new Date();
// d.setHours(hour-1);
// alert("Current date : " +date+"\n"+"1 hour ago, it was "+d +"\n");

// Task 12

// var date = new Date();
// var x = date.getFullYear();
// var date2 = new Date();
// date2.setFullYear(x-100);
// alert("Current date : "+date+"\n"+"100 years back, it was "+date2);

// Task 13

// var age = +prompt("Enter your age ")
// var date = new Date();
// var year = date.getFullYear()
// var calc = year-age;
// var show = "Your age is "+age+"\n"+"Your birth year is ";
// alert(show+calc)

// Task 14

// var head = "<h1>K-Electric Bill</h1>"+"<br>"+"<br>";
// var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// var name = "Customer name : Abc Customer "+"<br>";
// var month = new Date();
// var cMonth =month.getMonth()
// var mGet ="Month : "+ monthNames[cMonth]+"<br>";
// var nUnit = 300
// var units = "Number of units : " +nUnit+"<br>";
// var perUnit = 9;
// var cUnit = "Charges per unit : "+perUnit+"<br>";
// var amount = nUnit*perUnit;
// var dueDate = "Net Amount Payable (within Due Date) : "+amount+"<br>"+"<br>";
// var cAfterDate = 250;
// var afterDate = "Late payment surcharges : "+cAfterDate+"<br>";
// var afDueDate = amount+cAfterDate;
// var gross = "Gross amount payable (after due date) : "+afDueDate;
// var showInOne =head+name+mGet+units+cUnit+dueDate+afterDate+gross
// document.write(showInOne)


                // CHAPTER 35 - 38


// TASK 1

// function time(){
//         var x = new Date()
//         alert(x)
// }
// time()

// Task 2

// function greet(){
//         var first = prompt("Enter first name");
//         var last = prompt("Enter last name")
//         alert("Welcome "+first+" "+last)
// }
// greet()


// Task 3

// function add(){
//         var x = +prompt("Enter a number ")
//         var y = +prompt("Enter second number")
//         return x+y;
// }
// alert(add())

// Task 4

// function calc(){
//         var num1 = +prompt("Enter first number")
//         var operator = prompt("Enter operator number")
//         var num2 = +prompt("Enter second number ")
//         if(operator=="+"){
//                 return num1+num2;
//         }else if(operator=="-"){
//                 return num1-num2;
//         }else if(operator=="*"){
//                 return num1*num2;
//         }else if(operator=="/"){
//                 return num1/num2
//         }else if(operator=="%"){
//                 return num1%num2
//         }
        
// }
// alert(calc());

// Task 5

// function square(a,b){
//         var x = 2**2 + 3**2;
//         return x; 
// }
// alert(square())

// Task 6
// function fact(){
//         var x = 4;
//         return x*3*2*1;
// }
// alert("Factorial of 4! "  +" is " +fact())

// Task 7

// function count(){
//         var num = +prompt("Enter first number ")
//         var num2 = +prompt("Enter last number")
//         for(var i=num; i<=num2; i++){
//              document.write(" " + i)
//         }
// }
// count()

// Task 8

// function outer(){
//         var base = +prompt("Enter base value")
//         var perp = +prompt("Enter perpendicular value")
//         var show = "hypotenuse"+"<sup>2</sup>"+" = "+base +"<sup>2</sup>"+"+" +" "+perp+"<sup>2</sup>"+"<br>"
//         document.write(show)
//         function innn(){
//                 var y1 = base**2, 
//                     y2 = perp**2;
//                 var x = "hypotenuse"+"<sup>2</sup>"+" = "+y1+" + "+y2+"<br>"
//                 var y = base**2+perp**2
//                 var x1 = "hypotenuse"+"<sup>2</sup>"+" = "+y+"<br>"
//                 var x2 = Math.sqrt(y);
//                 var x3 ="hypotenuse "+" = " + x2.toFixed(2)
//                 document.write( x+x1 +x3)
//         }
//         return innn();
        
// }
// outer();


// Task 9

// function calcArea(width,height){
//         var area = width*height;
//         return area;
// }
// alert(calcArea(4,5))

// Task 10

// function palindrom(){
//         var word = prompt("Enter any word ");
//         var ch ="";
//        for(var i=word.length -1; i>=0; i--){
//                ch += word[i]
//        }
//        if(word===ch){
//                alert(word+" is palindrom word ");
//        }else{
//                alert(word+" is not palindrom word");
//        }
// }
// palindrom();

// Task 11

// function upper(str){
//        var  str  = str.split(" ");
//         for(var i=0; i<str.length; i++){
//                 str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)

//         }
//         return str.join(" ")  ;
// }
// alert(upper("the quick brown fox"))

// Task 12

// function search(long){
//         var long1 = long.split(" ")
//         var longest = "0";
//         for(i=0; i<long1.length;i++){
//                 if(long1[i].length >longest){
//                         longest = long1[i].length
//                         word = long1[i]
//                 }
//         }
//             return word ;
// }
// alert(search("Web Development Tutorial"))

// Task 13

// function letter(str,lett){
//        newStr = str.split("o").length-1
//        new1 = "the number of occurrences of 'o' is "+ newStr
//        return str+"\n" + new1 
// }
// alert(letter(" JSResourceS.com", "o"))


// Task 14 (A)

// function calcCircumference(radius){
//        var pi = 3.142;
//        var x = 2*pi*radius;
//        alert ("Circumference of circle is "+x)
// }
// calcCircumference(5);


// (B)


// function calcArea(radius){
//         var pi = 3.142;
//         var x = pi*(radius**2);
//         alert("The area is "+x);
// }
// calcArea(4);

