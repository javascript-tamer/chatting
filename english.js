var pass = "admin"
alert("Welcome!")
alert("This interview consists of 6 questions")
alert("Let's Start!")
var name = prompt("What is your name?")
alert("Next Question")
var yearsStudied = prompt("How many years have you studied in college?")
alert("Next Question")
var dbCheck = prompt("Do you have any experiance with databases?")
alert("Next Question")
var criminalRec = prompt("Do you have a criminal record?")
alert("Next Question")
var whyJoin = prompt("Why do want to join Oracle?")
alert("Next Question")
var howMuch = prompt("About how much do you want your salary to be?")
alert("Thank you for taking part in this interview and taking interest in Oracle!")
alert("Bye!")
alert("Do not close this tab")
alert("Wait for admin")
var password = prompt("Enter Password")
if (password = pass){
  alert("Here are " + name + "s" + " answers")

  alert("1st Question Answer")
  alert("The 1st question was, What is your name?")
  alert(name + " answered" + name)

  alert("2nd Question Answer")
  alert("The 2nd question was, What is your name?")
  alert(name + " answered" + yearsStudied)

  alert("3rd Question Answer")
  alert("The 3rd question was, How many years have you studied in college?")
  alert(name + " answered" + " " + dbCheck)

  alert("4th Question Answer")
  alert("The 4th question was, Do you have a criminal record?")
  alert(name + " answered" + " " + criminalRec)

  alert("5th Question Answer")
  alert("The 5th question was, Why do want to join Oracle?")
  alert(name + " answered" + " " + whyJoin)

  alert("6th Question Answer")
  alert("The 6th question was, About how much do you want your salary to be?")
  alert(name + " answered" +  " " + howMuch)
}
else{
  alert("Wrong Password! Try again!")
}
