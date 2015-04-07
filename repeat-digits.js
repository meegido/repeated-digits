function digitRepeat(number) {
	for (i = 0; i < number.length; i++){ //itero
		var digit = number[i];

		if(number.indexOf(digit, i +1) !== -1){ //compruebo
			return true
		}
	}
	return false //valor por defecto (a menos que haya algún número repetido, lo compruebo dentro del for)
}







console.log(digitRepeat("199") );
console.log(digitRepeat("34545") );
console.log(digitRepeat("4444444443") );
console.log(digitRepeat("138"));

