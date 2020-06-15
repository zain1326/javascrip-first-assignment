                                
                                // **** ASSIGNMENT NO 1 ****


alert("JAVA SCRIPT FIRST ASSIGNMENT");
alert("Error!please enter a valid password");
alert("Welcom to js land.. \n Happy Coding!");
alert("Welcom to js land..");
alert("Happy Coding!");

                             // ***** ASSIGNMENT NO 2 ****

        // alert('ASSIGNMENT #2')
var username;

var myname = "zain raza";

var message = "HELLO WORLD";
alert(message);

// student bio

var name = "Ali";
var age = "18";
var education = "certified mobile application devolpment";
alert(name);
alert(age);
alert(education);

var data = "PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(data);

var email = "ranazain1326@gmail.com";
alert("My email address is " + email);


var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book" + " " + book);

document.write("Yeh! I can write html content through javascript");

 var style = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
 alert(style);


                                        // **** ASSIGNMENT NO 3 ****

var age = 20;
alert("I am" + " " + age + " " + "year old");

 var visitTime = 14;
 alert("you have visited this site " + visitTime + " " + "times");

var birthYear = 2000;
document.write("My birth year is " + birthYear + "<br>" + "data type of my declared is number");

var visiterName = "zain";
var proTitle = "shirt(s)";
var quantity = 7;
document.write ("<b>" + visiterName + "</b>" + " " + "orderd " + "<b>" + quantity+ " " + proTitle + "</b>" + " on XYZ Clothing store")

                                //  **** ASSIGNMENT NO 4 ****

var a,b,c;
// legal variables

var zain;
var newValue;
var new1;
var $myvar;
var _abc;

// illegal variables

// var 1abx;
// var alert = 0;
// var ZAIN = 2;
// var var ;
// var .z ; 

document.write("<h1>Rules for naming JS variables</h1>");
document.write("<br>" + "<br>");
document.write("Variable names can only contain $ , letter , underscore and numbers. for emample $my_1stVariable");
document.write("<br>");
document.write(" Variables must begin with a letter , $ , _ .  For example $name, _name or name");
document.write("<br>");
document.write("Variable names are case sensitive");
document.write("<br>");
document.write("Variable names should not be JS keyword");

                        // ****** ASSIGNMENT NO 5 *****

 var v1 = 15;
 var v2 = 12;

 var adding = v1 + v2;
 document.write("SUM of " + v1 + " and " + v2 + " is " + adding);

document.write("<br>" );
 var sub = v1 - v2;
 document.write("Subtraction of " + v1 + " and " + v2 + " is " + sub);

 document.write("<br>" );

 var multiply = v1 * v2;
 document.write("Multiplication of " + v1 + " and " + v2 + " is " + multiply);

 document.write("<br>" );
 
 var division = v1 / v2;
 document.write("Division of " + v1 + " and " + v2 + " is " + division);

  document.write("<br>" );
 
 var mod = v1 % v2;
 document.write("Modulus of " + v1 + " and " + v2 + " is " + mod);

  document.write("<br>" );

var myvariable;
document.write("Value after variable declaration is: " + myvariable);

document.write("<br>");

var myvalue = 7;
document.write("Initial value: " + myvalue);

document.write("<br>");

var incr = ++myvalue;
document.write("Value after increment is: " + incr );

document.write("<br>");

var addValue =( 7 +  incr);
document.write("Value after addition is: " + addValue);

document.write("<br>");

var decr = --addValue;
document.write("Value after decrement is:" + decr);

document.write("<br>");

var remind = decr % 3;
document.write("The remider is: " + remind);

document.write("<br>");

var ticketPrice = 600;
var totalTicketPrice = 5 * ticketPrice;

document.write("Total cost to by 5 tickets to a movie is: " + totalTicketPrice + "PKR");

document.write("<br>");
         
document.write("<h4>TABLE OF 5</h4>" + "<br>");
var length = 1;
document.write(
"5X1 = " + 5* length + "<br>" +
"5X2 = " + 5* ++length + "<br>" +
"5X3 = " + 5* ++length + "<br>" +
"5X4 = " + 5* ++length + "<br>" +
"5X5 = " + 5* ++length + "<br>" +
"5X6 = " + 5* ++length + "<br>" +
"5X7 = " + 5* ++length + "<br>" +
"5X8 = " + 5* ++length + "<br>" +
"5X9 = " + 5* ++length + "<br>" +
"5X10 = "+ 5* ++length + "<br>" 
);

document.write("<br>");

var cV = 25;
var cToF = (cV * 9/5) + 32;

document.write(cV + "<sup>o</sup>C" + " is " + cToF + "<sup>o</sup>F" + "<br>");

var fV = 70;
var fToC = (fV - 32) * 5/9;

document.write(fV + "<sup>o</sup>F" + " is " + fToC + "<sup>o</sup>C" + "<br>");

var item1_Price = 500;
var item1_Qty = 5;
var item2_Price = 200;
var item2_Qty = 8;
var shipping = 100;
var total = item1_Price * item1_Qty + item2_Price * item2_Qty + shipping;

document.write("Price of Item 1: " + item1_Price + "<br>"+ "Quantity of Item 1: " + item1_Qty + "<br>");
document.write("Price of Item 2: " + item2_Price + "<br>"+ "Quantity of Item 2: " + item2_Qty + "<br>");
document.write("Shipping charges: " + shipping + "<br>" + "<br>");
document.write("<b>Total cost of your order: </b>" + total);

document.write("<br>");

var totalMarks = 1100;
var obtained = 774;
// var persentage = 774/1100*100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtained + "<br>");
document.write("Persentage: " + persentage + "%" + "<br>");

var doller = 10;
var rayal = 25;
var oneDoller = 104.80; 
var oneRayal = 28;
var pkr = (doller * oneDoller) + (rayal * oneRayal);

 document.write("<b>Total curency in PKR </b>" + "<br>" + "<br>");
 document.write("Total Curnecy in PKR " + pkr + "<br>"); 


var num = 1326;
var calculation = ((num + 5) * 10) / 2;
document.write("initial value: " + num + "<br>"); 
document.write("After adding 5 and multiply by 10 and divided the result by 2: " + calculation + "<br>"); 

                 // age calculator

var currentYear = 2020;
var birth_Year = 2000;
var  total_age = 2020 - 2000;

document.write("<b>AGE CALCULATOR</b>" + "<br>");
document.write("Currunt year: " + currentYear + "<br>");
document.write("Birth year: " + birth_Year + "<br>");
document.write("Your age is: " + total_age + "<br>");

                 // The Geometrizer   
                 
var radius = 25;
var circumference  = 2 * 3.142 * radius;
var area = 3.142 * (radius*radius);
 document.write("<b>The Geometrizer</b>" + "<br>");
 document.write("Radius of a cicrcle: " + radius +"<br>");
 document.write("The circumference is: " + circumference +"<br>");
 document.write("The Area is: " + area +"<br>");
                  
                        // Life Time Supply Calculator
 
var  favourite_snack = "candy";
var  current_age = 15;
var  maximum_age = 65;
var  amount_per_day =  3;
var  total_snack = (maximum_age - current_age) * amount_per_day;

 document.write("<b>Life Time Supply Calculator</b>" + "<br>");
document.write("Favourite Snack: " + favourite_snack +"<br>");
document.write("Currunt Age: " + current_age +"<br>");
document.write("Maximum age: " + maximum_age +"<br>");
document.write("Ammount of snack per day: " + amount_per_day +"<br>");
document.write("You will need " + total_snack + " to last you until the ripe old age of " + maximum_age +"<br>");


                // ******** ASSIGNMENT NO 6 (FROM 6 TO 9 CHAPERS) ******* 

 
var init_value =+prompt("PLease Enter a value");

document.write("<b>Result</b>" + "<br>");
document.write("The value of a is : " + init_value +"<br>" + "........................."+"<br>" );
var v = init_value;
document.write("The value of ++a is: " + ++v + "<br>");
document.write("Now the value of a is: " + v + "<br>" + "<br>");

document.write("The value of a++ is: " + v++ + "<br>");
document.write("Now the value of a is: " + v + "<br>" + "<br>");

document.write("The value of --a is: " + --v + "<br>");
document.write("Now the value of a is: " + v + "<br>" + "<br>");

document.write("The value of a-- is: " + v-- + "<br>");
document.write("Now the value of a is: " + v + "<br>" + "<br>");


var a1 = 2;
var b1 = 1;
document.write("a = " + a1 + "<br>");
document.write("b = " + b1  + "<br>");
 

document.write("result = " + (--a1 - --b1 + ++b1 + b1--)  + "<br>" + "<br>");

document.write("<b>equation: --a - --b + ++b + b--</b>" + "<br>");


document.write("--a = 1" + "<br>");
document.write("--a - --b = 1 - 0" + "<br>");
document.write("--a - --b + ++b  = 1 - 0 + 1" + "<br>");
document.write("--a - --b + ++b + b-- = 1 - 0 + 1 + 1" + "<br>");


var user_name = prompt("Please Enter Your Name") ;
document.write("welcome " + user_name) ;


var input =+prompt("Enter a value for table");
var le= 1;

if(input == ""){
  input = 5;
}
document.write("<b> TABLE OF </b>" + input + "<br>" + "<br>");
document.write(
input + "X 1 = " + input*   le + "<br>" +
input + "X 2 = " + input* ++le + "<br>" +
input + "X 3 = " + input* ++le + "<br>" +
input + "X 4 = " + input* ++le + "<br>" +
input + "X 5 = " + input* ++le + "<br>" +
input + "X 6 = " + input* ++le + "<br>" +
input + "X 7 = " + input* ++le + "<br>" +
input + "X 8 = " + input* ++le + "<br>" +
input + "X 9 = " + input* ++le + "<br>" +
input + "X 10 = "+ input* ++le + "<br>" 
);
 

var sub1 = prompt("Enter first subject name");
var sub1_marks =+prompt("Enter first subject marks");


var sub2 = prompt("Enter second subject name");
var sub2_marks =+prompt("Enter second subject marks");


var sub3 = prompt("Enter third subject name");
var sub3_marks =+prompt("Enter third subject marks");


var sub_marks = 100;
var total_sub_marks = 100*3;
var total_marks = sub1_marks + sub2_marks + sub3_marks;

var sub1_persentage = sub1_marks / sub_marks * 100;
var sub2_persentage = sub2_marks / sub_marks * 100;
var sub3_persentage = sub3_marks / sub_marks * 100;

var total_persentage = ((total_marks / total_sub_marks) * 100) ;

document.write(
"<table>" + 
"<tr> " +

"<th style='padding : 10px;'>" + "Subject " + "</th>" + 
"<th style='padding : 10px;'>" + "Total Marks" + "</th>" +
"<th style='padding : 10px;'>" + "Obtained Marks" + "</th>" + 
"<th style='padding : 10px;'>" + "Percentage" + "</th>" + 

"</tr>" +

"<tr> " +

"<td style='padding : 10px;'>" + sub1 + "</th>" + 
"<td style='padding : 10px;'>" + sub_marks + "</th>" +
"<td style='padding : 10px;'>" + sub1_marks + "</th>" + 
"<td style='padding : 10px;'>" + sub1_persentage + "%" + "</td>" + 

"</tr>" +

"<tr> " +

"<td style='padding : 10px;'>" + sub2 + "</th>" + 
"<td style='padding : 10px;'>" + sub_marks + "</th>" +
"<td style='padding : 10px;'>" + sub2_marks + "</th>" + 
"<td style='padding : 10px;'>" + sub2_persentage + "%" + "</td>" + 

"</tr>" +

"<tr> " +

"<td style='padding : 10px;'>" + sub1 + "</th>" + 
"<td style='padding : 10px;'>" + sub_marks + "</th>" +
"<td style='padding : 10px;'>" + sub3_marks + "</th>" + 
"<td style='padding : 10px;'>" + sub3_persentage + "%" + "</td>" + 

"</tr>" +

"<tr> " +

"<th style='padding : 10px;' colspan= 2>" + total_sub_marks + "</th>" + 
"<th style='padding : 10px;'>" + total_marks + "</th>" +
"<th style='padding : 10px;'>" + total_persentage + "%" + "</th>" + 

"</tr>" +

 "</table>"
)
document.write("<br>")
                // ******** ASSIGNMENT NO 7 (FROM 9 TO 11 CHAPERS) ******* 

var city = prompt("Enter paksitan city name");
if(city == "karachi"){
document.write("Welcome to city of lights" + "<br>")   
}

var chk_gender = prompt("Enter Your Gender");
if(chk_gender == "male" || chk_gender == "MALE" || chk_gender == "Male"){
document.write(" Good Morning Sir" + "<br>")   
}else if(chk_gender == "female" || chk_gender == "FEMALE" || chk_gender == "Female"){

        document.write(" Good Morning Ma’am" + "<br>")   
}


var color1 = prompt("ENTER FIRST  TRAFIC LIGHT COLOR ONLY");
var color2 = prompt("ENTER SECOND TRAFIC LIGHT COLOR ONLY");
var color3 = prompt("ENTER SECOND TRAFIC LIGHT COLOR ONLY");



if(color1 === "red" && color2 === "yellow" && color3 === "green"){
                document.write(
                        "<table>" + 
                        "<tr> " +
                        
                        "<th style='padding : 10px;'>" + "Signal color" + "</th>" + 
                        "<th style='padding : 10px;'>" + "Message" + "</th>" +
                        
                        "</tr>" +
                        
                        "<tr> " +
                        
                        "<td style='padding : 10px;'>" + "Red" + "</th>" + 
                        "<td style='padding : 10px;'>" + "Must stop" + "</th>" +
                        
                        "</tr>" +
                        
                        "<tr> " +
                        
                        "<td style='padding : 10px;'>" + "Yellow" + "</th>" + 
                        "<td style='padding : 10px;'>" + "Ready to move" + "</th>" +
                        
                        "</tr>" +
                        
                        "<tr> " +
                        
                        "<td style='padding : 10px;'>" + "Green" + "</th>" + 
                        "<td style='padding : 10px;'>" + "Move now" + "</th>" +
                        
                        "</tr>" +
                        
                        
                        
                         "</table>"
                        
                                 )
}else{
        alert("PLease enter only trafic light color in suquance & in small letter")
}

 var remain_fuel = prompt("please enter remaining fuel in your car");
if(remain_fuel < 0.25){
        alert("Please refill the fuel in your car");
}

 var x = 4;
if (++x === 5){
alert("given condition for variable x is true");
}

var y = 82;
if (y++ === 83){
alert("given condition for variable y is true");
}
else{
alert("given condition for variable y is not true")
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}


if("car" < "cat"){
   alert("car is smaller than cat");
 }

var  marks_obtained1 =+prompt("Please enter your 1st subject obtained marks");
var  marks_obtained2 =+prompt("Please enter your 2nd subject obtained marks");
var  marks_obtained3 =+prompt("Please enter your 3rd subject obtained marks");
var  marks_total1=+prompt("Please enter your 1st subject total marks");
var  marks_total2=+prompt("Please enter your 2nd subject total marks");
var  marks_total3=+prompt("Please enter your 3rd subject total marks");


var total_obtain_marks = marks_obtained1 + marks_obtained2 + marks_obtained3;
var total_mark = marks_total1 + marks_total2 + marks_total3;

var percent = total_obtain_marks / total_mark * 100;
var grade,remarks;

if(percent >= 80 ){
        grade ="A-one";
        remarks = "Excellent";
}else if(percent >= 70){
        grade ="A";
        remarks = "Good";
}else if(percent >= 60){
        grade ="B";
        remarks = "You need to imporove";
}else if(percent < 60){
        grade ="Fail";
        remarks = "Sorry";
}else{
        alert("Invaild input!");
}

document.write("<b>MARKS SHEET</b>"+"<br>");
document.write("Total marks: " + total_mark +"<br>");
document.write("Marks Obtained: " + total_obtain_marks +"<br>");
document.write("Percentage: " + percent +"<br>");
document.write("Grade: " + grade+"<br>");
document.write("Remarks: " + remarks +"<br>");

var secret_num = 8;
var gues_num =+prompt("Guess the secret number");

if(gues_num === secret_num){
        alert("Bingo! Correctanswer");
}else if(gues_num === ++secret_num){
        alert("Close enough to the correct answer");
}

var user_value =+prompt("please enter a value");
var res = user_value % 3;
if(res === 0){
        alert("Your number is divisible by 3")
}else{
        alert("Your number is not divisible by 3")        
}


var input1 =+prompt("Please Enter a number for checking even or odd");
var chk = input1 % 2;
if(chk === 0){
        alert(input1 + " is  a even number");
}else if(chk !== 0){
        alert(input1 + " is  a odd number");
}else{
        alert("PLease enter a vaild input!")
}


var temp =+prompt("Please Enter Temprature");

if(temp > 40){
        document.write("It is too hot outside");
}else if( temp > 30){
        document.write("The Weather today is Normal");
}else if( temp > 20){
        document.write("Today’s Weather is cool");
}else if( temp > 10 || temp > 0){
        document.write("OMG! Today’s weather is so Cool");
}else{
        alert("Please Enter a vaild input!")
}

var firtsValue =+prompt("Please Enter First Value");
var secondValue =+prompt("Please Enter Seconde Value");
var operat =prompt("Please Enter a math operation");

if( firtsValue !== "" && secondValue !== "" && operat !== "" ){
       if(operat === "+"){
               document.write("The sum of " + firtsValue + "&" + secondValue + " is: " + (firtsValue + secondValue));
       } else if(operat === "-"){
        document.write("The subraction of " + firtsValue + "&" + secondValue + " is: " + (firtsValue - secondValue));
           }else if(operat === "*"){
                document.write("The multiplication of " + firtsValue + "&" + secondValue + " is: " + (firtsValue * secondValue));
        }else if(operat === "/"){
                document.write("The division of " + firtsValue + "&" + secondValue + " is: " + (firtsValue / secondValue));
        }else if(operat === "%"){
                document.write("The modulus of " + firtsValue + "&" + secondValue + " is: " + (firtsValue % secondValue));
        }else{
                alert("sorry we can not perform this opretion!")
        }

}

                // ******** ASSIGNMENT NO 8 (FROM 12 TO 13 CHAPERS) ******* 


var z = prompt("Please Enter a charachter");
var code = z.charCodeAt(0);
if(z.length === 1){
       if(code > 64 && code < 91){
        alert( z +" is a capital letter")
       } else if(code > 96 && code < 123){
        alert( z + " is a samll letter")               
       }else if(code > 46 && code < 58){
        alert(z + " is a number")  
 }else{
         alert("The value you have enter is a special character")
 }
}else{
        alert("Enter only one charachter")
}

var integer1 =+prompt("PLease enter first number");
var integer2 =+prompt("PLease enter second number");
 if(integer1 > integer2){
         alert(integer1 + " is greater then " + integer2);
 }else if(integer2 > integer1){
        alert(integer2 + " is greater then " + integer1);         
 }else if(integer1 === integer2){
        alert(integer1 + " & " + integer2 + " are equal");         
 }else{
         alert("incorrect value!")
 }
 
var numb =+prompt("Please ENetr a Number");
if(numb > 0){
        alert(numb + " is a positive intiger");
}else if(numb < 0){
        alert(numb + " is a negtive intiger");
}else if (numb === 0){
        alert("The integer in zero")
}else{
        alert("Enter correct number")
}

var string1 =prompt("Enter a charcter");

if(string1.length === 1){
        if(string1 === "a" || string1 === "e" || string1 === "i" || string1 === "o" || string1 === "i"){
                alert("true");
        }else{
                alert("false")
        }
}else{
        alert("Enetr only one character")
}

var password = "1234567"
var chk_pass = prompt("password?");

if(chk_pass == ""){
        alert("PLease enter your password")
}else if(chk_pass === password){
        alert("The password you entered matches the original password")
}
else{
        alert("Incorrect password")
}

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}




var time = prompt("Please Enter time in 24hours format like: 1200,1800");
var time_code = time.charCodeAt(0);

if(time !== "" && time.length === 4 && time_code > 46 && time_code < 58){

if(time >= 0000 && time < 1200){
        document.write("<br>" + "Good Morning")
}else if(time >=1200 & time < 1700){
        document.write("<br>" + "Good Afternoon")        
}else if(time >= 1700 && time < 2100){
        document.write("<br>" + "Good Evening")                
}else if(time >= 2100 && time <= 2359){
        document.write("<br>" + "Good Night")                        
}else if (time > 2359){
    alert("Please Enter 24houre format time")
}

}
else{
        alert("Please Enter correct time")
}

                // ******** ASSIGNMENT NO 9 (FROM 14 TO 16 CHAPTERS) ******* 

var literal_notaion = [];
var  object_notation = { myarray:[] }

var strin_array = ["zain","ali","hassan"];
var num_array = [1,2,3,4];
var boolen_array = [true,false];
var mix_array = ["zain",1326,true,"ali"]


var edu_array = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PHD"]

document.write("<b>Qualification</b>" + "<br>");
document.write("1) " + edu_array[0] + "<br>");
document.write("2) " + edu_array[1] + "<br>");
document.write("3) " + edu_array[2] + "<br>");
document.write("4) " + edu_array[3] + "<br>");
document.write("5) " + edu_array[4] + "<br>");
document.write("6) " + edu_array[5] + "<br>");
document.write("7) " + edu_array[6] + "<br>");
document.write("8) " + edu_array[7] + "<br>");

var stud = ["zain","shahbaz","fraz"];
var score = [400,300,450];
var total_score = 500;
var student1_per = score[0] / total_score * 100;
var student2_per = score[1] / total_score * 100;
var student3_per = score[2] / total_score * 100;

document.write("score of " + stud[0] + " is " + score[0] + ". Percentage: " + student1_per + "%" + "<br>")
document.write("score of " + stud[1] + " is " + score[1] + ". Percentage: " + student2_per + "%" + "<br>")
document.write("score of " + stud[2] + " is " + score[2] + ". Percentage: " + student3_per + "%" + "<br>")

var clr = ['red','green','blue'];

document.write("intial array:" +  clr + "<br>" + "<br>" );

var nclr = prompt("color to add at bignning"); 
clr.unshift(nclr)
document.write("after add " + nclr + " color in bigning of array: " + clr + "<br>" + "<br>");

var nclr2 = prompt("color to add at the End"); 
clr.push(nclr2)
document.write("after add " + nclr2 + " color in bigning of array: " + clr + "<br>" + "<br>" );

clr.unshift("brown")
clr.unshift("cyan")
document.write("after add two new color in bigning of array: " + clr + "<br>" + "<br>" );

clr.shift()
document.write("after remove 1 color in bigning of array: " + clr + "<br>" + "<br>" );

clr.pop()
document.write("after remove 1 color in the end of array: " + clr + "<br>" + "<br>" );

var nclr3_index = prompt("which index do you want to add a new color?"); 
var nclr3 = prompt("color name?"); 
clr.splice(nclr3_index, 0 , nclr3)
document.write("after add " + nclr3 + " color at " + nclr3_index  + " index of array: " + clr + "<br>" + "<br>" );

var del_index = prompt("which index you want to remove color?"); 
var numbOfColor = prompt("how many color you want to remove"); 
clr.splice(del_index,numbOfColor)
document.write("after remove colors from array: " + clr + "<br>" + "<br>" );


var studen_score = [336,420,240,600,550];
document.write("initial array: " + studen_score + "<br>");

var sorted_array= studen_score.sort();
document.write("sorted array: " + sorted_array);

var city_names = ["karachi","faisalabad","lahore","multan","islamabad"]
document.write("City List: " + city_names + "<br>")

var selected_city = city_names.slice(1,4);
document.write("Selected Cities List: " + selected_city + "<br>")

var arr = ["This","is","my","cat"];
document.write("Array: " + arr + "<br>")

 var newString = arr.join(" ");
document.write("After join array: " + newString + "<br>")
  
var devices = ["keyboard","mouse","moniter"];

document.write("Devices: " + devices + "<br>");
document.write("out: " + "<br>" +  devices[0] + "<br>"+ "out: " + "<br>" +  devices[1] + "<br>"+"out: " + "<br>" +  devices[2] + "<br>")

var devices2 = ["keyboard","mouse","moniter"];
document.write("Devices: " + devices2 + "<br>");
devices2.reverse();
document.write("out: " + "<br>" +  devices2[0] + "<br>"+ "out: " + "<br>" +  devices2[1] + "<br>"+"out: " + "<br>" +  devices2[2] + "<br>")


var compony = ["Apple","Samsung","Qmobile"];

document.write("<select>" +"<option>"+  compony[0]  + "</option>" + "<option>"+ compony[1]  +  "</option>"+"<option>"+ compony[2]  +  "</option>" +  "</option>"  +  "</select>");

        // ASSIGNMENT NO 10 (FROM CHAPTER 17 TO 20)

        var multi_array = [[]];
var matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

for(i=1; i <= 10; i++){
    document.write(i + "<br>");
}

TABLE 

var table =+prompt("Enter a number to show its multiplication");
var tLength =+prompt("Enter Length Multiplication Table");

for( i = 1; i <= tLength; i++){
    document.write(table + " x " + i + " = " + table*i + "<br>");
}

var fruits = ["apple","banana","mango","orange","strawberry"];

for(i = 0; i < fruits.length; i++){
    document.write(fruits[i] + "<br>");
}
for(i = 0; i < fruits.length; i++){
    document.write( "Element at index " + i + " is " + fruits[i] + "<br>")
}
document.write("Counting: ")
for(i = 1; i<=15; i++){
    document.write(i + ",");    
}

document.write("<br>"+"Reverse Counting: ")
for(i = 10; i>=1; i--){
    document.write(i + ",");    
}

document.write("<br>"+"Even: ")
for(i=0; i<=20; i=i+2){
    document.write(i + ",");    
}

document.write("<br>"+"Odd: ")
for(i=1; i<=20; i=i+3){
    document.write(i + ",");    
}

document.write("<br>"+"Series: ")
for(i=2; i<=20; i=i+2){
    document.write(i +"k" + ",");    
}

 var things = ["cake","apple pie","cookie","chips","patties"];

var finding = prompt("Welcom to Al-Barkat Bakery.what do you want to order sir/ma'am");
var thingFind;
for(i=0; i<things.length;i++){
    if(finding === things[i]){  
        thingFind = i;       
        break; 
}
}
if( thingFind >= 0){
    document.write(finding + " is <b>available<b> at index " + i + " in our bakery");
}
else{
    document.write("We are sorry."+finding + " is <b> not available <b> in our bakery")  
}

var largest = [24, 53, 78, 91, 12];
document.write("Array Items: " + largest + "<br>")
var setting = largest.sort();
var largeindex = setting.length-1;
document.write("The largest number is: " + largest[largeindex] + "<br>")

document .write("<br>")

var smallest = [24, 53, 78, 91, 12];
document.write("Array Items: " + largest + "<br>")
var setting = largest.sort();
var reverse = setting.reverse();
var largeindex = setting.length-1;
document.write("The smallest number is: " + largest[largeindex] + "<br>")

for(i=1; i<=100; i++){
    if(i%5 === 0){
        document.write(i + ",")
    }
}