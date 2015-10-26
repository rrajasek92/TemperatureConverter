function convert_click() {
	var C=document.getElementById("celsius").value;
	var F=document.getElementById("fahrenheit").value;
	if (isNaN(C)||isNaN(F)){
		alert("Invalid input!")
	}
	else if (C==""||C==null){
		document.getElementById("celsius").value=f2c(F);
		display(F);
	}
	else if (F==""||F==null){
		document.getElementById("fahrenheit").value=c2f(C);
		display(c2f(C));
	}
		
}
function c2f(c){
	return (c*(9/5))+32;
}
function f2c(f){
	return (f-32)*(5/9);
}
function clearFields(){
	console.log("cleared!");
	document.getElementById("celsius").value="";
	document.getElementById("fahrenheit").value="";
	
}
function display(t){
	if (t>=60){
		window.document.pic.src='http://www.wpclipart.com/weather/sun/sun_7/sun_strong_bold.svg';
	}
	else {
		window.document.pic.src='http://static.businessinsider.com/image/52a8d0636bb3f72e2ea6b86d/image.jpg';
	}
}

