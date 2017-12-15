// JavaScript Document

//Change Display
function d(val)  {
	document.getElementById("d").value = val;
	}
	
//Type numbers and operators
function v(val)  {
	document.getElementById("d").value += val;
	}

//Rounding
function a(val)  {
	document.getElementById("d").value = Math.round(document.getElementById("d").value * val) / val;
	}

//Evaluate the equation
function e()  {
	try {
		d(eval(document.getElementById("d").value));
		}
	catch(err)  {
		d("that is bad boi");
		}
	}