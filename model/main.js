export var dezainer =  	{
						"Minecraft": 4,
						"Farcry 4": 5,
						"PES": 3,
						"Gran Turismo": 0,
						"GTA": 5,
						"CS": 5,
						"Call of Duty": 3,
						"Spore": 2,
						"Mario": 4,
					};

export var desenveloper =  {
						"Minecraft" : 3,
						"Farcry 4" : 5,
						"PES" : 5,
						"Gran Turismo" : 1,
						"GTA" : 4,
						"CS" : 5,
						"Call of Duty" : 5,
						"Spore" : 2,
						"Mario" : 5,
					};

var result = [];

// console.log(dezainer);
// console.log(desenveloper);

var final = 0;

export function calcular() {
	alert('exec');

	for (var key in dezainer) {
		var calc = dezainer[key] - desenveloper[key];

		if(calc < 0){
			calc = calc * -1;
		}

		calc = calc * calc;

		result.push(calc);
	}

	for (var i = 0; i < result.length; i++) {
		final += result[i];
	}
	final = Math.sqrt(final);

	return final;
}

// console.log(final);