var pass = "admin"
alert("Ahlaan bk!")
alert("Tatakawn hadhih almuqabilat min 6 'asyila")
alert("lnabda!")
var name = prompt("Ma asmak?")
alert("Alsuwal Alttali")
var yearsStudied = prompt("Kam sanat darast fi alkaliyata?")
alert("Alsuwal Alttali")
var dbCheck = prompt("Hal ladayk 'ayu tajribat mae qawaeid albianat?")
alert("Alsuwal Alttali")
var criminalRec = prompt("Do you have a criminal record?")
alert("Alsuwal Alttali")
var whyJoin = prompt("Limadha turid alaindimam 'iilaa Oracle؟")
alert("Alsuwal Alttali")
var howMuch = prompt("Hawl kam turid 'an yakun ratibuk?")
alert("Shkrana lak ealaa almusharakat fi hadhih almuqabilat walaihtimam b Oracle!")
alert("Wadaea!")
alert("La tughliq ealamat altabwib hadhih")
alert("Aintazar al'iidaria")
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
