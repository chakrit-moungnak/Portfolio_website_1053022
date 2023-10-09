window.onload = loginLoad;
function loginLoad(){
	var login = document.getElementById("myLogin");
	login.onsubmit = checkLogin;
	
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var uname = document.forms["myLogin"]["username"].value;
	var pass = document.forms["myLogin"]["password"].value;

	console.log(uname);
	console.log(pass);

	const input = window.location.search;

	const url = new URLSearchParams(input);
	const usern = url.get("username");
	const pass2 = url.get("password");

	console.log(usern);
	console.log(pass2);

	if(uname == usern && pass == pass2){
		alert("Login success Thank you.");
		return false;
	} else {
		alert("Login fail please try again.");
		return false;
	}
}

			