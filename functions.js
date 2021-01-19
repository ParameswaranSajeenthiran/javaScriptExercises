//Q1
function square(x){
return Math.pow(x,2)
}
document.write("Q1 "+square(5)+"<br>");
//Q2
//a)
var num1=4; var num2=3;
function addNum(){
  return "The addition of two numbers is"+" "+( num1+num2)
}
document.write("Q2 "+"<br>"+" a)"+addNum()+"<br>");

//b)
function multiNum(){
  return "The multiplication of two numbers is "+" "+(num1*num2)+"<br>"

}
document.write("b) "+ multiNum());

//c)
function substractNum(){
  return "c)"+"The subration of the numbers is  "+
  (num1-num2)+"<br>"
}
document.write(substractNum());

//d)
function divideNum(){
  return "d)"+"The division of two numbers is "+(num1/num2)+"<br>"
}
document.write(divideNum());

function alertHello(){
  return alert("Hello World")
}
function volume(h,b,w){
  return "Q4 Volume of a cuboid is "+(h*b*w)+"<br>"
}
document.write(volume(3,7,6));
 var stu1=  {firstName:"Nimal" ,
   lastName:"Raj",
    age:"15",
   city:"Kandy",
   fullName:function() {return this.firstName+" "+this.lastName}
 }
document.write("Q5 my name is "+stu1.fullName()+".  I\'m "+stu1.age+"years old.I live in "+stu1.city+"<br>")
console.log(stu1.age);

document.write("Q6")
var course={CourseName:" BIT",
CourseFee:" Rs 150 000",
StartDate: "12.06.2018",
Center: "OurOffice"}

for (x in course){
  document.write("<br>" +x+  ":"+course[x])
}
