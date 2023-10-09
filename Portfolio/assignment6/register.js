window.onload = pageLoad;
function pageLoad(){
    var clickbutton = document.getElementById("myForm");
    clickbutton.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var pass = document.forms["myForm"]["password"].value;
    var repass = document.forms["myForm"]["password2"].value;

    if (pass == repass){
        alert("Register complete.");
    } else {
        alert("Password and Retype Password doesn't match.");
        document.getElementById("errormsg").innerHTML = "Password and Retype Password doesn't match.";
        return false;
    }
}