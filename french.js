var pass = "admin"
alert("Bienvenue!")
alert("Cet entretien comprend 6 questions")
alert("Commençons!")
var name = prompt("Quel est votre nom?")
alert("Question suivante")
var yearsStudied = prompt("Combien d'années avez-vous étudié au collège?")
alert("Question suivante")
var dbCheck = prompt("Avez-vous une expérience avec des bases de données?")
alert("Question suivante")
var criminalRec = prompt("Avez-vous un casier judiciaire?")
alert("Question suivante")
var whyJoin = prompt("Pourquoi vouloir rejoindre Oracle?")
alert("Question suivante")
var howMuch = prompt("Environ combien voulez-vous que votre salaire soit?")
alert("Merci d'avoir pris part à cette interview et de vous intéresser à Oracle!")
alert("Au revoir!")
alert("Ne fermez pas cet onglet")
alert("Attendre l'administrateur")
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
