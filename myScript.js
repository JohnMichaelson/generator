window.onload = function(){
	//definig some dom html objects as variables
	var textarea = document.getElementById('textarea');
	var button = document.getElementById("button");
	var type = document.getElementById("type");
	var level = document.getElementById("level");
	var num = document.getElementById('num');
	let mathexpr;
	let output;
	let text = [];
	let arraylength;
	let genexpr;
	let a;
	let b;
	let c;
	let d;
	let e;
	let f;

	//defining an array of math operations.
	let symbols = [" + ", " - ", " * ", " / "];
	//creating an object which will hold all the levels for the type 1 math expression as methods
	let type1obj = {
		type1level1fun : function(){
			let i = 0;
			while (i < 1000000) {
				//char1 and char2 are two random math operators, selected from symbols array
				let randchararrayid = Math.floor(Math.random() * 2);
				let char1 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char2 = symbols[randchararrayid];
				a = Math.floor(Math.random() * 26);
				b = Math.floor(Math.random() * 26);
				c = Math.floor(Math.random() * 26);

				let type1level1 = `${a}${char1}${b}${char2}${c}`
				let calc = eval(type1level1);
				if (calc > 1 && calc % 1 == 0) {
					let mathexpr = type1level1
					return mathexpr
					break
				}
				i++	

			};
			
		},
		type1level2fun : function(){
			let i = 0;
			while (i < 1000000) {
				//char1 and char2 are two random math operators, selected from symbols array
				let randchararrayid = Math.floor(Math.random() * 2);
				let char1 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char2 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char3 = symbols[randchararrayid];
				a = Math.floor(Math.random() * 51);
				b = Math.floor(Math.random() * 51);
				c = Math.floor(Math.random() * 51);
				d = Math.floor(Math.random() * 51);

				let type1level2 = `${a}${char1}${b}${char2}${c}${char3}${d}`
				let calc = eval(type1level2);
				if (calc > 1 && calc % 1 == 0) {
					let mathexpr = type1level2
					return mathexpr
					break
				}
				i++	

			};
			
		},
		type1level3fun : function(){
			let i = 0;
			while (i < 1000000) {
				//char1 and char2 are two random math operators, selected from symbols array
				let randchararrayid = Math.floor(Math.random() * 2);
				let char1 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char2 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char3 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char4 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char5 = symbols[randchararrayid];
				a = Math.floor(Math.random() * 101);
				b = Math.floor(Math.random() * 101);
				c = Math.floor(Math.random() * 101);
				d = Math.floor(Math.random() * 101);
				e = Math.floor(Math.random() * 101);
				f = Math.floor(Math.random() * 101);

				let type1level3 = `${a}${char1}${b}${char2}${c}${char3}${d}${char4}${e}${char5}${f}`
				let calc = eval(type1level3);
				if (calc > 1 && calc % 1 == 0) {
					let mathexpr = type1level3
					return mathexpr
					break
				}
				i++	

			};
			
		}
	};

	//creating an object which will hold all the levels for the type 2 math expression as methods
	let type2obj = {
		type2level1fun : function(){
			let i = 0;
			while (i < 1000000) {
				//char1 and char2 are two random math operators, selected from symbols array
				let randchararrayid = Math.floor(Math.random() * symbols.length);
				let char1 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char2 = symbols[randchararrayid];
				a = Math.floor(Math.random() * 26);
				b = Math.floor(Math.random() * 26);
				c = Math.floor(Math.random() * 26);

				let type1level1 = `${a}${char1}${b}${char2}${c}`
				let calc = eval(type1level1);
				if (calc > 1 && calc % 1 == 0) {
					let mathexpr = type1level1
					return mathexpr
					break
				}
				i++	

			};
			
		},
		type2level2fun : function(){
			let i = 0;
			while (i < 1000000) {
				//char1 and char2 are two random math operators, selected from symbols array
				let randchararrayid = Math.floor(Math.random() * symbols.length);
				let char1 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char2 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char3 = symbols[randchararrayid];
				a = Math.floor(Math.random() * 51);
				b = Math.floor(Math.random() * 51);
				c = Math.floor(Math.random() * 51);
				d = Math.floor(Math.random() * 51);

				let type1level2 = `${a}${char1}${b}${char2}${c}${char3}${d}`
				let calc = eval(type1level2);
				if (calc > 1 && calc % 1 == 0) {
					let mathexpr = type1level2
					return mathexpr
					break
				}
				i++	

			};
			
		},
		type2level3fun : function(){
			let i = 0;
			while (i < 1000000) {
				//char1 and char2 are two random math operators, selected from symbols array
				let randchararrayid = Math.floor(Math.random() * symbols.length);
				let char1 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char2 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char3 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char4 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char5 = symbols[randchararrayid];
				a = Math.floor(Math.random() * 101);
				b = Math.floor(Math.random() * 101);
				c = Math.floor(Math.random() * 101);
				d = Math.floor(Math.random() * 101);
				e = Math.floor(Math.random() * 101);
				f = Math.floor(Math.random() * 101);

				let type1level3 = `${a}${char1}${b}${char2}${c}${char3}${d}${char4}${e}${char5}${f}`
				let calc = eval(type1level3);
				if (calc > 1 && calc % 1 == 0) {
					let mathexpr = type1level3
					return mathexpr
					break
				}
				i++	

			};
			
		}
	};

	//creating an object which will hold all the levels for the type 3 math expression as methods 
	let type3obj = {
		//type3level1fun
		type3level1fun : function () {
			let i = 0;
		 	while(i<1000000){
			 	//this function generates a simple mathematical expression
				//with positive and negative numbers, with addition, substraction multiplication, division, with length 6

				//randomly selecting the id for a math operator in the array symbols. Here Math.floor(Math.random() * x); x is the lenght of the array
				//Not to bother changing the x, the length of the array, by hand. I create arraylength with value array.length
				let randchararrayid = Math.floor(Math.random() * 2);
				//char1 and char2 are two random math operators, selected from symbols array
				let char1 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char2 = symbols[randchararrayid];

				//random numbers
				//random from m to n, Math.floor(Math.random() * (n-m+1) ) + m; works with negative also
				a = Math.floor(Math.random() * 51) - 25;
				b = Math.floor(Math.random() * 51) - 25;
				c = Math.floor(Math.random() * 51) - 25;

				//trying if negative addin brackets () to the number
				try {
					if (a < 0){
						a = '(' + a + ')'  
					};
					if (b < 0){
						b = '(' + b + ')'  
					};
					if (c < 0){
						c = '(' + c + ')'  
					};

				}
				catch(err){
					textarea.innerHTML = "Error type4level3fun Ocured"
				};

				//creating the math expresssion with random numbers and random operations 
				let type3level1 = `${a}${char1}${b}${char2}${c}`
				let calc = eval(type3level1);
				if (calc % 1 == 0) {
					let mathexpr = type3level1
					return mathexpr
					break
				}
				i++	
				
			}	
		},

		//type3level2fun
		type3level2fun : function () {
			let i = 0;
		 	while(i<1000000){
			 	//this function generates a simple mathematical expression
				//with positive and negative numbers, with addition, substraction multiplication, division, with length 6

				//randomly selecting the id for a math operator in the array symbols. Here Math.floor(Math.random() * x); x is the lenght of the array
				//Not to bother changing the x, the length of the array, by hand. I create arraylength with value array.length
				let randchararrayid = Math.floor(Math.random() * 2);
				//char1 and char2 are two random math operators, selected from symbols array
				let char1 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char2 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char3 = symbols[randchararrayid];

				//random numbers
				//random from m to n, Math.floor(Math.random() * (n-m+1) ) + m; works with negative also
				a = Math.floor(Math.random() * 101) - 50;
				b = Math.floor(Math.random() * 101) - 50;
				c = Math.floor(Math.random() * 101) - 50;
				d = Math.floor(Math.random() * 101) - 50;

				//trying if negative addin brackets () to the number
				try {
					if (a < 0){
						a = '(' + a + ')'  
					};
					if (b < 0){
						b = '(' + b + ')'  
					};
					if (c < 0){
						c = '(' + c + ')'  
					};
					if (d < 0){
						d = '(' + d + ')'  
					};
				}
				catch(err){
					textarea.innerHTML = "Error type4level3fun Ocured"
				};

				//creating the math expresssion with random numbers and random operations 
				let type3level2 = `${a}${char1}${b}${char2}${c}${char3}${d}`
				let calc = eval(type3level2);
				if (calc % 1 == 0) {
					let mathexpr = type3level2
					return mathexpr
					break
				}
				i++	
				
			}
		},

		//type3level3fun
		type3level3fun : function () {
			let i = 0;
		 	while(i<1000000){
			 	//this function generates a simple mathematical expression
				//with positive and negative numbers, with addition, substraction multiplication, division, with length 6

				//randomly selecting the id for a math operator in the array symbols. Here Math.floor(Math.random() * x); x is the lenght of the array
				//Not to bother changing the x, the length of the array, by hand. I create arraylength with value array.length
				let randchararrayid = Math.floor(Math.random() * 2);
				//char1 and char2 are two random math operators, selected from symbols array
				let char1 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char2 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char3 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char4 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * 2);
				let char5 = symbols[randchararrayid];

				//random numbers
				//random from m to n, Math.floor(Math.random() * (n-m+1) ) + m; works with negative also
				a = Math.floor(Math.random() * 201) - 100;
				b = Math.floor(Math.random() * 201) - 100;
				c = Math.floor(Math.random() * 201) - 100;
				d = Math.floor(Math.random() * 201) - 100;
				e = Math.floor(Math.random() * 201) - 100;
				f = Math.floor(Math.random() * 201) - 100;

				//trying if negative addin brackets () to the number
				try {
					if (a < 0){
						a = '(' + a + ')'  
					};
					if (b < 0){
						b = '(' + b + ')'  
					};
					if (c < 0){
						c = '(' + c + ')'  
					};
					if (d < 0){
						d = '(' + d + ')'  
					};
					if (e < 0){
						e = '(' + e + ')'  
					};
					if (f < 0){
						f = '(' + f + ')'  
					};
				}
				catch(err){
					textarea.innerHTML = "Error type4level3fun Ocured"
				};

				//creating the math expresssion with random numbers and random operations 
				let type3level3 = `${a}${char1}${b}${char2}${c}${char3}${d}${char4}${e}${char5}${f}`
				let calc = eval(type3level3);
				if (calc % 1 == 0) {
					let mathexpr = type3level3
					return mathexpr
					break
				}
				i++	
				
			}
		}

	};

	//creating an object which will hold all the levels for the type 4 math expression as methods
	let type4obj = {
		//type1level1fun
		type4level1fun : function () {
		 	let i = 0;
		 	while(i<1000000){
			 	//this function generates a simple mathematical expression
				//with positive and negative numbers, with addition, substraction multiplication, division, with length 6

				//randomly selecting the id for a math operator in the array symbols. Here Math.floor(Math.random() * x); x is the lenght of the array
				//Not to bother changing the x, the length of the array, by hand. I create arraylength with value array.length
				let randchararrayid = Math.floor(Math.random() * symbols.length);
				//char1 and char2 are two random math operators, selected from symbols array
				let char1 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char2 = symbols[randchararrayid];
			
				//random numbers
				//random from m to n, Math.floor(Math.random() * (n-m+1) ) + m; works with negative also
				a = Math.floor(Math.random() * 51) - 25;
				b = Math.floor(Math.random() * 51) - 25;
				c = Math.floor(Math.random() * 51) - 25;


				//trying if negative addin brackets () to the number
				try {
					if (a < 0){
						a = '(' + a + ')'  
					};
					if (b < 0){
						b = '(' + b + ')'  
					};
					if (c < 0){
						c = '(' + c + ')'  
					};
	
				}
				catch(err){
					textarea.innerHTML = "Error type4level3fun Ocured"
				};

				//creating the math expresssion with random numbers and random operations 
				let type4level1 = `${a}${char1}${b}${char2}${c}`
				let calc = eval(type4level1);
				if (calc % 1 == 0) {
					let mathexpr = type4level1
					return mathexpr
					break
				}
				i++	
				
			}
		 },

		//type4level2fun
		type4level2fun : function () {
		 	let i = 0;
		 	while(i<1000000){
			 	//this function generates a simple mathematical expression
				//with positive and negative numbers, with addition, substraction multiplication, division, with length 6

				//randomly selecting the id for a math operator in the array symbols. Here Math.floor(Math.random() * x); x is the lenght of the array
				//Not to bother changing the x, the length of the array, by hand. I create arraylength with value array.length
				let randchararrayid = Math.floor(Math.random() * symbols.length);
				//char1 and char2 are two random math operators, selected from symbols array
				let char1 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char2 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char3 = symbols[randchararrayid];

				//random numbers
				//random from m to n, Math.floor(Math.random() * (n-m+1) ) + m; works with negative also
				a = Math.floor(Math.random() * 101) - 50;
				b = Math.floor(Math.random() * 101) - 50;
				c = Math.floor(Math.random() * 101) - 50;
				d = Math.floor(Math.random() * 101) - 50;


				//trying if negative addin brackets () to the number
				try {
					if (a < 0){
						a = '(' + a + ')'  
					};
					if (b < 0){
						b = '(' + b + ')'  
					};
					if (c < 0){
						c = '(' + c + ')'  
					};
					if (d < 0){
						d = '(' + d + ')'  
					};

				}
				catch(err){
					textarea.innerHTML = "Error type4level3fun Ocured"
				};

				//creating the math expresssion with random numbers and random operations 
				let type4level2 = `${a}${char1}${b}${char2}${c}${char3}${d}`
				let calc = eval(type4level2);
				if (calc % 1 == 0) {
					let mathexpr = type4level2
					return mathexpr
					break
				}
				i++	
				
			}
		 },

		 //type4level2fun
		type4level3fun : function () {
		 	let i = 0;
		 	while(i<1000000){
			 	//this function generates a simple mathematical expression
				//with positive and negative numbers, with addition, substraction multiplication, division, with length 6

				//randomly selecting the id for a math operator in the array symbols. Here Math.floor(Math.random() * x); x is the lenght of the array
				//Not to bother changing the x, the length of the array, by hand. I create arraylength with value array.length
				let randchararrayid = Math.floor(Math.random() * symbols.length);
				//char1 and char2 are two random math operators, selected from symbols array
				let char1 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char2 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char3 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char4 = symbols[randchararrayid];
				randchararrayid = Math.floor(Math.random() * symbols.length);
				let char5 = symbols[randchararrayid];

				//random numbers
				//random from m to n, Math.floor(Math.random() * (n-m+1) ) + m; works with negative also
				a = Math.floor(Math.random() * 201) - 100;
				b = Math.floor(Math.random() * 201) - 100;
				c = Math.floor(Math.random() * 201) - 100;
				d = Math.floor(Math.random() * 201) - 100;
				e = Math.floor(Math.random() * 201) - 100;
				f = Math.floor(Math.random() * 201) - 100;

				//trying if negative addin brackets () to the number
				try {
					if (a < 0){
						a = '(' + a + ')'  
					};
					if (b < 0){
						b = '(' + b + ')'  
					};
					if (c < 0){
						c = '(' + c + ')'  
					};
					if (d < 0){
						d = '(' + d + ')'  
					};
					if (e < 0){
						e = '(' + e + ')'  
					};
					if (f < 0){
						f = '(' + f + ')'  
					};
				}
				catch(err){
					textarea.innerHTML = "Error type4level3fun Ocured"
				};

				//creating the math expresssion with random numbers and random operations 
				let type4level3 = `${a}${char1}${b}${char2}${c}${char3}${d}${char4}${e}${char5}${f}`
				let calc = eval(type4level3);
				if (calc % 1 == 0) {
					let mathexpr = type4level3
					return mathexpr
					break
				}
				i++	
				
			}
		 }
	};


	

	//generator identifies what expression and level was selected and generates the math expression
	function generator() {
		//generating the mathematical expressions 
		try{
			//select type
			if (type.value == "t1"){
				try{
					if(level.value == "l1"){output = type1obj.type1level1fun();};
					if(level.value == "l2"){output = type1obj.type1level2fun();};
					if(level.value == "l3"){output = type1obj.type1level3fun();};
				}
				catch(err){
					textarea.innerHTML = "You must select the variables"
				}
			}
			if (type.value == "t2"){
				try{
					if(level.value == "l1"){output = type2obj.type2level1fun();};
					if(level.value == "l2"){output = type2obj.type2level2fun();};
					if(level.value == "l3"){output = type2obj.type2level3fun();};
				}
				catch(err){
					textarea.innerHTML = "You must select the variables"
				}
			}
			if (type.value == "t3"){
				try{
					if(level.value == "l1"){output = type3obj.type3level1fun();};
					if(level.value == "l2"){output = type3obj.type3level2fun();};
					if(level.value == "l3"){output = type3obj.type3level3fun();};
				}
				catch(err){
					textarea.innerHTML = "You must select the variables"
				}
			}
			if (type.value == "t4"){
				try{
					if(level.value == "l1"){output = type4obj.type4level1fun();};
					if(level.value == "l2"){output = type4obj.type4level2fun();};
					if(level.value == "l3"){output = type4obj.type4level3fun();};
				}
				catch(err){
					textarea.innerHTML = "You must select the variables"
				}
			}
		}
		catch(err){
			textarea.innerHTML = "You must select the type"
		}


		return output
	}

	//func binded to the button that puts the text in the text area
	//
	function submit() {
		//defining two variables, times : the ammount of generated expressions and i for the loop 
		let times = num.value;
		let i = 0;
		//emptying the array of generated expressions and the text area. everytime the button is pressed
		text = [];
		textarea.innerHTML = ""
		try{
			//cheks if the times is set less than 500  
			if (times < 501){
				//generates math expression based on the generator function and pushes them in to the array text
				while (i < times) {
	 			genexpr = generator()
	 			text.push(genexpr);
	  			i++;
			}
			
			//puts the array text in the textarea
			textarea.innerHTML = text

		} else {textarea.innerHTML = "Max 500 times"}
	}catch(err){"Error sumbit function occured"}};


	//binding the function to the button
	button.onclick = function(){submit()};

};