var Name = prompt("Please enter your full name:");
var Uname = prompt("What's your username?");
if (confirm("Are you female or male? Press 'Ok' for Male and 'Cancel' for Female.")){
    var gender = "Male";
    alert("You are a Male:(");
}
else{
    var gender = "Female";
    alert("You are a Female:D");
}
var desc = prompt("Please enter a brief description of yourself:");
var year = prompt("Please enter your birth year:");
if (confirm("Do you want to use a custom picture?")){
    var pic = prompt("Please enter the file name of the picture:");
}
else {
    alert("No image has been set.")
}
var age = 2023 - year;


document.getElementById("fname").innerHTML = Name;
document.getElementById("gender").innerHTML = gender;
document.getElementById("username").innerHTML = Uname;
document.getElementById("desc").innerHTML = desc;
document.getElementById("year").innerHTML = year;
document.getElementById("age").innerHTML = age;
document.getElementById("ppic").src = pic;