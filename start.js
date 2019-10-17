var nativeLanguage = prompt('What is your native language? Please choose from Spanish, English, Arabic, or French', 'English')

if (nativeLanguage == "French") {
	alert("Bonjour!")
	alert("You selected" + " " + nativeLanguage)
	location.replace("french.html")
}
else if (nativeLanguage == "Spanish") {
	alert("¡Hola!")
	alert("You selected" + " " + nativeLanguage)
  location.replace("spanish.html")
}
else if (nativeLanguage = "English") {
	alert('Hello!')
	alert("You selected" + " " + nativeLanguage)
  location.replace("english.html")
}
else if (nativeLanguage = "Arabic") {
	alert("Marhabaan!")
	alert("You selected" + " " + nativeLanguage)
  location.replace("arabic.html")
}
else if (nativeLanguage = null) {
	alert('Please enter your native language (if listed)')
	var nativeLanguage = prompt('What is your native language? Please choose from Spanish, English, Arabic, or French', 'English')
}
