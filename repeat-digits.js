
var firstDigit = -1;

function digitRepeat(number) {
	for (i = 0; i < number.length - 1; i++){
		var digit = number[i];

		if(digit == number[i + 1]){
			return true;
		}
		return false;
	}
}

console.log(digitRepeat("199") );
console.log(digitRepeat("34545") );
console.log(digitRepeat("4444444443") );
console.log(digitRepeat("138"));