var pass = "admin"
alert("¡Bienvenidos!")
alert("Esta entrevista consta de 6 preguntas.")
alert("¡Empecemos!")
var name = prompt("¿Cuál es su nombre?")
alert("Próxima pregunta")
var yearsStudied = prompt("¿Cuántos años has estudiado en la universidad?")
alert("Próxima pregunta")
var dbCheck = prompt("¿Tienes alguna experiencia con bases de datos?")
alert("Próxima pregunta")
var criminalRec = prompt("¿Tiene antecedentes penales?")
alert("Próxima pregunta")
var whyJoin = prompt("¿Por qué quieres unirte a Oracle?")
alert("Próxima pregunta")
var howMuch = prompt("¿Cuánto quieres que sea tu salario?")
alert("¡Gracias por participar en esta entrevista y por interesarse en Oracle!")
alert("¡Adiós!")
alert("No cierres esta pestaña")
alert("Espera al administrador")
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
